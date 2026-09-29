let friendsArray = [];
let friendsInput = document.getElementById('amigo');
let friendsList = document.getElementById('listaAmigos');
let friendWinner = document.getElementById('resultado');

function trimInterno(texto) {
  return texto.replace(/^\s+|\s+$|(\s)\s+/g, '$1');
}

function hasSpecialCharacters(texto) {
  return /[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s]/.test(texto);
}

function generateRandomNumber(numeroMaximo) {
  return Math.floor(Math.random() * numeroMaximo);
}

function resetInputs() {
  friendsInput.value = '';
  friendsList.innerHTML = '';
}

function createListItem(texto) {
  let item = document.createElement('li');
  item.textContent = texto;
  return item;
}

function showFriendsName() {
  friendsList.innerHTML = '';
  for (let i = 0; i < friendsArray.length; i++) {
    friendsList.appendChild(createListItem(friendsArray[i]));
  }
}

function addFriends() {
  if (!friendsInput.value.trim()) {
    alert('Por favor, inserte un nombre.');
    return;
  }

  if (hasSpecialCharacters(friendsInput.value)) {
    alert('El nombre ingresado contiene caracteres no permitidos.');
    return;
  }

  friendsArray.push(trimInterno(friendsInput.value));
  resetInputs();
  showFriendsName();
}

function raffleFriends() {
  if (friendsArray.length === 0) {
    alert('No ingresaste amigos para sortear');
    return;
  }

  if (friendsArray.length === 1) {
    alert('Solo ingresaste un amigo. Ingresa al menos dos para sortear');
    return;
  }

  let friendNumber = generateRandomNumber(friendsArray.length);
  friendWinner.innerHTML = '';
  friendWinner.appendChild(createListItem(`El amigo ganador es ${friendsArray[friendNumber]}`));
}

function resetFriendsList() {
  resetInputs();
  friendsArray = [];
  friendWinner.innerHTML = '';
}
