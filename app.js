let friendsArray = [];
let friendsInput = document.getElementById('amigo');
let friendsList = document.getElementById('listaAmigos');

function trimInterno(texto) {
  return texto.replace(/^\s+|\s+$|(\s)\s+/g, '$1');
}

function hasSpecialCharacters(texto) {
  return /[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s]/.test(texto);
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
  friendsInput.value = '';
  friendsList.innerHTML = '';

  let listaHTML = '';
  for (let i = 0; i < friendsArray.length; i++) {
    listaHTML += `<li>${friendsArray[i]}</li>`;
  }
  friendsList.innerHTML = listaHTML;
}
