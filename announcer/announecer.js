const noble = require('noble');
const exec = require("child_process").exec
const utils = require("./utils")

const file = utils.readFile("recognized.json")
let inHouseUsers = []
const timeout = 15000

const registerUser = (user) => {
  const inHome = inHouseUsers.find(u => u.id === user.id);
  if (!inHome) {
    inHouseUsers.push({id: user.id, aliveDate: new Date()})
    makeAnnounce(user.command, user.soundFile);
    // console.log(`User ${user.id} added!`)
  } else {
    const userIndex = inHouseUsers.findIndex(u => u.id === user.id)
    inHouseUsers[userIndex].aliveDate = new Date();
    // console.log(`User ${user.id} updated!`)
  }
}

const removeIdleUsers = () => {
  const date = new Date()
  inHouseUsers = inHouseUsers.filter(user => (date - user.aliveDate) < timeout)
  // console.log("Removeidle", inHouseUsers)
}

const makeAnnounce = (command, soundFile) => {
  const puts = (error, stdout, stderr) => { console.log(stdout); }
  if (command) exec(command, puts);

  if (soundFile) console.log("beeep");

}

noble.on('stateChange', (state) => {
  let process = null
  if (state === 'poweredOn') {
    process = setInterval(() => { noble.startScanning(); }, 5000);
  } else {
    clearInterval(process);
    noble.stopScanning();
  }
});

noble.on('discover', (peripheral) => {
  // console.log('Found device with local name: ' + peripheral.advertisement.localName);
  // console.log('advertising the following service uuid\'s: ' + peripheral.advertisement.serviceUuids);
  // console.log();
  removeIdleUsers();
  const user = file.users.find(user => user.id === peripheral.id);
  if (user) {
    registerUser(user);
  }
});
