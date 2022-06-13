const os = require('os')


// Info of current user
const user = os.userInfo();

console.log(user)

// The system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const current_os = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(current_os)