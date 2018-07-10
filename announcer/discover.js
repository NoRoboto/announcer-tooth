const noble = require('noble');

noble.on('stateChange', (state) => {
  let process = null
  console.log("Starting, please wait... \n");
  if (state === 'poweredOn') {
    process = setInterval(() => { noble.startScanning(); }, 10000);
  } else {
    clearInterval(process);
    noble.stopScanning();
  }
});

noble.on('discover', (peripheral) => {
  console.log('Found device with local name: ' + peripheral.advertisement.localName);
  console.log('RSSI (signal strength)' + peripheral.rssi);
  console.log('Device uuid\'s: ' + peripheral.uuid);
  console.log();
});