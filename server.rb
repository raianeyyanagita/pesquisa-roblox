require 'webrick'
require 'json'
require 'securerandom'
require 'digest'

# Corrige bug do sendfile no macOS com Ruby 2.6 WEBrick
module WEBrick
  class HTTPResponse
    def send_body_io(socket)
      begin
        while buf = @body.read(16384)
          socket.write(buf)
        end
      ensure
        @body.close
      end
    end
  end
end

PORT = 3500
MAX_PER_IP = 2
ROOT_DIR = File.expand_path(__dir__)
DATA_DIR = File.join(ROOT_DIR, 'data')
RESPONSES_FILE = File.join(DATA_DIR, 'responses.json')
AUTH_FILE = File.join(DATA_DIR, 'auth.json')

Dir.mkdir(DATA_DIR) unless Dir.exist?(DATA_DIR)

# Inicializa credenciais do Painel de Análise (usuário: admin | senha: 123456)
unless File.exist?(AUTH_FILE)
  default_auth = {
    'username' => 'admin',
    'password_hash' => Digest::SHA256.hexdigest('123456')
  }
  File.write(AUTH_FILE, JSON.pretty_generate(default_auth), encoding: 'UTF-8')
end

# Inicializa banco de respostas com amostras iniciais realistas
unless File.exist?(RESPONSES_FILE)
  seed_responses = [
    {
      'id' => 'resp-seed-1',
      'playerNick' => 'LukiBlox_BR',
      'avatarColor' => '#00A2FF',
      'clientIp' => 'sample-ip-1',
      'createdAt' => '22/10/2026 09:15',
      'isSample' => true,
      'answers' => {
        'q1' => '9 a 11 anos',
        'q2' => 'Todos os dias',
        'q3' => ['Brookhaven', 'Blox Fruits', '99 Nights in the Forest'],
        'q3_other' => '',
        'q4' => ['Explorar e descobrir lugares', 'Jogar com amigos', 'Completar missões e ganhar recompensas'],
        'q5' => 'Com amigos',
        'q6' => ['Ganhar itens e recompensas', 'Jogar com amigos', 'Novidades e atualizações'],
        'q7' => ['Ter que gastar Robux', 'Demorar para evoluir'],
        'q7_other' => '',
        'q8' => ['Aventura e mundo aberto', 'Mistério e investigação', 'Sobrevivência'],
        'q8_other' => '',
        'q9' => 'Sim, com certeza!',
        'q10' => ['Indicação dos amigos', 'Vídeo no TikTok ou YouTube', 'Recompensas e eventos'],
        'q11' => 'Um jogo de acampamento secreto onde de dia a gente constrói cabanas e cuida de pets dragões, e de noite aparece um mistério na floresta para resolver em equipe!',
        'q12' => 'Poder juntar construções dos amigos num mesmo mapa gigante sem precisar pagar Robux nos servidores privados.',
        'q13' => 'Se tiver missões em dupla que dão itens brilhantes grátis para o avatar e segredos escondidos no mapa!'
      }
    },
    {
      'id' => 'resp-seed-2',
      'playerNick' => 'bia_starblocks',
      'avatarColor' => '#FF3E9D',
      'clientIp' => 'sample-ip-2',
      'createdAt' => '22/10/2026 09:42',
      'isSample' => true,
      'answers' => {
        'q1' => '9 a 11 anos',
        'q2' => 'Todos os dias',
        'q3' => ['Brookhaven', 'Adopt Me!', 'Dress to Impress', 'Grow a Garden'],
        'q3_other' => '',
        'q4' => ['Construir e personalizar', 'Cuidar de animais ou personagens', 'Jogar com amigos'],
        'q5' => 'Com amigos',
        'q6' => ['Ganhar itens e recompensas', 'Desbloquear novos lugares', 'Novidades e atualizações'],
        'q7' => ['Ter que gastar Robux', 'Muitos bugs'],
        'q7_other' => '',
        'q8' => ['Simulador de vida', 'Construção e criatividade', 'Mistério e investigação'],
        'q8_other' => '',
        'q9' => 'Sim, com certeza!',
        'q10' => ['Vídeo no TikTok ou YouTube', 'Personagens e cenários bonitos', 'Indicação dos amigos'],
        'q11' => 'Uma cidade colorida onde você cria sua loja de roupas e doces, adota bichinhos mágicos e tem desfiles com temas surpresa!',
        'q12' => 'Mais roupas e acessórios fofos que a gente ganha fazendo missão em vez de comprar com Robux.',
        'q13' => 'Poder morar na mesma casa ou abrir uma loja juntas dentro do jogo!'
      }
    },
    {
      'id' => 'resp-seed-3',
      'playerNick' => 'PedroGamer_77',
      'avatarColor' => '#00E676',
      'clientIp' => 'sample-ip-3',
      'createdAt' => '22/10/2026 10:05',
      'isSample' => true,
      'answers' => {
        'q1' => '12 a 14 anos',
        'q2' => 'Algumas vezes por semana',
        'q3' => ['Blox Fruits', 'Grow a Garden', '99 Nights in the Forest'],
        'q3_other' => 'Doors',
        'q4' => ['Lutar e enfrentar desafios', 'Completar missões e ganhar recompensas', 'Explorar e descobrir lugares'],
        'q5' => 'Com amigos',
        'q6' => ['Subir de nível', 'Ganhar itens e recompensas', 'Novidades e atualizações'],
        'q7' => ['Jogos repetitivos', 'Demorar para evoluir', 'Ter que gastar Robux'],
        'q7_other' => '',
        'q8' => ['Aventura e mundo aberto', 'Sobrevivência', 'Competição e desafios'],
        'q8_other' => '',
        'q9' => 'Sim, com certeza!',
        'q10' => ['Uma ideia diferente', 'Indicação dos amigos', 'Vídeo no TikTok ou YouTube'],
        'q11' => 'Um jogo que mistura sobrevivência na ilha com poderes elementais e construção de fortalezas contra chefões.',
        'q12' => 'Modo história cooperativo que não fique só repetindo a mesma missão mil vezes para subir de nível.',
        'q13' => 'Batalhas de clãs ou desafios onde cada amigo tem um poder diferente para vencer o boss!'
      }
    },
    {
      'id' => 'resp-seed-4',
      'playerNick' => 'Manu_Kawaii08',
      'avatarColor' => '#FFB300',
      'clientIp' => 'sample-ip-4',
      'createdAt' => '22/10/2026 10:30',
      'isSample' => true,
      'answers' => {
        'q1' => '6 a 8 anos',
        'q2' => 'Só nos finais de semana',
        'q3' => ['Adopt Me!', 'Brookhaven', 'Dress to Impress'],
        'q3_other' => '',
        'q4' => ['Cuidar de animais ou personagens', 'Explorar e descobrir lugares', 'Jogar com amigos'],
        'q5' => 'Com amigos',
        'q6' => ['Ganhar itens e recompensas', 'Desbloquear novos lugares'],
        'q7' => ['Ter que gastar Robux', 'Poucas novidades'],
        'q7_other' => '',
        'q8' => ['Simulador de vida', 'Aventura e mundo aberto', 'Construção e criatividade'],
        'q8_other' => '',
        'q9' => 'Sim, com certeza!',
        'q10' => ['Personagens e cenários bonitos', 'Indicação dos amigos', 'Recompensas e eventos'],
        'q11' => 'Um parque de diversões gigante de pets onde os cachorrinhos e gatinhos voam e ganham poderes de arco-íris!',
        'q12' => 'Mais minigames fáceis para brincar com os bichinhos.',
        'q13' => 'Se tiver presentes surpresa quando a gente entra com um amigo!'
      }
    }
  ]
  File.write(RESPONSES_FILE, JSON.pretty_generate(seed_responses), encoding: 'UTF-8')
