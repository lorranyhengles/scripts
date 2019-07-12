function somar(a, b) {
    return Number(a + b)
}
// console.log(somar(5,8))

function fazerEscada(material, degraus) {
    let escada = material;
    for (let i = 0; i < degraus; i++) {
        console.log(escada);
        escada += material;
    }
}
function parOuImpar(a) {
    if (a % 2 == 0) {
        return 'é par';
    }
    else {
        return 'é impar';
    }

}
const aleatorio = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Exercicio

// function idade (idade,b){
//     if (idade>=22 && idade<=55){
//         return alert("emprestimo aprovado");
//         if
//     }
//             else{
//         return alert("emprestimo negado");

//     }
// 
// let idade
// let salario
// let emprestimo
// let parcela
// let taxa=0.08
// function calcularEmprestimo(idade, emprestimo, salario,parcela) {
//     if (idade >= 22 || idade <= 55) {

//         if (emprestimo >= 1000) {

//             if (salario * 15 > emprestimo) {


//                 return alert("emprestimo aprovado");
//             }
//         }
//     }
//     else {
//         return alert("emprestimo negado");

//     }
//     if (parcela >= 3 && parcela <= 20) {

//         if ( let=valorTotal = emprestimo(1 + taxa) ** parcela) {
//             return valorTotal;
//         }
//     }
//     else {
//         return "nao foi possivel parcelar";
//     }
// }

let filmes=[
    {titulo:'Harry Potter',classificacao:12},
    {titulo:'Os Vigadores',classificacao:14},
    {titulo:'Rei Leão', classificacao:10},
    {titulo:'Ninja Assasino', classificacao:18}
]
function autorizado(idade){
    for (let item in filmes){
        if(filmes[item].classificacao <= idade)
    }
}