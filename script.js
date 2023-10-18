const botaoLogin = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('#acesso')

function previnirPadrao(event) {
    event.preventDefault();
}

function capiturandoDados(event) {
    event.preventDefault();

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const senha = document.querySelector('#senha');

    console.log(name.value)
    console.log(email.value)
    console.log(senha.value)
}

form.addEventListener('change', capiturandoDados)

inputs.forEach((input) => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.toggle("com-dados");
        } else {
            input.classList.toggle("sem-dados");
            input.classList.remove("com-dados");
            const mensagem = document.querySelector('.erro');
            mensagem.textContent = "Preencha o campo corretamente.";
        }
    })
})

botaoLogin.addEventListener('click', previnirPadrao);
