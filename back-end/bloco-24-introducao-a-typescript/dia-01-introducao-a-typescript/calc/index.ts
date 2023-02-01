// ./index.ts

import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Ex.getRectangleArea(200, 100)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm: ${Ex.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Ex.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Ex.getTriangleArea(100, 200)}cm²`);

console.log("\nO PERÍMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(30, 30, 30)}`);

console.log("\nA ÁREA DE UM LOSANGO:");

console.log(`- 32cm e 18cm: ${Ex.rhombusArea(32, 18)}`);
console.log(`- 32cm e 18cm: ${Ex.rhombusArea(200, 50)}`);
console.log(`- 32cm e 18cm: ${Ex.rhombusArea(75, 25)}`);

console.log("\nA ÁREA DE UM TRAPÉZIO:");

console.log(`- 100cm, 70cm e 50cm: ${Ex.trapeziumArea(100, 70, 50)}`);
console.log(`- 75cm, 50cm e 35cm: ${Ex.trapeziumArea(75, 50, 35)}`);
console.log(`- 150cm, 120cm e 80cm: ${Ex.trapeziumArea(150, 120, 80)}`);

console.log("\nA ÁREA DE UM CIRCULO:");

console.log(`- 25cm: ${Ex.circleArea(25)}`);
console.log(`- 100cm: ${Ex.circleArea(100)}`);
console.log(`- 12.5cm: ${Ex.circleArea(12.5)}`);