function verificar(){
    var age = document.getElementById("idade").value;
    if(age == ""){
        alert("Campo idade não pode ficar vazio")
    }else if(age < 17){
        document.getElementById("resultado").innerHTML = "Não pode votar"
    }else{
        document.getElementById("resultado").innerHTML = "Já pode votar"
    }
}

function limpar(){
    location = location
}
