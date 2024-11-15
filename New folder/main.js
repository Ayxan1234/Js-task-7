// function useryear(){
//     let num1 = +(prompt("Zehmet olmasa Yasinizi daxil edin"))
//     let num2 = +(prompt("Zehmet olmasa Ilinizi daxil edin"))
//     console.log("netice", num1 - num2);
// }
// useryear()


// function userage(){
//     let age = +(prompt("Zehmet olmasa Yasinizi daxil edin"))
//     return age
//     userage()   
// }
// function useryear(){
//     let year = +(prompt("Zehmet olmasa Ilinizi daxil edin"))
//     return 2024 - age1 ;
//     useryear()
// }
// console.log(userage, useryear ());



function user() {
    let name = "aaa";
    let password = "bbb";
    let username = prompt("Adinizi daxil edin")
    let password1 = prompt("Parolunuzu daxil edin")
    if (name == username && password == password1) {
        alert("adiniz ve sifreniz dogrudur")
    }else{
        user()
    }
}
user()
