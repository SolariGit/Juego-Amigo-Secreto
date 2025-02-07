let nombreAmigoSecreto =[]; 
let amigos = []; 
let sortear=0;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector (elemento);
   elementoHTML.innerHTML = texto;
   return;
}

function AgregarAmigoList(){
 let intentoUsuario = document.getElementById('verificaIntento').value;

 
    if (intentoUsuario===''){
        alert ('Favor ingresar un nombre valido');
    
    }else{
        nombreAmigoSecreto.push(intentoUsuario);
        console.log(nombreAmigoSecreto);
        listaAmigos();
        //document.getElementById ('reiniciar');
        limpiarCaja();
        }
 return;
}

function sortearAmigo (){
const nombre=Math.floor(Math.random()*nombreAmigoSecreto.length);
console.log(nombre, nombreAmigoSecreto[nombre]);
//alert ('Favor ingresar un nombre valido'+nombre);
if (sortear <1 && nombreAmigoSecreto.length>0) {
document.querySelector("#resultado").innerHTML += "<li>"+"El Amigo Secreto es:"+nombreAmigoSecreto[nombre]+"</li>";
limpiarLista();
sortear++;
}else{
alert ('Favor ingresar una nueva lista de amigos para jugar de Nuevo');
    document.querySelector("#resultado").innerHTML= '';
    limpiarLista();
    nombreAmigoSecreto.splice(0, nombreAmigoSecreto.length);
    sortear=0;
}
    

//document.querySelector("#resultado").innerHTML= '';

}
function limpiarLista(){
    document.querySelector("#listaAmigos").innerHTML= '';


}

function listaAmigos(){
    let verLista = document.getElementById('listaAmigos');
verLista.innerHTML = '';
            
for (let i  = 0; i < nombreAmigoSecreto.length; i ++){
verLista.innerHTML += "<li>"+ nombreAmigoSecreto[i] + "</li>";

//document.querySelector("#listaAmigos").innerHTML += "<li>"+intentoUsuario+"</li>";
  //  document.querySelector("#resultado").innerHTML += "<li>"+"El Amigo Secreto es:"+nombreAmigoSecreto[nombre]+"</li>";
}
}
function limpiarCaja(){
    document.querySelector('#verificaIntento').value = '';

   
}
  /*

function agregarAmigo(){
    let nuevoNombre = document.getElementById('amigo').value;
    if (nuevoNombre.trim()!==''){
        amigos.push(nuevoNombre);
        console.log(amigos);
        limpiarCaja();
    }else{
        alert ('Campo Vacio, ingrese un nombre');
    }
}
function limpiarCaja (){
let valorCaja = document.querySelector('#amigo').value='';
valorCaja.value = '';
}
function listaAmigos(){
let verLista = document.getElementById('listaAmigos');
verLista.innerHTML = '';
            
/*for (let i  = 0; i < amigos.length; i ++){
verList.innerHTML = '<li>'= + amigos[i] + '</li>' + verLista.innetHTML;
}  
}
}*/
asignarTextoElemento ('h1', 'Juego Amigo Secreto'); 
asignarTextoElemento ('h2', 'Digite el nombre de sus amigos:');
