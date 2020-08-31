export function saveToLocalStorage(name, assertions, score, gravatarEmail) {
  const toStorage = { player: { name, assertions, score, gravatarEmail } };
  localStorage.setItem('state', JSON.stringify(toStorage));
}

export function saveStateUserToLocal(player) {
  const RANKING = 'ranking';
  let newStorage = [];
  const actualStorage = JSON.parse(localStorage.getItem(RANKING));
  if (actualStorage) {
    newStorage = [...actualStorage];
  }
  newStorage.push(player);
  localStorage.setItem(RANKING, JSON.stringify(newStorage));
}
