const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 16;
const STRONG_ATTACK_VALUE = 19;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamages;
  if (mode === 'ATTACK') {
    maxDamages = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamages = STRONG_ATTACK_VALUE;
  }
  //Attack Handler
  const damages = dealMonsterDamage(maxDamages);
  currentMonsterHealth -= damages;
  const playerDamages = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamages;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Win!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost!');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('The match is Draw!');
  }
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
