export function saveToLocalStorage(name, assertions, score, gravatarEmail) {
  const toStorage = { player: { name, assertions, score, gravatarEmail } };
  localStorage.setItem('state', JSON.stringify(toStorage));
}

export function saveStateUserToLocalStorage(player) {
  const RANKING = 'ranking';
  const actualStorage = JSON.parse(localStorage.getItem(RANKING))||[];
  actualStorage.push(player);
  localStorage.setItem(RANKING);
}


export default saveToLocalStorage;
