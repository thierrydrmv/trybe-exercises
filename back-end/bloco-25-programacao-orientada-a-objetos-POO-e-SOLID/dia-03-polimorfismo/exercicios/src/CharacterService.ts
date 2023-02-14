import IModel from "./IModel";
import LocalDbModel from "./LocalDbModel";
import MockDbModel from "./MockedDBModel";
import { Character } from "./Character";

export default class CharacterService {
  // É possível receber uma instância de qualquer classe desde que respeite as regras da Imodel
  constructor(readonly model: IModel) {}

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }
  async update(id: number, character: Character) {
    const updateCharacter = await this.model.update(id, character);
    return ({ status: 200, data: updateCharacter})
  }
  async delete(id: number){
    const deleteCharacter = await this.model.delete(id);
    if (deleteCharacter) return ({ status: 200, data: id });
    return ({ status: 404, data: 'Id not found' });
  }
  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }
  async getById(id: number) {
    const character = await this.model.getById(id);
    return ({ status: 200, data: character });
  }
}

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);