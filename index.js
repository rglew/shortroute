#!/usr/bin/env node
'use strict';


var program = require('commander');
var routes = require('./routes.js');

 
program
  .version('0.0.1')
  .option('-r --route', 'Find a route if one exists along a set of nodes')
  .option('-sr, --shortroute', 'Calculate the shortest distance of a route between two points')
  .option('-nr, --nroutes',' Number of routes between an origin and a destination')
  .parse(process.argv);


var cityList = 'ABCDE'.split('');
var result;
const graph = routes.convertGraph(cityList, routes.loadGraph(program.args.toString()));

if (program.shortroute) result = routes.calcShortRoute(cityList, graph, cityList.indexOf(program.args[0]), cityList.indexOf(program.args[1]));
if (program.route) result = routes.recodeRoutes(cityList, routes.calcRoute(cityList, graph, program.args));
if (program.nroutes) result = routes.recodeRoutes(cityList, routes.paths({ graph, from: cityList.indexOf(program.args[0]), to: cityList.indexOf(program.args[1])}));

console.log (result);

