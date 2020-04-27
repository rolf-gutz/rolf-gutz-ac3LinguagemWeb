document.getElementById("resultado").disabled = true
// let valor1 = 0
// let valor2 = 0
// let tela = ''
let operador = ['-', '+', '/', '*']
let operadores = ['-', '+', '/', '*', '.', ""]


let resultado = document.getElementById("resultado");

function setarResultado(valor, toReplace){
    
    if  (toReplace){
        resultado.value = parseFloat(valor)
    }else {
        
        resultado.value += valor +''
    }
}

let lista_de_button = document.getElementsByClassName('numero')
for(let i = 0 ;i < lista_de_button.length; i++){
    lista_de_button[i].addEventListener('click', function  (event) {
        let valor = event.target.innerText
        if(valor == '.' && !PodeAdicionar()){
            return
        }
        setarResultado(valor)
    })
}


let bota_somar = document.getElementsByClassName("operacao somar");
for (var i = 0; i < bota_somar.length; i++) {
    bota_somar[i].onclick = function(event) {
        if (PodeAddOperador()){
             
            setarResultado(event.target.innerText)
        }
    }
}

let bota_subtrair = document.getElementsByClassName("operacao subtrair");
for (var i = 0; i < bota_subtrair.length; i++) {
    bota_subtrair[i].onclick = function(event) {
        if (PodeAddOperador()){
            setarResultado(event.target.innerText)
        }
    }
}

let bota_multiplicar = document.getElementsByClassName("operacao multiplicar");
for (var i = 0; i < bota_multiplicar.length; i++) {
    bota_multiplicar[i].onclick = function(event) {
        if (PodeAddOperador()){
            setarResultado(event.target.innerText)
        }
    }
}


let bota_dividir = document.getElementsByClassName("operacao dividir");
for (var i = 0; i < bota_dividir.length; i++) {
    bota_dividir[i].onclick = function(event) {
        if (PodeAddOperador()){
            setarResultado(event.target.innerText)
        }
    }
}

function PegarUltimoItem(){
    var valor = document.getElementById("resultado").value;//"6.133+213313y12o8ih31oy2i23"
    var index  = valor.length-1;
    return valor[index]
}

function PodeAdicionar(){
    var valor = document.getElementById("resultado").value.toString();
    //"51.1+20-1" teste mesa
    var op = null;
    
    var valor_do_operador = valor.replace(/\d+/g,'') // <-- regex para ignorar numeros
    for(var t =0;t< valor_do_operador.length;t++){
        for(var i=0;i<operador.length;i++){
            if(valor_do_operador[t] == operador[i]){
                op = valor_do_operador[t]; 
                break;
            }
        }

        if (op != null)
            break;
    }       

    var numeros = valor.split(op);
    var result = numeros[numeros.length-1]
    
    for (var i =0;i<result.length;i++){
        if (result[i] == ".")
            return false
    }
    return true
}

function  PodeAddOperador(){
    let lastItem = PegarUltimoItem();
    if (lastItem == undefined || lastItem ==  "")
        return false;

    var valor = document.getElementById("resultado").value;
    valor = valor.replace(/\d+/g,'');
    
    for (let i = 0; i < valor.length; i++) {
        for(let t = 0; t< operador.length;t++) {
            if (operador[t] == valor[i] )
                return false
        }
    }

    return true;
}


let bota_resolver = document.getElementsByClassName("resultar");
for (var i = 0; i < bota_resolver.length; i++) {
    bota_resolver[i].onclick = function() {
        Resolver()
    }
}

function Resolver(){
    try{
        var soma1 = eval(document.getElementById("resultado").value);
        setarResultado(soma1, true)    
    } catch {
        document.getElementById("resultado").value = "Erro de operação"
    }
    
}


