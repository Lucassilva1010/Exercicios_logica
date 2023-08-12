const prompt = require('prompt-sync')();main()

function main() {
    let baseMaior;
    let baseMenor;
    let altura;
    let area;
    let lateral;
    let base;
    let raio;
    
    //Cálculo da Área do Trapézio
    console.log("== Cálculo da Área do Trapézio ==");
    
    baseMaior = getFloatNumber("Digite o valor da base maior: ");
    baseMenor = getFloatNumber("Digite o valor da base menor: ");
    altura = getFloatNumber("Digite o valor da altura: ");
   
    //////////uso de funcao que nao retorna valor
    calcularAreaTrapezio(baseMaior, baseMenor, altura); 
    console.log();
    //Cálculo da Área do Quadrado
    console.log("== Cálculo da Área do Quadrado ==");
    
    lateral = getFloatNumber("Digite o valor de um dos lados: ")
    
    /////////uso de funcao que retorna valor
    console.log("Área do Quadrado: " + calcularAreaQuadrado(lateral));
    console.log();
    //Cálculo da Área do Retângulo
    console.log("== Cálculo da Área do Retângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    Area(base,altura); //função
    console.log("Área do Retângulo: " + Area2(base,altura));
    console.log();

   
    //Cálculo da Área do Círculo
    console.log("== Cálculo da Área do Círculo ==");
    raio = getFloatNumber("Digite o valor do raio: ");
    Circulo(raio);
    
    console.log("Área do Círculo Com retorno: " + Circulo2(raio) );
   
    console.log();
    //Cálculo da Área do Triângulo
    console.log("== Cálculo da Área do Triângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    Triangulo(base, altura);
    console.log("Área do Triângulo Com Retorno: " + Triangulo2(base, altura));

   
}


//Funções

function getFloatNumber(message) {
    return Number(prompt(message));
}

function calcularAreaQuadrado(lateral){
    let area = (lateral * lateral);
    return area.toFixed(2);
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura){
    let area = ((baseMaior + baseMenor) * altura) / 2

    console.log("Área do Trapézio Com retorno: " + area.toFixed(2));
}

//Funções do Circulo
 
function Circulo(raio){
    console.log("Área do Círculo Sem retorno: " + (3.14 * raio * raio).toFixed(2))
}

function Circulo2(raio){
    let resultado = (3.14 * raio * raio);
    return resultado.toFixed(2);
}

//Calculo da Area
function Area(base, altura){
    console.log("Área do Retângulo Sem retorno: " + (base * altura).toFixed(2));
}

function Area2(base, altura){
    let result =  (base * altura);
    return result.toFixed(2);
}

//Calculo do Triangulo

function Triangulo(base,altura){
    console.log("Área do Triângulo Sem Retorno: " + (base * altura).toFixed(2));
}
function Triangulo2(base,altura){
    let result = (base * altura);
    return result.toFixed(2);
}