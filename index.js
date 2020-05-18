//Função Alô Mundo
function helloWorld()
{
    console.log("Hello World!");
}

//Função saudação
const saudacao = () => {
    return data.getHours() <= 12? "Bom dia!": data.getHours() <= 18? "Boa tarde!": "Boa noite!";
    var data = new Date()
}

//Aqui começa a chamar as funções
helloWorld();
console.log(`A saudação do momento é ` + saudacao())
