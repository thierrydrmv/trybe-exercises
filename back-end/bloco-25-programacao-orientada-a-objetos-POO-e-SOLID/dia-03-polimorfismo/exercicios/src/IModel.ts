import { Character, DbCharacter } from "./Character";

interface IModel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
}

export default IModel;