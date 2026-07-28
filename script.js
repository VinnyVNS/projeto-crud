let pacientes = []

let consultas = []

carregarDados()
attSeletorCadastros()
attSeletorPacientes()
verConsultas()

function cadastrarPaciente(){
    formPaciente.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    let novoPaciente = {
        IDpaciente: document.getElementById("idPaciente").value,
        Nome: document.getElementById("nomeIpt").value,
        CPF: document.getElementById("cpfIpt").value,
        DataDeNascimento: document.getElementById("nascimentoIpt").value,
        Email: document.getElementById("emailIpt").value,
        Celular: document.getElementById("celularIpt").value
    }

    let mensagem = document.getElementById("mensagemCadastro")

    for(let i = 0; i < pacientes.length; i++){
        if(novoPaciente.IDpaciente === pacientes[i].IDpaciente){
            mensagem.innerHTML = `ID já cadastrado.`
            
            return
        }
    }

    pacientes.push(novoPaciente)

    salvarDados()
    limparFormCadastro()
    attSeletorCadastros()
    attSeletorPacientes()

    mensagem.innerHTML = `Paciente cadastrado.`
}

function verCadastro(){
    formPaciente.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    let valorSeletor = document.getElementById("seletorCadastro").value

    for(let i = 0; i < pacientes.length; i++){
        if(valorSeletor === pacientes[i].IDpaciente){
            document.getElementById("idPaciente").value = pacientes[i].IDpaciente
            document.getElementById("nomeIpt").value = pacientes[i].Nome
            document.getElementById("cpfIpt").value = pacientes[i].CPF
            document.getElementById("nascimentoIpt").value = pacientes[i].DataDeNascimento
            document.getElementById("emailIpt").value = pacientes[i].Email
            document.getElementById("celularIpt").value = pacientes[i].Celular
        }
    }
}

function attCadastro(){
    formPaciente.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    let mensagem = document.getElementById("mensagemCadastro")

    let valorSeletor = document.getElementById("seletorCadastro").value

    for(let i = 0; i < pacientes.length; i++){
        if(valorSeletor === pacientes[i].IDpaciente){
            pacientes[i].Nome = document.getElementById("nomeIpt").value
            pacientes[i].CPF = document.getElementById("cpfIpt").value
            pacientes[i].DataDeNascimento = document.getElementById("nascimentoIpt").value
            pacientes[i].Email = document.getElementById("emailIpt").value
            pacientes[i].Celular = document.getElementById("celularIpt").value
        }
    }

    for(let i = 0; i < consultas.length; i++){
        if(valorSeletor === consultas[i].pacienteInfo.IDpaciente){
            consultas[i].pacienteInfo.Nome = document.getElementById("nomeIpt").value
            consultas[i].pacienteInfo.CPF = document.getElementById("cpfIpt").value
            consultas[i].pacienteInfo.DataDeNascimento = document.getElementById("nascimentoIpt").value
            consultas[i].pacienteInfo.Email = document.getElementById("emailIpt").value
            consultas[i].pacienteInfo.Celular = document.getElementById("celularIpt").value
        }
    }

    limparFormCadastro()

    mensagem.innerHTML = `Cadastro atualizado.`

    salvarDados()
    attSeletorCadastros()
    attSeletorPacientes()
    verConsultas()
}

function deletarCadastro(){
    formPaciente.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    let mensagem = document.getElementById("mensagemCadastro")

    let valorSeletor = document.getElementById("seletorCadastro").value

    for(let i = 0; i < pacientes.length; i++){
        if(valorSeletor === pacientes[i].IDpaciente){
            pacientes.splice(i, 1)

            salvarDados()
            limparFormCadastro()
            attSeletorCadastros()
            attSeletorPacientes()

            mensagem.innerHTML = `Cadastro removido.`
        }
    }
}

function cadastrarConsulta(){
    consultaForm.addEventListener("submit", (event) => {
        event.preventDefault()
    })
    
    let novaConsulta
    
    let valorSeletor = document.getElementById("seletorConsulta").value

    if(valorSeletor === "null"){
        return
    }
    
    for(let i = 0; i < pacientes.length; i++){
        if(valorSeletor === pacientes[i].IDpaciente){
            novaConsulta = {
                pacienteInfo: pacientes[i],
                IDconsulta: document.getElementById("idConsulta").value,
                DataConsulta: document.getElementById("dataConsulta").value,
                HoraConsulta: document.getElementById("horaConsulta").value,
                EnderecoConsulta: document.getElementById("enderecoConsulta").value,
                Consultorio: document.getElementById("consultorio").value,
                NomeDoMedico: document.getElementById("medicoConsulta").value
            }
        }
    }
    
    consultas.push(novaConsulta)
    
    salvarDados()
    limparFormConsulta()
    verConsultas()
}

