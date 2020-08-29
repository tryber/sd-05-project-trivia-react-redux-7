function saveToLocalStorage(name, assertions, score, gravatarEmail) {
  const toStorage = { player: { name, assertions, score, gravatarEmail } };
  localStorage.setItem('state', JSON.stringify(toStorage));
}

export default saveToLocalStorage;
