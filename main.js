function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var equals;


    if (op == "add") {
        equals = a+b;
    } else if (op == "sub") {
        equals = a-b;
    } else if (op == "mul") {
        equals = a*b;
    } else if (op == "div") {
        equals = a/b;
    } else if (op == "per") {
        equals = (a/100);
    } else if (op == "perof") {
        equals = a/100*b;
    }

    document.querySelector("#result").innerHTML = equals;
}