# tetris-game
A Angular tetris-game

# Roadmap de Melhorias para o Tetris

| Prioridade | Tarefa | Descrição | Dificuldade | Status |
|:----------:|:------:|:---------:|:-----------:|:------:|
| Alta | Melhorar gravidade | Deixar o intervalo da gravidade dinâmico (aumentar velocidade conforme o tempo) | Médio | ?? |
| Alta | Corrigir `loadNewPiece()` | Pegar a próxima peça antes de resetar a posição para evitar problemas | Fácil | ?? |
| Alta | Implementar Game Over | Verificar colisão ao criar nova peça; parar o jogo e exibir mensagem | Médio | ?? |
| Média | Melhorar renderização | Usar `requestAnimationFrame` em vez de `setInterval` para o render | Médio | ?? |
| Média | Mostrar Pontuação | Adicionar pontuação baseada nas linhas limpas e no tempo | Médio | ?? |
| Média | Criar Níveis | Aumentar o nível (e diminuir o tempo de update) conforme linhas são limpas | Médio | ?? |
| Baixa | Tela Inicial | Adicionar uma tela inicial de "Start Game" antes do jogo começar | Fácil | ?? |
| Baixa | Tela de Game Over Bonita | Criar uma tela de Game Over mais estilizada ao invés de apenas alert | Médio | ?? |
| Baixa | Som de Movimentação | Adicionar efeitos sonoros ao mover/rodar a peça e ao completar linha | Médio | ?? |
| Extra | Animação de Destruição de Linha | Criar uma pequena animação quando uma linha for limpa | Difícil | ?? |