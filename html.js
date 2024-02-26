//1

let month = 9;
let season

switch(month) {
    case 12:
    case 1:
    case 2:
        season = "зима"
        break;
    
    case 3:
    case 4:
    case 5:
        season = "весна"
        break;

    case 6:    
    case 7:    
    case 8:
        season = "лето"
        break;
        
    case 9:    
    case 10:    
    case 11:
        season = "осень"
        break;
    default:
        season = "неверное число месяца"
}

console.log(`номер числа принадлежит сезону = ${season}`);

//2

let number = 823453546654634;

let result = (number % 2 === 0) ? "чётное" : "не чётное";
console.log(`число  ${number}  ${result}`);

//4

let num2 = 10;
let num3 = 3;
let num4 = 6;

let max = num2;
if(num3 > max) {
    max = num3
}

if(num4 > max) {
    max = num4
}

console.log(max);



let degree = 7;

switch (degree) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        degree = "куртку с шапкой"
    break;

    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        degree = "ветровку"
    break;
    
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
        degree = "футболку"
    break;
    default: 
        degree = "неверное число градусов"    
}

console.log(`надеть  ${degree}`);