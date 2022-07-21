const substuicao = (aluno) => {
    const nome = aluno;
    const frase = 'Tryber x aqui!'
    let newFrase = frase.split(' ');
    for (let i = 0; i < newFrase.length; i += 1){
        if (newFrase[i]==='x')
            newFrase[i] = nome
        }
    let phrase = newFrase.join(' ')
    return phrase
} 

const newString = (aluno) => {
    const skills = ['Javascript', 'HTML', 'CSS']
    let phrase = substuicao(aluno);
    return `${phrase} 
Minhas três principais habilidades são:

- ${skills[0]}
- ${skills[1]}
- ${skills[2]}`
}
console.log(newString('Thierry'))