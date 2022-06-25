let numeroPrimo = 0;

for (let i = 2; i <= 50; i += 1) {
    let primo = true;
    for (let y = 2; y < i; y += 1) {
        if (i % y === 0) {
            primo = false;
        }

}
if (primo) {
    numeroPrimo = i
}
}
console.log (numeroPrimo)