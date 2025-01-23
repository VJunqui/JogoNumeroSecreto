alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
let chute

// Valor do chute no log
console.log('Valor do chute', chute)

// Valor do número secreto no log
console.log('Valor do número secreto', numeroSecreto);

// Resultado da expressão no log
console.log('Resultado da comparação:', chute == numeroSecreto);

// Enquanto o chute não for igual
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 20');
    if (chute == numeroSecreto) {
        alert('Isso aí, você acertou o número secreto: '+numeroSecreto)
    }   else {
        if (chute < numeroSecreto) {
            alert('O número secreto é maior do que: ' +chute);
        } else {
            alert('O número secreto é menor do que: ' +chute);
        }
    };
        
}