
//
alert("JavaScript Task-27 konsola daxil olun ")

//



//1

function salamVer(ad) {
    console.log("Salam, " + ad + "!")
}

salamVer("Babek");

function isActive(username) {
    console.log(username + " is active now.");
}
isActive("Babek");


//2

function enBoyukTap(a, b, c) {
    return Math.max(a, b, c);
}

var enBoyukEded = enBoyukTap(20, 10, 5);
console.log("En boyuk eded " + enBoyukEded);


//3

function cemiMiqdar(rublHesab, dollarHesab, mezenne) {
    let cemiRubl = rublHesab + dollarHesab * mezenne;
    return `Butun depozitler uzre mebleg: ${cemiRubl} rubl.`;
}

// Example
let rublHesab = 1200;
let dollarHesab = 20;
let mezenne = 75;

console.log(cemiMiqdar(rublHesab, dollarHesab, mezenne));









//4











//5

function min(a, b) {
    return (a < b) ? a : b;
}

var minimumEded = min(10, 20);
console.log("En kicik eded:" + minimumEded);


//6

function calc(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Düzgün riyazi əməliyyat seçilməyib.";
    }
}

// Funksiyani çagırmaq uchun
var netice = calc(10, 6, '-');
console.log("Nəticə: " + netice);



//7

//8

//9

function isEven(number) {
    if (typeof number !== 'number') {
      return 'Eded teleb olunur.';
    }
  
    return number % 2 === 0;
  }
  
  //funksiyani sınamaq üçün nümunə
  const exampleNumber = 42;
  const result = isEven(exampleNumber);

  //konsolda nəticə: true görünər.
  console.log(result);

//10

function isValidNumber(phoneNumber) {
    // 11 reqemden ibare olmali ve +7 ile bashlamalidir
    return /^\+7\d{10}$/.test(phoneNumber);
}

// Numune telefon nömresi:
var phoneNumber = "+71234567890";

// Konsolda nəticə: true görünər.
console.log(isValidNumber(phoneNumber));

//11



















