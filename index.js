#!/usr/bin/env node
'use strict';


var program = require('commander');  // convenience module for command line usage...  no other packages used other than test ones.
var routes = require('./routes.js');
var twtest = require('./twtests.js');

const GRAPHFILE = './input/graph.txt';

 
program
  .version('0.0.1')
  .option('-r, --route', 'Find a route if one exists along a set of nodes, eg: sr route A B C')
  .option('-sr, --shortroute', 'Calculate the shortest distance of a route between two points, eg: sr shortroute A D')
  .option('-nr, --nroutes',' Number of routes between an origin and a destination, eg: sr nroutes B B')
  .option('-tw, --thoughtworks', 'Run the thoughtworks test input')
  .parse(process.argv);


var cityList = 'ABCDE'.split('');
var result;
var graph = routes.convertGraph(cityList, routes.loadGraph(GRAPHFILE));

if (program.shortroute) result = routes.calcShortRoute(cityList, graph, cityList.indexOf(program.args[0]), cityList.indexOf(program.args[1]));
if (program.route) result = routes.recodeRoutes(cityList, routes.calcRoute(cityList, graph, program.args));
if (program.nroutes) result = routes.recodeRoutes(cityList, routes.paths({ graph, from: cityList.indexOf(program.args[0]), to: cityList.indexOf(program.args[1])}));
if (program.thoughtworks) result = twtest.runTests();
if (process.argv.length === 2) program.help();

if (result !== undefined) console.log (result);

