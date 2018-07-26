<h1 align="center"> Announcer tooth </h1> <br>
<p align="center">
  <img alt="gif xiaomi band and slide" title="mi band 2 script pc" src="https://raw.githubusercontent.com/NoRoboto/CodeExamples/master/src/banner-announcer.gif" width="450">
</p>

<p align="center">
 A tool for detecting bluetooth devices and run some task script, inspired by the young justice television series (Teleport).
`:fireworks:` `:fireworks:`
</p>

## Table of Contents

- [Requirements](#requirements)
- [Use](#use)
- [License](#license)

## Requirements

#### <i class="icon-list"></i> We need

> - [Nodejs](https://nodejs.org/en/) = 8.x.x (it does not work in node 10)
> - [NVM](https://github.com/creationix/nvm) (To avoid headaches)
> - [NPM](https://www.npmjs.com/) >= 5.x.x. 
> - Bluetooth.
> - (Optional) [Yarn](https://yarnpkg.com/en/)

## Use

Chek your bluetooth status.

    sudo service bluetooth status

to start buetooth service:

    sudo service bluetooth start

Discover devices:

    npm run-script discover

Add your uuid into recognized.json file (you can see the uuid in terminal). Then, some action, like:

    {"id": "insert_device_uuid", "name": "Elastigirl", "command":"spd-say \"Welcome Elastigirl\""}

Finally, run:

    npm start

Then, when you are closing the bluetooth range, it will run some script just once, if you go go  

## License
The MIT License (MIT) 2018.


