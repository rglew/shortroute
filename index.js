#!/usr/bin/env node
'use strict';

var program = require('commander');
var fs = require('fs');

var array = fs.readFileSync('input/graph.txt').toString().split(',');
var i = 0;
for(i in array) {
    console.log(array[i].trim());
}
 
program
  .version('0.0.1')
  .option('-l, --load', 'Load a graph file')
  .option('-r, --route', 'Calculate distance of a route')
  .option('-t, --test', 'Run the tests')
  .parse(process.argv);

  console.log(program.args);