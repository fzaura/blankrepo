var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globaalConst = "I'm a globl constant";


{
// Block scope


var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";

}

console.log(globalVar);
console.log(globalLet);
console.log(globaalConst);

//console.log(blockVar);
//conso;e.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    var functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();


//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

{
    let Lvar = "I am Lvar";
    const Cvar = "i am Cvar";
    var Vvar = "I am Vvar";

    Lvar = "L";
    Vvar = "V";
}

Lvar = "L";
Cvar = "C";
Vvar = "V";