const notas = [10, 8.9, 7.8];

function exibirNotas (notas){
    console.log(`A primeira nota do aluno é: ${notas[0]}`);
    console.log(`A segunda nota do aluno é: ${notas[1]}`);
    console.log(`A terceira nota do aluno é: ${notas[2]}`);
}

exibirNotas(notas);

const media = (notas) => ((notas[0] + notas[1] + notas[2]) / notas.length);

console.log(`A média do aluno é ${media(notas)}`);

if (media(notas) >= 7.0) {
    console.log(`O aluno está APROVADO! Obteve média ${media(notas)}`)
} else {
    console.log(`O aluno está REPROVADO! Obteve média ${media(notas)}`)
}