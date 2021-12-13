

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
            `<option value="${data[i].idtipo}">${data[i].designacao}</option>`
            tipos.innerHTML +=op
        }
    })
    .catch()
}




function getData(){
    const bdate=document.getElementById('dnasc').value
    if(dnasc=="") 
        alert('Tem de indicar uma data de nascimento.')

    const nome=document.getElementById('nome').value
    if(nome=="")
       alert('Tem de indicar um Nome')


    const morada_rua=document.getElementById('morada_rua').value
    if(morada_rua=="")
        alert('Tem de indicar uma morada.')


    const morada_num=document.getElementById('morada_num').value
    if(morada_num=="")
        alert('Tem de indicar o numero da morada.')


    const email=document.getElementById('email').value
    if(email=="")
        alert('Tem de indicar um mail.')

     

    const telem=document.getElementById('telem').value
    if(telem=='')
        alert('Tem de indicar um telemóvel.')
    else {
        let i = 0
        for(i; i<telem.length; i++){
            let c = telem.charAt(i)
            if(isNaN(c)){
                break
            }       
        }   
        if(i == telem.length){
            const telemInt = parseInt(telem)
        }       
    }

    const tipo = document.getElementById('tipo').value
    if(tipo=='')
        alert('Tem de indicar um tipo')

        let dadosutilizador = {
            nomeutilizador: nome,
            moradarua: morada_rua,
            moradanumero: morada_num,
            datanascimento: bdate,
            telemovel: telem,
            email:email,
            idtipo:tipo
        }
        //criar um JSON com um objeto
        let jsonDados  = JSON.stringify(dadosutilizador)

        console.log(jsonDados)
        

        const options={
            method:'POST',
            header: {
                'Content-type':'application/json'
            },
            body: jsonDados
        }

        fetch('http://localhost:3000/utilizador',options)
        .then(res=> res.json())
        .then(response => alert(response.text))
        .catch((err)=>{
            alert('aconteceu um erro com o pedido')
        })
}
