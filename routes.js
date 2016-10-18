var fs = require('fs');


module.exports.convertGraph = function(vertexSet, inputArray) {
  return inputArray
    .map(function(val) {
      var parts = val.split('');
      var num = val.slice(2, val.length);
      return [
        vertexSet.indexOf(parts[0]),
        vertexSet.indexOf(parts[1]),
        parseInt(num, 10)
      ];
    });
};


// if source and target are C, then filter to max 3
// if source is A and target is C then filter to = 4

module.exports.paths = function({ graph = [], from, to }, path = []) {
    const linkedNodes = memoize(nodes.bind(null, graph));
    return explore(from, to);

    function explore(currNode, to, paths = []) {
        path.push(currNode);
        for (let linkedNode of linkedNodes(currNode)) {
            if (linkedNode === to) {
                let result = path.slice(); // copy values
                result.push(to);
                paths.push(result);
                continue;
            }
            // do not re-explore edges
            if (!hasEdgeBeenFollowedInPath({
                    edge: {
                        from: currNode,
                        to: linkedNode
                    },
                    path
                })) {                    
                explore(linkedNode, to, paths);
            }
        }
        path.pop(); // sub-graph fully explored            
        return paths;
    }
}

/** 
 * Get all nodes linked 
 * to from `node`.
 */
function nodes(graph, node) {
    return graph.reduce((p, c) => {
        (c[0] === node) && p.push(c[1]);
        return p;
    }, []);
}

/**
 * Has an edge been followed 
 * in the given path?
 */
function hasEdgeBeenFollowedInPath({ edge, path }) {
    var indices = allIndices(path, edge.from);
    return indices.some(i => path[i + 1] === edge.to);
}

/**
 * Utility to get all indices of 
 * values matching `val` in `arr`.
 */
function allIndices(arr, val) {
    var indices = [],
        i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            indices.push(i);
        }
    }
    return indices;
}

/**
 * Avoids recalculating linked 
 * nodes.
 */
function memoize(fn) {
    const cache = new Map();
    return function() {
        var key = JSON.stringify(arguments);
        var cached = cache.get(key);
        if (cached) {
            return cached;
        }
        cached = fn.apply(this, arguments)
        cache.set(key, cached);
        return cached;;
    };
}

module.exports.recodeRoutes = function(_cityList, _routes ){

var i = 0;
var j = 0;

for (i=0 ; i<_routes.length;i++ ){
  for (j=0;j<_routes[i].length;j++){
    _routes[i][j] = _cityList[_routes[i][j]];
  }
}

return _routes;
}

module.exports.loadGraph = function(f){

  var _array = fs.readFileSync(f).toString().split(',');
  return _array.map(Function.prototype.call, String.prototype.trim);

};


module.exports.calcShortRoute= function(vertexSet, _weightedEdges, origin, destination) {


var vertexSetLength = vertexSet.length;

// Implementation of Floyd-Warshall algorithm
// https://en.wikipedia.org/wiki/Floyd-Warshall_algorithm
const INFINITY = 1/0;
var matrix = createMatrix(vertexSetLength,vertexSetLength,INFINITY);


// According to this algo, the shortest distance between two paths is 0, but the test data excludes this..
//for (var i = 0 ; i < vertexSetLength ; i++) {
//
//  for (var j = 0 ; j < vertexSetLength ; j++){
//    if (i === j) matrix[i][j] = 0;
//     }
//}

for (var i = 0 ; i < _weightedEdges.length ; i++) {
  matrix[_weightedEdges[i][0]][[_weightedEdges[i][1]]] = _weightedEdges[i][2];
}


for (var k=0;k<vertexSetLength;k++){
  for (var i=0 ; i< vertexSetLength;i++){
    for (var j =0; j< vertexSetLength;j++){
      if (matrix[i][j] > matrix[i][k] + matrix[k][j]) matrix[i][j] = matrix[i][k] + matrix[k][j];
    }
  }
}

var shortest_distance = matrix[origin][destination];
return(shortest_distance);
};


module.exports.calcRoute = function(cityList, _gph, args){
  
//var fooInput = [0,1,4];
//var fooGraph = [[0,1,5],[1,4,3],[0,2,6]];  // answer should be 8
var i = 0;
var k = 0;
var acc = 0;
var match = false;
var _input = [].concat.apply([],args.map(function(val) {
  var elements = (val.split(''));
  return elements.map(function(elem) {
      return cityList.indexOf(elem);
});
  }));


for (i=0; (i < _input.length -1); i++) {
  match = false;
  for (k=0; k <_gph.length; k++) {
    if ((_input[i] === _gph[k][0]) && (_input[i + 1] === _gph[k][1])) {
      acc = (acc + _gph[k][2]);
      match = true;
    }
    if (_input[i] === _input[i+1]) match = true; //edge case A B B C
      
  }

if (match === false) {
  return 'No such route.';
  }

}
return acc;
};

function createMatrix(m, n, init) {
    var result = [];
    for(var i = 0; i < n; i++) {
        result.push(new Array(m).fill(init));
    }
    return result;
}
