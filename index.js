#!/usr/bin/env node
'use strict';

var program = require('commander');
 
program
  .version('0.0.1')
  .option('-l, --load', 'Load a graph file')
  .option('-r, --route', 'Calculate distance of a route')
  .option('-t, --test', 'Run the tests')
  .parse(process.argv);

  console.log(program.args);