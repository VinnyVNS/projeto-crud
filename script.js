let pacientes = []
let valorSeletor
let mensagem = document.getElementById("mensagem")

carregarDados()
atualizarSeletor()

function cadastrarPaciente(){
    formulario.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    let novoPaciente = {
        Nome: document.getElementById("nomeIpt").value,
        CPF: document.getElementById("cpfIpt").value,
        DataDeNascimento: document.getElementById("nascimentoIpt").value,
        Email: document.getElementById("emailIpt").value,
        Celular: document.getElementById("celularIpt").value
    }

    for(let i = 0; i < pacientes.length; i++){
        if(novoPaciente.Nome === pacientes[i].Nome){
            limparForm()

            mensagem.innerHTML = `Esse nome já existe.`
            
            return
        }
    }

    pacientes.push(novoPaciente)

    salvarDados()
    limparForm()
    atualizarSeletor()

    mensagem.innerHTML = `Paciente cadastrado.`
}

function verCadastro(){
    valorSeletor = document.getElementById("seletor").value

    for(let i = 0; i < pacientes.length; i++){
        if(valorSeletor === pacientes[i].Nome){
            document.getElementById("nomeIpt").value = pacientes[i].Nome
            document.getElementById("cpfIpt").value = pacientes[i].CPF
            document.getElementById("nascimentoIpt").value = pacientes[i].DataDeNascimento
            document.getElementById("emailIpt").value = pacientes[i].Email
            document.getElementById("celularIpt").value = pacientes[i].Celular
        }
    }
}

function attCadastro(){
    valorSeletor = document.getElementById("seletor").value

    for(let i = 0; i < pacientes.length; i++){
        if(valorSeletor === pacientes[i].Nome){
            pacientes[i].Nome = document.getElementById("nomeIpt").value
            pacientes[i].CPF = document.getElementById("cpfIpt").value
            pacientes[i].DataDeNascimento = document.getElementById("nascimentoIpt").value
            pacientes[i].Email = document.getElementById("emailIpt").value
            pacientes[i].Celular = document.getElementById("celularIpt").value

            salvarDados()
            limparForm()
            atualizarSeletor()

            mensagem.innerHTML = `Cadastro atualizado.`
        }
    }
}

function deletarCadastro(){
    valorSeletor = document.getElementById("seletor").value

    for(let i = 0; i < pacientes.length; i++){
        if(valorSeletor === pacientes[i].Nome){
            pacientes.splice(i, 1)

            salvarDados()
            limparForm()
            atualizarSeletor()

            mensagem.innerHTML = `Cadastro removido.`
        }
    }
}

function limparForm(){
    document.getElementById("nomeIpt").value = ``
    document.getElementById("cpfIpt").value = ``
    document.getElementById("nascimentoIpt").value = ``
    document.getElementById("emailIpt").value = ``
    document.getElementById("celularIpt").value = ``

    document.getElementById("nomeIpt").focus()

    mensagem.innerHTML = ``
}

function atualizarSeletor(){
    document.getElementById("seletor").innerHTML = ``

    for(let i = 0; i < pacientes.length; i++){
        document.getElementById("seletor").innerHTML += `
            <option value="${pacientes[i].Nome}">${pacientes[i].Nome}</option>
        `
    }
}

function salvarDados(){
    localStorage.setItem(`Pacientes`, JSON.stringify(pacientes))
}

function carregarDados(){
    pacientes = JSON.parse(localStorage.getItem(`Pacientes`)) || []
}