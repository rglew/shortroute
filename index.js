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

// then need some helper functions to work out:


};

function createMatrix(m, n, init) {
    var result = [];
    for(var i = 0; i < n; i++) {
        result.push(new Array(m).fill(init));
    }
    return result;
}

function CalcRoute(graph, route) {

// pre-requisites

// need a list of the unique de-duped set of vertices (so can create the right size 2d array initialised as infinity or a very large number)
// need a list of the supplied directed graph weights (used to update the 2d array for steps 4&5 below)
// then implement the below


var vertexSet = ['A','B','C','D','E'];
//var vertexSetLength = vertexSet.length();
var weightedEdges = [[0,1,5], [1,2,4] , [2,3,8], [3,2,8], [3,4,6], [0,3,5], [2,4,2] , [4,1,3], [0,4,7] ];

//pseudocode for Floyd Warshall goes here


//1 let dist be a |V| × |V| array of minimum distances initialized to ∞ (infinity)
var vertexSetLength = 5;
var INFINITY = 1/0;
var matrix = createMatrix(vertexSetLength,vertexSetLength,INFINITY);

//2 for each vertex v
//3    dist[v][v] ← 0

for (var i = 0 ; i < vertexSetLength ; i++) {

	for (var j = 0 ; j < vertexSetLength ; j++){
		if (i === j) matrix[i][j] = 0;
		 }

}

//4 for each edge (u,v)
//5    dist[u][v] ← w(u,v)  // the weight of the edge (u,v)

for (var i = 0 ; i < weightedEdges.length ; i++) {
	matrix[weightedEdges[i][0]][[weightedEdges[i][1]]] = weightedEdges[i][2];
}

//6 for k from 1 to |V|
//7    for i from 1 to |V|
//8       for j from 1 to |V|
//9          if dist[i][j] > dist[i][k] + dist[k][j] 
//10             dist[i][j] ← dist[i][k] + dist[k][j]
//11         end if


for (var k=0;k<vertexSetLength;k++){
	for (var i=0 ; i< vertexSetLength;i++){
		for (var j =0; j< vertexSetLength;j++){
			if (matrix[i][j] > matrix[i][k] + matrix[k][j]) matrix[i][j] = matrix[i][k] + matrix[k][j];
		}
	}
}

// the result will be a 2d array (matrix) of minimum distances so the return value just needs to look up the route
console.log(matrix);
return(matrix);
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

