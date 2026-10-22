function processUser(name, callback) {
    console.log("User: " + name);
    callback();
}
function completed() {
    console.log("Process Completed");
}
processUser("Tamanappa", completed);
