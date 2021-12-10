const { response } = require("express")
const { get } = require("../routes/navbarRoute")

function init(){
    getNavbar()
    getTipos()
    
}


function getNavbar()
{
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=> {
        nbar.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}


function getTipos()
{ const tipos= document.getElementById('tipo')
    fetch('http://localhost:3000/formdata')
    .then(res => res.json())
    .then(data=>{
        for(let i=0; i<data.length; i++){
            const op =
            `<option value"${data[i].idtipo}">${data[i].designacao}</option>`
            tipos.innerHTML +=op
        }
    })
    .catch()
}




function getData(){
const bdate=document.getElementById('dnasc').value
if(dnasc=="")
        alert('Tem de indicar uma data de nascimento.')
        else
        console.log(dnasc) 

const nome=document.getElementById('nome').value
    if(nome=="")
       alert('Tem de indicar um Nome')
       else
       console.log(nome) 

const morada_rua=document.getElementById('morada_rua').value
    if(morada_rua=="")
        alert('Tem de indicar uma morada.')
        else
        console.log(morada_rua) 

const morada_num=document.getElementById('morada_num').value
    if(morada_num=="")
        alert('Tem de indicar o numero da morada.')
        else
        console.log(morada_num) 

const email=document.getElementById('email').value
    if(email=="")
        alert('Tem de indicar um mail.')
        else
        console.log(email) 
     

const telem=document.getElementById('telem').value
    if(telem=='')
        alert('Tem de indicar um telemóvel.')
    else {
        let i = 0
    for(i; i<telem.length; i++){
        let c = telem.charAt(i)
        console.log(c)
    if(isNaN(c)){
        console.log('número inválido')
        break
    }       
}
    console.log(i)
    if(i == telem.length){
        const telemInt = parseInt(telem)
        console.log(telemInt)
}
}

const tipo = document.getElementById('tipo').innerHTML
    if(tipo=='')
        alert('Tem de indicar um tipo')

        let dadosutilizador={
            nomeutilizador: nome,
            moradarua: morada_rua,
            moradanumero: morada_num,
            datanascimento: dnasc,
            telemovel: telem,
            email:email,
            idtipo:tipo
        }
        //criar um JSON com um objeto
        let jsonDados= JSON.stringify(dadosutilizador)
        console.log(jsonDados)

        const options={
            method:'POST',
            header: {
                'Content-type':'application/json'
            },
            body: jsonDados
        }

        fetch('http:/localhost:3000/utilizador',options)
        .then(res=> res.json)
        .then(res => alert(response))
        .catch((err)=>{
            alert('aconteceu um erro com o pedido')
        })
}

/*
function processData(data) {
    const linhaCidade = document.getElementById('cidades')
    linhaCidade.innerHTML=''
    for(let i=0 ; i < 100; i++){
        let nome = data[i].Name
        let distrito = data[i].District
        let pop = data[i].Population
        let ID = data[i].ID 
        linhaCidade.innerHTML += `<tr>
                                    <td>${nome}</td>
                                    <td>${distrito}</td>
                                    <td>${pop}</td>
                                    <td>
                                    <button
                                        onclick="showID(${ID});"
                                        type="button" 
                                        class="btn btn-success"
                                        style="width:100px;"> Editar                                      
                                    </button>
                                    <button 
                                        type="button" 
                                        class="btn btn-danger"
                                        style="width:100px;"> Eliminar
                                    </button>
                                    </td>
                                </tr>`
    }
}
function showID(ID){
    console.log(ID)
}*/