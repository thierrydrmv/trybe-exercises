import Class from "./Class";
import Person from "./Person";
import Employee from "./Employee";

class Teacher extends Person implements Employee {
  private _subject: Class;
  private _registration = String();
  private _admissionDate: Date;
  constructor(name: string, birthDate: Date, private _salary: number, subject: Class){
    super(name, birthDate)

    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  }
  get subject(): Class {
    return this._subject;
  }

  set subject(value: Class) {
    this._subject = value;
  }
  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 12) throw new Error('O registro deve possuir no mínimo 12 caracteres.');

    this._registration = value;
  }
  get salary(){
    return this._salary;
  }
  set salary(salary: number){
    this._salary = salary;
  }
  get admissionDate(){
    return this._admissionDate;
  }
  set admissionDate(date: Date){
    this._admissionDate = date;
  }
  generateRegistration(): string {
    const enrollment = `STR${Math.random() * (999999999 - 111111111) + 111111111}`;
    return enrollment;
  }
}

const person = new Teacher('Thierry', new Date('1997/03/21'), 3000, new Class('Desenvolvimento Web'))

console.log(person);
