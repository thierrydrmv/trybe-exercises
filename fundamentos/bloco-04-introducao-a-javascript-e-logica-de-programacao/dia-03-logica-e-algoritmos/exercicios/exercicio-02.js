let word = "tryber";
let reversal= []

for (let index=word.length; index>0; index -=1) {
    reversal.push(word[index-1])
}

console.log(reversal.join(''))