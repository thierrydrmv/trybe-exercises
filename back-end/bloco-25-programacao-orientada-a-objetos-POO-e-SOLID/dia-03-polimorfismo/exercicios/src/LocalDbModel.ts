import { Character, db } from "./Character";
import IModel from "./IModel";

export default class LocalDbModel implements IModel {
  create = async (character: Character) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  }
  findIndexById = (id: number) => {
    const index = db.findIndex((char) => char.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  }
  update = async (id: number, character: Character) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character}
    return db[indexToUpdate]
  }
  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deleteItem = db.slice(indexToDelete, 1);
    if (deleteItem.length > 0) return true
    return false
  }
  getAll = async () => {
    return db;
  }
  getById = async (id: number) => {
    const indexToGet = this.findIndexById(id);
    return db[indexToGet];
  }
}