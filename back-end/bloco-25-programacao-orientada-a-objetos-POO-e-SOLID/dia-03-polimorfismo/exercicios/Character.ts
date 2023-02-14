abstract class Character{
  abstract talk(): void;
  abstract specialMoves(): void;

  static charData(character: Character): void{
    character.specialMoves();
    character.talk();
  }
}

class MelleCharacter extends Character{
  constructor(private _name: string, private _specialMoveName: string){
    super()
  }
  talk(): void {
    console.log('Too slow, Hahahaaha!')
  }
  specialMoves(): void {
    console.log(this._specialMoveName);
  }
  get name(){
    return this._name;
  }
  set name(newName: string){
    this._name = newName
  }
}

class LongRangeCharacter extends Character{
  constructor(private _name: string, private _specialMoveName: string){
    super();
  }
  talk(): void {
    console.log('My arrows never miss!')
  }
  specialMoves(): void {
    console.log(this._specialMoveName)
  }
  get name(){
    return this._name;
  }
  set name(newName: string){
    this._name = newName
  }
}

const yoshi = new MelleCharacter('Yoshi','Vertical cut');
const samus = new LongRangeCharacter('Samus', 'Double strafe');

// yoshi.specialMoves(), yoshi.talk();
// samus.specialMoves(), samus.talk();

yoshi.name = 'a'

Character.charData(yoshi);
Character.charData(samus);