function verConsultas(){
    document.getElementById("consultasMarcadas").innerHTML = ``
    
    for(let i = 0; i < consultas.length; i++){
        document.getElementById("consultasMarcadas").innerHTML += `
            <div id="areaConsulta">
                <div class="consultaNova">
                    <h2>Informações do Paciente</h2>
                    <p>ID do Paciente: ${consultas[i].pacienteInfo.IDpaciente}</p>
                    <p>Nome: ${consultas[i].pacienteInfo.Nome}</p>
                    <p>CPF: ${consultas[i].pacienteInfo.CPF}</p>
                    <p>Data de Nascimento: ${consultas[i].pacienteInfo.DataDeNascimento}</p>
                    <p>Email: ${consultas[i].pacienteInfo.Email}</p>
                    <p>Celular: ${consultas[i].pacienteInfo.Celular}</p>
                    <br><br>
                    <h2>Informações da Consulta</h2>
                    <p>ID da Consulta: ${consultas[i].IDconsulta}</p>
                    <p>Data da Consulta: ${consultas[i].DataConsulta}</p>
                    <p>Hora da Consulta: ${consultas[i].HoraConsulta}</p>
                    <p>Endereço: ${consultas[i].EnderecoConsulta}</p>
                    <p>Consultório: ${consultas[i].Consultorio}</p>
                    <p>Nome do Médico: ${consultas[i].NomeDoMedico}</p>  
                </div>
        
                <div id="delConsulta">
                    <button onclick="deletarConsulta('${consultas[i].IDconsulta}')" class="btnDel">X</button>
                </div>
            </div>        
        `
    }
    
    
}

function deletarConsulta(idDel){
    let valorBtn = idDel
    
    for(let i = 0; i < consultas.length; i++){
        if(valorBtn === consultas[i].IDconsulta){
            consultas.splice(i, 1)
        }
    }
    
    salvarDados()
    limparFormConsulta()
    verConsultas()
}

function limparFormCadastro(){
    formPaciente.addEventListener("submit", (event) => {
        event.preventDefault()
    })
    
    let mensagem = document.getElementById("mensagemCadastro")

    document.getElementById("idPaciente").value = ``
    document.getElementById("nomeIpt").value = ``
    document.getElementById("cpfIpt").value = ``
    document.getElementById("nascimentoIpt").value = ``
    document.getElementById("emailIpt").value = ``
    document.getElementById("celularIpt").value = ``

    document.getElementById("idPaciente").focus()

    mensagem.innerHTML = ``
}

function limparFormConsulta(){
    consultaForm.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    document.getElementById("idConsulta").value = ``
    document.getElementById("dataConsulta").value = ``
    document.getElementById("horaConsulta").value = ``
    document.getElementById("enderecoConsulta").value = ``
    document.getElementById("consultorio").value = ``
    document.getElementById("medicoConsulta").value = ``

    document.getElementById("idConsulta").focus()
}

function attSeletorCadastros(){
    document.getElementById("seletorCadastro").innerHTML = ``
    
    document.getElementById("seletorCadastro").innerHTML += `
            <option value="null">Lista de Cadastros</option>
        `

    for(let i = 0; i < pacientes.length; i++){
        document.getElementById("seletorCadastro").innerHTML += `
            <option value="${pacientes[i].IDpaciente}">${pacientes[i].Nome}</option>
        `
    }
}

function attSeletorPacientes(){
    document.getElementById("seletorConsulta").innerHTML = ``

    document.getElementById("seletorConsulta").innerHTML += `
            <option value="null">Lista de Pacientes</option>
        `

    for(let i = 0; i < pacientes.length; i++){
        document.getElementById("seletorConsulta").innerHTML += `
            <option value="${pacientes[i].IDpaciente}">${pacientes[i].Nome}</option>
        `
    }
}

function salvarDados(){
    localStorage.setItem(`Pacientes`, JSON.stringify(pacientes))
    localStorage.setItem(`Consultas`, JSON.stringify(consultas))
}

function carregarDados(){
    pacientes = JSON.parse(localStorage.getItem(`Pacientes`)) || []
    consultas = JSON.parse(localStorage.getItem(`Consultas`)) || []
}