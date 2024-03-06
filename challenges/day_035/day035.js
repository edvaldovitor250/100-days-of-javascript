function callback(call) {
    console.log("callback " + call )
}

callback("1s")
callback("2s")
callback("3s")
callback("4s")

setTimeout(() => {
    callback("5s\nultimo  segundos");
}, 1000);