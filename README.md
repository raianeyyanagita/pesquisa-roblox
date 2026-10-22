# 🎮 BloxQuest — Pesquisa de Mercado Roblox & Painel de Análise

Plataforma interativa gamificada inspirada no universo **Roblox** para coleta e análise das **13 perguntas da pesquisa de mercado infantil**, com **animações de blocos 3D, avatar estilo Roblox customizável, sistema de fases (Obby), XP, BloxCoins, efeitos sonoros e Dashboard estatístico automático**.

## ✨ Funcionalidades
1. **Experiência Gamificada para Crianças (Estilo Obby do Roblox)**:
   - Personagem Roblox animado pulando em um *Spawn Point* com troca de cor da armadura e apelido do jogador;
   - As **13 perguntas exatas** divididas em **13 Fases de Obby** com trilha de checkpoints, barra de XP, subida de nível e ganho de **BloxCoins**;
   - Efeitos sonoros de videogame integrados (com botão de ligar/desligar som).
2. **Armazenamento Real das Respostas (`data/responses.json` + Backup Local)**:
   - Servidor Ruby (`server.rb`) na porta `3500` que grava todas as respostas em `data/responses.json`;
   - Também funciona 100% no navegador (`localStorage`) e permite integração gratuita com Webhook (Formspree / Google Sheets) caso hospedado no GitHub Pages / Vercel.
3. **Painel de Levantamento & Inteligência de Mercado**:
   - **KPIs automáticos**: Total de crianças participantes, faixa etária dominante, jogo #1 favorito e taxa de aprovação de jogos híbridos;
   - **Diagnóstico Automático de Game Design**: Texto executivo gerado na hora cruzando os gêneros mais desejados, o que as crianças mais gostam de fazer e a maior dor/reclamação atual nos jogos do Roblox;
   - **Gráficos de Barras das Perguntas 1 a 10** com contagem de votos e porcentagens em tempo real;
   - **Mural de Ideias Abertas (Perguntas 11, 12 e 13)** com todas as sugestões escritas pelas crianças;
   - **Exportação com 1 clique para Excel (`.csv`)** e Backup/Importação `.json`.

## 🚀 Como Rodar Localmente
```bash
ruby server.rb
```
Acesse no navegador: **http://localhost:3500**

## 🌐 Como Deixar as Crianças Responderem pela Internet SEM Pagar Domínio
- **Opção A (Link gratuito direto do seu Mac com Pinggy)**:
  Com o `ruby server.rb` rodando, abra outro terminal e digite:
  ```bash
  ssh -p 443 -R0:localhost:3500 a.pinggy.io
  ```
  Ele gera na hora um link `https://...free.pinggy.link` gratuito! Qualquer criança que abrir pelo celular ou computador vai responder o quiz e salvar direto no seu painel!
- **Opção B (GitHub Pages / Vercel / Netlify Grátis)**:
  Suba a pasta gratuitamente no GitHub Pages ou Vercel (`seu-projeto.vercel.app`) sem gastar nada com domínio!
