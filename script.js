const botaoLogin = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('#acesso')
const dados = {};

function previnirPadrao(event) {
    event.preventDefault();
}

function capiturandoDados(event) {
    dados[event.target.name] = event.target.value;
}

form.addEventListener('change', capiturandoDados)

inputs.forEach((input) => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.toggle("com-dados");
        } else {
            input.classList.remove("com-dados");
            input.classList.toggle("sem-dados");
            const mensagem = document.querySelector('.erro');
            mensagem.textContent = "Preencha os campos corretamente.";
        }
    })
})

botaoLogin.addEventListener('click', previnirPadrao);
