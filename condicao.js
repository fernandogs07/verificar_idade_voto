function verificar(){
    var age = document.getElementById("idade").value;
    if(age == ""){
        alert("Campo idade n�o pode ficar vazio")
    }else if(age < 17){
        document.getElementById("resultado").innerHTML = "N�o pode votar"
    }else{
        document.getElementById("resultado").innerHTML = "J� pode votar"
    }
}

function limpar(){
    location = location
}
