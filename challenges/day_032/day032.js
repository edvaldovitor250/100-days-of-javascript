function callBack(call,delay) {
    setTimeout(call,delay);
}

function call() {
    console.log("A função de callback foi executada após o intervalo de tempo.");

}

callBack(call,1000);