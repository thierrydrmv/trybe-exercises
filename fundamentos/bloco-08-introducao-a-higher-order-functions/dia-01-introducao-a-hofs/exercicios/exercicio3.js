const resultado = (gabarito, aluno, calculo) => {
    return calculo(gabarito, aluno)
}

let comparacao = (gabarito, aluno) => {
    let nota = 0
    for (var i = 0 ; i < gabarito.length; i += 1) {
        if (aluno[i] === gabarito[i]){
            nota +=1;
        } else if (aluno[i] === 'N.A') {
            nota +=0
        } else if (aluno[i] !== gabarito[i] && aluno[i] !== 'N.A') {
        nota -=0.5}
    }
    return nota;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(resultado(RIGHT_ANSWERS,STUDENT_ANSWERS, comparacao));
