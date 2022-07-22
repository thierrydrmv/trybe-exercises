const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
    let damage = Math.floor(Math.random() * (dragon.strength - 15) + 15)
    return damage;
}

const warriorDamage = () => {
    let damage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength)
    return damage;
}

const mageDamage = () => {
    let damage = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence ) + mage.intelligence)
    let mana = mage.mana < 15 ? 'Não possui mana suficiente' : mage.mana - 15;
    return {
        dano: damage,
        mp: 15,
    }
}

const gameActions = {
    warriorTurn : (warriorDamage) => {
        dragon.healthPoints = dragon.healthPoints - warriorDamage();
        warrior.damage = warriorDamage();
    },
    mageTurn : (mageDamage) => {
        let mageAttack = mageDamage();
        dragon.healthPoints = dragon.healthPoints - mageAttack.dano;
        mage.mana = mage.mana - mageAttack.mp;
        mage.damage = mageAttack.dano;
    },
    dragonTurn : (dragonDamage) => {
        warrior.healthPoints = warrior.healthPoints - dragonDamage();
        mage.healthPoints = mage.healthPoints - dragonDamage();
        dragon.damage = dragonDamage()
    },

    resultado: () => console.log(battleMembers)
  };

console.log();

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.resultado();
