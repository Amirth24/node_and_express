// Experimenting with modules.

// module.exports.john = "John" // exports a obj called john. 


// module.exports.hello_world = require("./mod2").hello_world // exporting hello world function via mod 1

module.exports = {john: "John",hello_world: require("./mod2").hello_world}



