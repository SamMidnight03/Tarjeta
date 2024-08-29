//Nomre completo

const CardName = document.getElementById("name");
//input
const nombre = document.getElementById("NombreCompleto");
const firma = document.getElementById("firma");

nombre.addEventListener("input", submitName);

function submitName(e){
    console.log(e.target.value);
    CardName.textContent = e.target.value
    firma.textContent = e.target.value
}


//Numero completo

const NumeroTarjeta = document.getElementById("NumeroTarjeta");
//input
const numero = document.getElementById("numeroTrt");

numero.addEventListener("keyup", submitNumber);

function submitNumber(){ 
    
        let numberText = parseInt(
            numero.value.replace(/ /g, "")
        )
    
        if(isNaN(numberText)){
            numberText = ""
        }
        
        if(numero.value == ""){
            NumeroTarjeta.textContent = "#### #### #### ####"
            return;
        }
        
        const result = String(numberText).replace(/([0-9]{4})/g, '$1 ')
        
        numero.value = result
        NumeroTarjeta.textContent = result
        
        if(numero.value == 0){
            alert("Las tarjetas no pueden comenzar con este digito");
            numero.value=""
            NumeroTarjeta.textContent = "#### #### #### ####"
        }
}

//Fecha de expedicion

const ExpiracionDate = document.getElementById("numeroExpiracion");
//input
const expiracion = document.getElementById("Expiracion");

expiracion.addEventListener("input", submitExped);

function submitExped(e){
    ExpiracionDate.textContent = e.target.value

    if(expiracion.value == ""){
        ExpiracionDate.textContent = "MM/AA"
        return;
    }
}

// Fecha ccv

const CCVcontent = document.getElementById("ccv");
//input
const CCV = document.getElementById("CCV");

CCV.addEventListener("input", submitCCV);

function submitCCV(e){
    const CCVstrin = CCV.value;
    const CCVnum = parseInt(CCVstrin)

    
    if(CCV.value == " " || CCV.value == "-"){
        alert("Las tarjetas no pueden comenzar con este digito");
        CCV.value=""
       
    }
    
    if(isNaN(CCV.value)){
        alert("Las tarjetas no pueden comenzar con este digito");
        CCV.value = ""
    }
    

    CCVcontent.textContent = isNaN(CCVnum) ? "" :  CCVnum
}

//Rotacion de la tarjeta

const carta = document.getElementById("card");

carta.addEventListener("click", girar)

function girar(){
    if(carta.classList.contains("flip")){
        carta.classList.remove("flip")
    }else{
        carta.classList.add("flip")
    }
}

// Esconde el formulario


function toggleForm(){
    document.getElementById('form').classList.toggle("hidden")
}

//Boton de Submit

const Btn =document.getElementById("Btn");

Btn.addEventListener("click", ()=>{

    if(nombre.value == "" || numero.value == "" || numero.value.length < 12 || expiracion.value == "" || CCV.value == "" || CCV.value < 3){
            alert("Los campos deben estar completos")
    }else{
        alert(`Nombre completo: ${nombre.value}\nNumero de tarjeta: ${numero.value}\nFecha de expiracion: ${expiracion.value}\nCCV: ${CCV.value}`)
    }

})