end

def load_responses
  JSON.parse(File.read(RESPONSES_FILE, encoding: 'UTF-8'))
rescue
  []
end

def save_responses(list)
  File.write(RESPONSES_FILE, JSON.pretty_generate(list), encoding: 'UTF-8')
end

def extract_client_ip(req, body_ip = nil)
  forwarded = req['X-Forwarded-For'].to_s.split(',').first.to_s.strip
  return forwarded unless forwarded.empty?
  return body_ip.to_s.strip unless body_ip.to_s.strip.empty?
  req.peeraddr[3].to_s
rescue
  'unknown-ip'
end

def json_response(res, status, payload)
  res.status = status
  res['Content-Type'] = 'application/json; charset=utf-8'
  res['Access-Control-Allow-Origin'] = '*'
  res['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
  res['Access-Control-Allow-Methods'] = 'GET, POST, DELETE, OPTIONS'
  res.body = JSON.generate(payload)
end

server = WEBrick::HTTPServer.new(
  Port: PORT,
  BindAddress: '127.0.0.1',
  DocumentRoot: ROOT_DIR,
  Logger: WEBrick::Log.new($stdout, WEBrick::Log::INFO),
  AccessLog: [[$stdout, WEBrick::AccessLog::COMMON_LOG_FORMAT]]
)

# API: Listar respostas, Verificar limite de 2 por IP, Salvar nova resposta
server.mount_proc '/api/responses' do |req, res|
  if req.request_method == 'OPTIONS'
    json_response(res, 200, { ok: true })
  elsif req.request_method == 'GET'
    list = load_responses
    ip = extract_client_ip(req, req.query['ip'])
    ip_count = list.count { |r| !r['isSample'] && r['clientIp'].to_s == ip }
    json_response(res, 200, {
      responses: list,
      clientIp: ip,
      ipCount: ip_count,
      maxPerIp: MAX_PER_IP,
      remainingForIp: [0, MAX_PER_IP - ip_count].max
    })
  elsif req.request_method == 'POST'
    begin
      body = JSON.parse(req.body.force_encoding('UTF-8'))
      action = body['action'] || 'submit'
      list = load_responses

      if action == 'submit'
        ip = extract_client_ip(req, body['clientIp'])
        ip_count = list.count { |r| !r['isSample'] && r['clientIp'].to_s == ip }

        if ip_count >= MAX_PER_IP
          json_response(res, 429, {
            error: "Limite atingido! Este endereço de IP (#{ip}) já enviou #{MAX_PER_IP} respostas.",
            limitReached: true,
            ipCount: ip_count,
            maxPerIp: MAX_PER_IP
          })
          next
        end

        new_entry = {
          'id' => "resp-#{Time.now.to_i}-#{SecureRandom.hex(3)}",
          'playerNick' => (body['playerNick'] || 'Jogador Misterioso').to_s.strip,
          'avatarColor' => (body['avatarColor'] || '#00A2FF').to_s,
          'clientIp' => ip,
          'createdAt' => Time.now.strftime('%d/%m/%Y %H:%M'),
          'isSample' => false,
          'answers' => body['answers'] || {}
        }
        list.unshift(new_entry)
        save_responses(list)
        json_response(res, 200, {
          success: true,
          entry: new_entry,
          total: list.size,
          ipCount: ip_count + 1,
          remainingForIp: [0, MAX_PER_IP - (ip_count + 1)].max
        })
      elsif action == 'reset_ip_limits'
        list.each { |r| r['clientIp'] = "archived-#{r['clientIp']}" unless r['isSample'] }
        save_responses(list)
        json_response(res, 200, { success: true, responses: list })
      elsif action == 'delete_one'
        target_id = body['id'].to_s
        list.reject! { |item| item['id'] == target_id }
        save_responses(list)
        json_response(res, 200, { success: true, responses: list })
      elsif action == 'clear_samples'
        list.reject! { |item| item['isSample'] == true }
        save_responses(list)
        json_response(res, 200, { success: true, responses: list })
      elsif action == 'import_all'
        imported = body['responses']
        if imported.is_a?(Array)
          save_responses(imported)
          json_response(res, 200, { success: true, responses: imported })
        else
          json_response(res, 400, { error: 'Formato inválido' })
        end
      end
    rescue => e
      json_response(res, 400, { error: e.message })
    end
  else
    json_response(res, 405, { error: 'Método não permitido' })
  end
end

trap('INT') { server.shutdown }
trap('TERM') { server.shutdown }

puts "=========================================================="
puts "🎮 BloxQuest — Pesquisa de Mercado Roblox + Analytics"
puts "👉 Acesse no navegador: http://localhost:#{PORT}"
puts "🛡️ Proteção Anti-Spam: Máximo de #{MAX_PER_IP} respostas por IP"
puts "=========================================================="
server.start
