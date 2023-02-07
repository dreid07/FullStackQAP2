const fs = require("fs");

// define/extend an EventEmitter class
const EventEmitter = require("events");
class OneEmitter extends EventEmitter {}
// initialize a new emitter object
const oneEmitter = new OneEmitter();

oneEmitter.addListener("newvisitor", (level, msg) => {
  console.log(" * " + level.toUpperCase() + " * " + msg);
});

function indexP(path, res) {
  oneEmitter.emit(
    "newvisitor",
    "Dogs",
    "indexP, Welcome to the world of dogs!"
  );
  fetchFile(path, res);
}

function aboutP(path, res) {
  oneEmitter.emit("newvisitor", "Dogs", "aboutP, info about dogs!");
  fetchFile(path, res);
}

function aussiedoodlesP(path, res) {
  oneEmitter.emit(
    "newvisitor",
    "Dogs",
    "aussiedoodlesP, Welcome to the world of aussiedoodles!"
  );
  fetchFile(path, res);
}

function dalmatiansP(path, res) {
  oneEmitter.emit(
    "newvisitor",
    "Dogs",
    "dalmatiansP, Welcome to the world of dalmatians!"
  );
  fetchFile(path, res);
}

function poodlesP(path, res) {
  oneEmitter.emit(
    "newvisitor",
    "Dogs",
    "poodlesP, Welcome to the world of poodles!"
  );
  fetchFile(path, res);
}

function pugsP(path, res) {
  oneEmitter.emit("newvisitor", "Dogs", "pugsP, Welcome to the world of pugs!");
  fetchFile(path, res);
}

function fourOFourP(path, res) {
  oneEmitter.emit("newvisitor", "Dogs", "fourOFourP, Lost!");
  fetchFile(path, res);
}

function fetchFile(path, res) {
  // File is read from path that is provided
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // console.log('file was served.')
      res.writeHead(res.statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
}

module.exports = {
  indexP,
  aboutP,
  aussiedoodlesP,
  dalmatiansP,
  poodlesP,
  pugsP,
  fourOFourP,
};
