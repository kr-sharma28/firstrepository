console.log("My first repo");
console.log("My second repo");
console.log("My version 1.1.1.1.0")

let str = "rececar"
function checkpalindrome(str) {
    let bag = "";
    for (let i=str.length-1;i>=0;i--){
bag = bag + str[i];
    }
    if(bag==str){
        return true;
    }else{
        return false;
    }
}