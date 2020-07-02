const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 16;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damages = dealMonsterDamage(ATTACK_VALUE);
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

attackBtn.addEventListener('click', attackHandler);
