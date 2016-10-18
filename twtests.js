var routes = require('./routes.js');


var cityList = 'ABCDE'.split('');
var graph = routes.convertGraph(cityList, routes.loadGraph('./input/graph.txt'));
var result;

module.exports.runTests = function() {
	console.log('\x1b[36m','\n\nThoughtworks Trains assignment test input and output\n\n');
	console.log('\nThe distance of the route A-B-C.','\x1b[0m');
	console.log(routes.recodeRoutes(cityList, routes.calcRoute(cityList, graph, ['A','B','C'])));
	console.log('\x1b[36m','\nThe distance of the route A-D.','\x1b[0m');
	console.log(routes.recodeRoutes(cityList, routes.calcRoute(cityList, graph, ['A','D'])));
	console.log('\x1b[36m','\nThe distance of the route A-D-C.','\x1b[0m');
	console.log(routes.recodeRoutes(cityList, routes.calcRoute(cityList, graph, ['A','D','C'])));
	console.log('\x1b[36m','\nThe distance of the route A-E-B-C-D.','\x1b[0m');
	console.log(routes.recodeRoutes(cityList, routes.calcRoute(cityList, graph, ['A','E','B','C','D'])));
	console.log('\x1b[36m','\nThe distance of the route A-E-D.','\x1b[0m');
	console.log(routes.recodeRoutes(cityList, routes.calcRoute(cityList, graph, ['A','E','D'])));
	console.log('\x1b[36m','\nThe number of trips starting at C and ending at C with a maximum of 3 stops.  In the sample data below, there are two such trips: C-D-C (2 stops). and C-E-B-C (3 stops).','\x1b[0m');
	result = routes.recodeRoutes(cityList, routes.paths({ graph, from: 2, to: 2}));
    console.log(result.filter(function (elem){
	    return elem.length <= 4;
	  }));
	console.log('\x1b[36m','\nThe number of trips starting at A and ending at C with exactly 4 stops.  In the sample data below, there are three such trips: A to C (via B,C,D); A to C (via D,C,D); and A to C (via D,E,B).','\x1b[0m');
	result = routes.recodeRoutes(cityList, routes.paths({ graph, from: 0, to: 2}));
    console.log(result.filter(function (elem){
	    return elem.length === 5;
	  }));
	console.log('\x1b[36m','\nThe length of the shortest route (in terms of distance to travel) from A to C.','\x1b[0m');
    console.log(routes.calcShortRoute(cityList, graph, 0, 2));	
	console.log('\x1b[36m','\nThe length of the shortest route (in terms of distance to travel) from B to B.','\x1b[0m');
    console.log(routes.calcShortRoute(cityList, graph, 1, 1));	
	console.log('\x1b[36m','\nThe number of different routes from C to C with a distance of less than 30.  In the sample data, the trips are: CDC, CEBC, CEBCDC, CDCEBC, CDEBC, CEBCEBC, CEBCEBCEBC.','\x1b[0m');
    console.log('Sadly not implemented :(');
}





