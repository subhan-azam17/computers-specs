const os = require("os")


const memory = os.totalmem()
const version = os.version()
const platform = os.platform()
const type = os.type()
const uptime = os.uptime()
const arch = os.arch()
const hostname = os.hostname()
const userinfo =  os.userInfo()

let arr = [userinfo,{"hostname":hostname},{"platform":platform},{"version":version},
{"Uptime":uptime},{"arch":arch},{"type":type},{"memory":memory}];


console.log(arr);
