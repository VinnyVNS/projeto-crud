let pacientes = []

let consultas = []

carregarDados()
attSeletorCadastros()
attSeletorPacientes()
verConsultas()

function cadastroTeste() {
    let novoPaciente = {
        IDpaciente: `2026789456`,
        Nome: `Vinicius`,
        CPF: `333.444.555-77`,
        DataDeNascimento: `1995-05-05`,
        Email: `teste@teste.com`,
        Celular: `99933-5577`
    }

    pacientes.push(novoPaciente)

    salvarDados()
    limparFormCadastro()
    attSeletorCadastros()
    attSeletorPacientes()

    let mensagemCerto = document.getElementById("mensagemCadastroCerto")

    mensagemCerto.innerHTML = `Paciente cadastrado.`
}

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

    let mensagemErro = document.getElementById("mensagemCadastroErro")
    let mensagemCerto = document.getElementById("mensagemCadastroCerto")

    for(let i = 0; i < pacientes.length; i++){
        if(novoPaciente.IDpaciente === pacientes[i].IDpaciente){
            mensagemErro.innerHTML = `ID já cadastrado.`
            
            return
        }
    }

    pacientes.push(novoPaciente)

    salvarDados()
    limparFormCadastro()
    attSeletorCadastros()
    attSeletorPacientes()

    mensagemCerto.innerHTML = `Paciente cadastrado.`
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

    let mensagemCerto = document.getElementById("mensagemCadastroCerto")

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

    mensagemCerto.innerHTML = `Cadastro atualizado.`

    salvarDados()
    attSeletorCadastros()
    attSeletorPacientes()
    verConsultas()
}

function deletarCadastro(){
    formPaciente.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    let mensagemCerto = document.getElementById("mensagemCadastroCerto")

    let valorSeletor = document.getElementById("seletorCadastro").value

    for(let i = 0; i < pacientes.length; i++){
        if(valorSeletor === pacientes[i].IDpaciente){
            pacientes.splice(i, 1)

            salvarDados()
            limparFormCadastro()
            attSeletorCadastros()
            attSeletorPacientes()

            mensagemCerto.innerHTML = `Cadastro removido.`
        }
    }
}

function cadastrarConsulta(){
    consultaForm.addEventListener("submit", (event) => {
        event.preventDefault()
    })
    
    let novaConsulta
    
    let valorSeletor = document.getElementById("seletorConsulta").value

    let mensagemErro = document.getElementById("mensagemConsultaErro")
    let mensagemCerto = document.getElementById("mensagemConsultaCerto")

    if(valorSeletor === "null"){
        mensagemErro.innerHTML = `Selecione um Paciente.`
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

    for(let i = 0; i < consultas.length; i++){
        if(novaConsulta.IDconsulta === consultas[i].IDconsulta){
            mensagemErro.innerHTML = `ID já cadastrado.`
            
            return
        }
    }

    consultas.push(novaConsulta)
    
    salvarDados()
    limparFormConsulta()
    verConsultas()

    mensagemCerto.innerHTML = `Consulta Cadastrada.`
}

function verConsultas(){
    document.getElementById("consultasMarcadas").innerHTML = ``
    
    for(let i = 0; i < consultas.length; i++){
        document.getElementById("consultasMarcadas").innerHTML += `
            <div id="areaConsulta">
                <div class="consultaNova">
                    <h2>Informações do Paciente</h2>
                    <p><strong>ID do Paciente: ${consultas[i].pacienteInfo.IDpaciente}</strong></p>
                    <p><strong>Nome: ${consultas[i].pacienteInfo.Nome}</strong></p>
                    <p><strong>CPF: ${consultas[i].pacienteInfo.CPF}</strong></p>
                    <p><strong>Data de Nascimento: ${consultas[i].pacienteInfo.DataDeNascimento}</strong></p>
                    <p><strong>Email: ${consultas[i].pacienteInfo.Email}</strong></p>
                    <p><strong>Celular: ${consultas[i].pacienteInfo.Celular}</strong></p>
                    <br><br>
                    <h2>Informações da Consulta</h2>
                    <p><strong>ID da Consulta: ${consultas[i].IDconsulta}</strong></p>
                    <p><strong>Data da Consulta: ${consultas[i].DataConsulta}</strong></p>
                    <p><strong>Hora da Consulta: ${consultas[i].HoraConsulta}</strong></p>
                    <p><strong>Endereço: ${consultas[i].EnderecoConsulta}</strong></p>
                    <p><strong>Consultório: ${consultas[i].Consultorio}</strong></p>
                    <p><strong>Nome do Médico: ${consultas[i].NomeDoMedico}</strong></p>  
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
    
    let mensagemErro = document.getElementById("mensagemCadastroErro")
    let mensagemCerto = document.getElementById("mensagemCadastroCerto")

    document.getElementById("idPaciente").value = ``
    document.getElementById("nomeIpt").value = ``
    document.getElementById("cpfIpt").value = ``
    document.getElementById("nascimentoIpt").value = ``
    document.getElementById("emailIpt").value = ``
    document.getElementById("celularIpt").value = ``

    document.getElementById("idPaciente").focus()

    mensagemErro.innerHTML = ``
    mensagemCerto.innerHTML = ``
}

function limparFormConsulta(){
    consultaForm.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    let mensagemErro = document.getElementById("mensagemConsultaErro")
    let mensagemCerto = document.getElementById("mensagemConsultaCerto")

    document.getElementById("idConsulta").value = ``
    document.getElementById("dataConsulta").value = ``
    document.getElementById("horaConsulta").value = ``
    document.getElementById("enderecoConsulta").value = ``
    document.getElementById("consultorio").value = ``
    document.getElementById("medicoConsulta").value = ``

    document.getElementById("idConsulta").focus()

    mensagemErro.innerHTML = ``
    mensagemCerto.innerHTML = ``
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