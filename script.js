const botaoLogin = document.querySelector('button');
const inputs = document.querySelectorAll('input');


function previnirPadrao(event) {
    event.preventDefault();
}

botaoLogin.addEventListener('click', previnirPadrao);

inputs.forEach((input) => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.toggle("com-dados");
        } else {
            input.classList.toggle("sem-dados");
            input.classList.remove("com-dados");

            const mensagem = document.querySelector('.mensagem');
            mensagem.textContent = "Por favor, preencha os campos.";
        }
    })
})