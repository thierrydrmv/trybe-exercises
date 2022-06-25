let n = 5;
let asterisco = "";
let espaco = " ";

if(n>1) {
    for (let i=0;i<n ; i+=1) {
        let espaco = n - (i +1);
        asterisco += "*"
        espaco += ' '
        console.log(espaco, asterisco)
    }
}
