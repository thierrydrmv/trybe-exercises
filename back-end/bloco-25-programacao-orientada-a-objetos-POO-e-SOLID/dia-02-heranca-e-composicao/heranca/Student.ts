import Person from "./Person";

class Student extends Person{
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];
  constructor(name: string, birthDate: Date){
    super(name, birthDate)
    this.enrollment = this.generateEnrollment();
  }
  get enrollment(): string {
    return this._enrollment;
  }
  set enrollment(value: string) {
    this._enrollment = value;
  }
  get examsGrades(): number[]{
    return this._examsGrades;
  }
  set examsGrades(notas: number[]){
    this.validateExamsGrades(notas);
    this._examsGrades = notas;
  }
  get assignmentsGrades(): number[]{
    return this._assignmentsGrades;
  }
  set assignmentsGrades(notas: number[]){
    this.validateAssignmentsGrades(notas);
    this._assignmentsGrades = notas;
  }
  generateEnrollment(): string {
    const enrollment = `STR${Math.random() * (999999999 - 111111111) + 111111111}`;
    this.validateEnrollment(enrollment);
    return enrollment;
  }
  validateEnrollment(enrollment: string){
    if (enrollment.length < 12) throw new Error('Matricula precisa ter 12 caracteres')
  }
  validateExamsGrades(grades: number[]){
    if (grades.length > 4) throw new Error('São apenas 4 notas de provas')
  }
  validateAssignmentsGrades(grades: number[]){
    if (grades.length > 2) throw new Error('São apenas 2 notas de trabalhos')
  }
  sumGrades(grades: number[]){
    return grades.reduce((c, a) => c + a, 0)
  }
  sumAverageEnrollment(grades: number[]){
    return this.sumGrades(grades)/ grades.length;
  }
}

const gabriel = new Student('Gabriel', new Date('1972/01/01'))
gabriel.examsGrades = [1,2,3,4]
gabriel.assignmentsGrades = [4,4]
console.log(gabriel.sumAverageEnrollment(gabriel.examsGrades));


const roberto = new Student('Roberto', new Date('1972/01/01'))
roberto.examsGrades = [2,2,2,2]
roberto.assignmentsGrades = [4,4]
console.log(roberto);

const marcela = new Student('Marcela', new Date('1972/01/01'))
marcela.examsGrades = [3,3,3,3]
marcela.assignmentsGrades = [4,4]
console.log(marcela);

const rubia = new Student('Rubia', new Date('1972/01/01'))
rubia.examsGrades = [4,4,4,4]
rubia.assignmentsGrades = [4,4]
console.log(rubia);

const catarina = new Student('Catarina', new Date('1972/01/01'))
catarina.examsGrades = [1,2,3,4]
catarina.assignmentsGrades = [4,4]
console.log(catarina);
