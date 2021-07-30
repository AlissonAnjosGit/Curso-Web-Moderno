const escola = "Cod3r"

console.log(escola.charAt(4)) //comeca do 0
console.log(escola.charAt(5)) //n tem mas n da erro

console.log(escola.charCodeAt(3)) //valor na tabelas ascii
console.log(escola.indexOf('o'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log("Escola ".concat(escola).concat(" !"))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) //com regex

console.log("ana, maria, pedro".split(',')) //gera um array atraves da string