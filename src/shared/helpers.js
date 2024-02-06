export const wait = ms =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms)
    });

function z_modifier(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
      }

const damageModifier = z_modifier(217, 255);


const criticalValues = [0, 1, 0, 0];

export const attack = ({ attacker, receiver }) => {
    const receivedDamage =
        (((2 * attacker.level/5+2)* attacker.attack)/receiver.defense) * damageModifier * 2;

    const finalDamage = receivedDamage / 255;

    let random = criticalValues[Math.floor(Math.random() * criticalValues.length)];
    if(random === 1){
        if(attacker.name === "Samus"){
            console.log("Samus is here");
            return Math.round((finalDamage) + (attacker.maxHealth * 0.2));
        }
        return Math.round((finalDamage) + (attacker.maxHealth * 0.3));
    }

    return Math.round(finalDamage);
};

export const magic = ({ attacker, receiver }) => {
    const receivedDamage =
    (((2 * attacker.level/5+2)* attacker.magic)/receiver.magicDefense) * damageModifier * 2;

    const finalDamage = receivedDamage / 255;

    let random = criticalValues[Math.floor(Math.random() * criticalValues.length)];
    if(random === 1 ){
        if(attacker.name === "Samus"){
            console.log("Samus is here");
            return Math.round((finalDamage) + (attacker.maxHealth * 0.2));
        }
        return Math.round((finalDamage) + (attacker.maxHealth * 0.3));
    }

    return Math.round(finalDamage);
};

export const heal = ({ attacker }) => {
    const healthModifier = z_modifier(4, 5);

    return Math.round((attacker.maxHealth / healthModifier));
};