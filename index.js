#!/usr/bin/env node
'use strict';

var program = require('commander');
var fs = require('fs');


function LoadGraph(graph){

var array = fs.readFileSync(graph).toString().split(',');
var i = 0;
for(i in array) {
    console.log(array[i].trim());
}

// Assuming file can be read OK, then it needs to be additionally validated.  return true if ok, otherwise error out

};

 
program
  .version('0.0.1')
  .option('-l, --load', 'Load a graph file')
  .option('-r, --route', 'Calculate distance of a route')
  .option('-t, --test', 'Run the tests')
  .parse(process.argv);


//check for test, help first.  if either are true - do it and exit
// use default graph if no graph specified, otherwise load and validate supplied graph text file

if (program.load) LoadGraph(program.args.toString());

