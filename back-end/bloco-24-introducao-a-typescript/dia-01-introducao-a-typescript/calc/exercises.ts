export function getSquareArea(side: number): number {
  return side ** 2;
}

export function getRectangleArea(base: number, height: number): number {
  return base * height;
}

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}

// Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal 
// maior (D) pela diagonal menor (d) dividido por dois. A = (D * d) / 2

export function rhombusArea(diagonalD: number, diagonald: number): number {
  return (diagonalD * diagonald) / 2;
}

// Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) 
// com a soma da base maior (B) e a base menor (b) dividido por dois. A = [(B + b) * h] / 2

export function trapeziumArea(baseB : number, baseb: number, height: number): number {
  return ((baseB + baseb) * height) / 2;
}

// Crie uma nova função para calcular a área de um círculo. A área do círculo de raio r é calculada multiplicando o raio ao quadrado pelo 
// número irracional ℼ (em geral utilizamos ℼ = 3,14). A = ℼ * r². Dica: você pode acessar o valor de ℼ utilizando o módulo nativo Math.PI.

export function circleArea(radius: number): number {
  return Math.PI * (radius * radius);
}