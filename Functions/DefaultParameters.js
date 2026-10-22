// Default parameters provide a value when an argument is not supllied

function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet("Tamanappa");
greet();
greet("Inde");
