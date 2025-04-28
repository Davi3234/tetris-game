# tetris-game
A Angular tetris-game

# Roadmap de Melhorias para o Tetris

| Prioridade | Tarefa | Descri��o | Dificuldade | Status |
|:----------:|:------:|:---------:|:-----------:|:------:|
| Alta | Melhorar gravidade | Deixar o intervalo da gravidade din�mico (aumentar velocidade conforme o tempo) | M�dio | ?? |
| Alta | Corrigir `loadNewPiece()` | Pegar a pr�xima pe�a antes de resetar a posi��o para evitar problemas | F�cil | ?? |
| Alta | Implementar Game Over | Verificar colis�o ao criar nova pe�a; parar o jogo e exibir mensagem | M�dio | ?? |
| M�dia | Melhorar renderiza��o | Usar `requestAnimationFrame` em vez de `setInterval` para o render | M�dio | ?? |
| M�dia | Mostrar Pontua��o | Adicionar pontua��o baseada nas linhas limpas e no tempo | M�dio | ?? |
| M�dia | Criar N�veis | Aumentar o n�vel (e diminuir o tempo de update) conforme linhas s�o limpas | M�dio | ?? |
| Baixa | Tela Inicial | Adicionar uma tela inicial de "Start Game" antes do jogo come�ar | F�cil | ?? |
| Baixa | Tela de Game Over Bonita | Criar uma tela de Game Over mais estilizada ao inv�s de apenas alert | M�dio | ?? |
| Baixa | Som de Movimenta��o | Adicionar efeitos sonoros ao mover/rodar a pe�a e ao completar linha | M�dio | ?? |
| Extra | Anima��o de Destrui��o de Linha | Criar uma pequena anima��o quando uma linha for limpa | Dif�cil | ?? |