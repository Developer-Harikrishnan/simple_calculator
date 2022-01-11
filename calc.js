function calc(opt){
    var a = document.getElementById("firstno").value;
    var b = document.getElementById("secondno").value;
    var output
    if (opt == "+" ){
        output =`Sum is ${Number(a)+Number(b)}`;
    }
    else if (opt == "-"){
        output =`Difference is ${Number(a)-Number(b)}`;
    }
    else if (opt == "*"){
        output =`Answer is ${Number(a)*Number(b)}`;
    }
    else{
        output =`Answer is ${Number(a)/Number(b)}`;
    }
    document.getElementById("output").innerText=output
}