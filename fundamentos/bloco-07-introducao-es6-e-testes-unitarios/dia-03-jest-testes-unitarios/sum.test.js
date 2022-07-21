const { sum, myRemove  }= require('./sum');

test('somatório de 4 e 5 igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
})

test('somatório de 0 e 0 igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
})

test('lança erro se receber string', () => {    
    expect(() => {sum(4, "5")}).toThrow();
})

test('lança erro se receber string', () => {    
    expect(sum).toThrowError(new Error('parameters must be numbers'));
})  

test()