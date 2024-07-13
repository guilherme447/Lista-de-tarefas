function addTarefa(e) {
    const inputTarefa = document.querySelector("#criar--tarefa")
        //impetir que form seja "enviado" e o recarregamento da pagina
    e.preventDefault()
        //começlo da validaçao
    if (!inputTarefa.value) {


        inputTarefa.classList.add("atençao")
        setTimeout(() => {
            inputTarefa.classList.remove("atençao")
        }, 800)
        return
    }
    //fim da validaçao
    const conteiner = document.querySelector("#tarefas")
    const novaTarefa = document.createElement("article")

    novaTarefa.classList.add("tarefa--item")
    novaTarefa.innerHTML = ` <input type="checkbox" class="tarefa--check" name="concluido">
    <h2 class="tarefa--titulo">${inputTarefa.value}</h2>`
    conteiner.append(novaTarefa)

    inputTarefa.value = ""
 

adicionarEventos()
atualizarContador()
}


function alternarTarefa(event) {

    const conteinerCheck = event.target.parentElement
    conteinerCheck.classList.toggle("concluida")
   
    
}

const botaoAdd = document.querySelector("#add--tarefa")
botaoAdd.addEventListener("click", addTarefa)



function adicionarEventos() {
    const todosCheck = document.querySelectorAll(".tarefa--check")

    for (const check of todosCheck) {
        check.addEventListener("change", alternarTarefa)
        
    }
}

function atualizarContador() {
    
    const numTarefa = document.querySelectorAll(".tarefa--item").length
    const contador = document.querySelector(".counter")
    
    if (numTarefa <= 0) {
        contador.innerHTML = "tudo feito"
    } else {
        contador.innerHTML = `${numTarefa} ${numTarefa > 1 ? "tarefa" : "tarefas"}`
    }
}

const botaoConcluida = document.querySelector ("#done")
botaoConcluida.addEventListener("click", () => {filtrarTarefa ("concluida")})
const botaotodas =document.querySelector("#todas")
botaotodas.addEventListener("click", filtrarTarefa)


function filtrarTarefa(filtro) {
    const todasTarefas = document.querySelectorAll(".tarefa--item")
    if (filtro ==="concluida") {
        for (const tarefa  of todasTarefas) {
            tarefa.classList.contains("concluida") ? tarefa.style.display = "flex" 
           : tarefa.style.display = "none"
        }
    } else  {
        for (const tarefa of todasTarefas) {
            tarefa.style.display ="flex"
        }
    }
}