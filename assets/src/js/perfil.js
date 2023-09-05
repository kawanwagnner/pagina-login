const localNome = document.querySelector(".titulo");
const localEmail = document.querySelector(".email-box");
const localPassword = document.querySelector(".password-box");

const nameUser = localStorage.getItem("nome");
const lastName = localStorage.getItem("sobrenome");
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

const fullNameUser = (firstName, lastName) => {
  if (firstName !== null || lastName !== null) {
    return firstName + " " + lastName;
  } else {
    return "Usuário não logado :(";
  }
};

// Selecionando o elemento <p> pelo seu ID
const userStatusElement = document.getElementById("userStatus");

// Definindo o conteúdo do elemento e a classe para estilização
userStatusElement.textContent = fullNameUser(nameUser, lastName);
userStatusElement.classList.add("user-status"); // Adicione uma classe para estilização no CSS

localEmail.innerHTML = email;
localPassword.innerHTML = password;

const btn = document.querySelector("#clean");
btn.addEventListener("click", () => {
  location.href = "index.html";
  localStorage.clear();
});

const changePhoto = document.querySelector("#change-photo");
const phtoPerfil = document.querySelector("#foto-perfil");
const containerChangePhoto = document.querySelector("#container-hover");

phtoPerfil.addEventListener("mouseenter", () => {
  changePhoto.style.opacity = 1;
});

phtoPerfil.addEventListener("mouseout", () => {
  changePhoto.style.opacity = 0;
});

const termos = document.querySelector(".terms-utilize");
termos.addEventListener("click", () => {
  alert(
    'Use com modereção e não esqueça de me seguir no GitHub: Clique em suporte ou pesquise direto no GitHub por "kawanwagnner".'
  );
  alert("Muito obrigado por testar a aplicação! 😊");
});
