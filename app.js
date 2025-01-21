// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friendsArray = [];
let friendsInput = document.getElementById('amigo');

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
}
