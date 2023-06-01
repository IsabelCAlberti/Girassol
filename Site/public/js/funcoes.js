
function cadastrar() {
    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    let regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (nomeVar == "" || nomeVar.trim().length === 0) {
        alert('Nome deve ser informado!')
        return false;
    } else if (emailVar == "" || emailVar.trim().length === 0 || !regexEmail.test(emailVar.trim())) {
        alert('Ops, E-mail inválido')
        return false;
    }
   
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar
        })
    }).then(function (res, error) {
        if (res.ok) {
            mensagemAvaliacao.innerHTML = "Cadastro realizado com sucesso!";
            sessionStorage.setItem('EMAIL_USUARIO', emailVar)
            btnCadastrar.style.display = 'none'
        } else if (error) {
            res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
    })
    return false;
}


function verificarAvaliacaoSite() {
    var valor = document.getElementById("id_avaliacaoSite");
    var opcao_valor = valor.options[valor.selectedIndex].value;

    if (opcao_valor >= 1 || opcao_valor <= 5) {
        mensagemAvaliacao.innerHTML = "Obrigado pela avaliação. Vou trabalhar para melhorar.";
    } else if (opcao_valor > 5 || opcao_valor <= 8) {
        mensagemAvaliacao.innerHTML = "uhul! Tentarei manter este padrão e melhora-lo. Obrigado por sua avaliação!";
    } else if (opcao_valor == 9) {
        mensagemAvaliacao.innerHTML = "Muito Bom. Gostei de sua avaliação. Faltou pouco para a excelência!";
    } else {
        mensagemAvaliacao.innerHTML +=
            "Excelente. Que bom que gostou!! Tentarei manter este padrão sempre. Obrigado por sua avaliação!";
    }
}

function mgsEncerramento() {
    alert("Comentário realizado com sucesso!")
}


function validacaoComentario() {
    var checkSim = document.getElementsByName("ipt_utilSim");
    var checkNao = document.getElementsByName("ipt_utilNao");

    if (id_titulo.value == "") {
        alert('Título deve ser preenchido')
    }
    else if (id_comentario.value == "") {
        alert("Comentário não informado")
    }
    else if (id_avaliacaoSite.value == "") {
        alert("Avalie-me, para que eu possa buscar a excelência")
        verificarAvaliacaoSite()
           }
    else if (checkNao == "" || checkSim == "") {
        alert("Por favor, Diga se o conteúdo da página foi útil")
        } else if(checkNao != "" || checkSim != ""){
        validarUtilidade()
    }
    else {
        setTimeout(mgsEncerramento, 300)
    }
}

function validarUtilidade() {
    var checkSim = document.getElementsByName("ipt_utilSim");
    var checkNao = document.getElementsByName("ipt_utilNao");

    if (checkSim.checked == true || checkNao.checked == false) {
        mensagemAvaliacao.innerHTML += "<br>Excelente. Que bom que gostou!!";
    } else if (checkSim.checked == false || checkNao.checked == true) {
        mensagemAvaliacao.innerHTML += "<br>Que pena. =/!!";
    } else {
        alert("Por favor, Diga se o conteúdo da página foi útil")
    }
}

function publicar() {
    validacaoComentario()
    fetch("/avisos/publicar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            tituloServer: id_titulo.value,
            descricaoServer: id_comentario.value,
            classificacaoServer: id_avaliacaoSite.value,
            utilServer: ipt_utilSim.value,
                     emailVar: sessionStorage.getItem('EMAIL_USUARIO')
        })
    })
        .then(function (res, error) {
            mensagemAvaliacao.innerHTML = "Comentário registrado com sucesso!";
            return res.json()
        }).then((data)=>{
                        plotarComentarios(data)
          })

    function plotarComentarios(resposta) {
        impressao_comentario.style.display = "block"
        console.log("Essa é a resposta: ",resposta);
            var contador = 0

        impressao_comentario.innerHTML = ``;

        while (contador < resposta.length) {
            impressao_comentario.innerHTML += `
            <b>Avaliou conteúdo como: 
          ${resposta[contador].classificacao} estrelas </b>
          <br><br>
        Usuário: ${resposta[contador].nome}
        <br><br>
       Título: ${resposta[contador].titulo}
        <br><br>
    Comentário: ${resposta[contador].descricao}</b>
     <br><br>
     <div style="height: 100px;"></div>`;;
            contador++;
        }
        
    }
}