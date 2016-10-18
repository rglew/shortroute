var expect = require('expect');
var routes = require('../routes.js');
var vertexSet = 'ABCDE'.split('');
var graph = [ [ 0, 1, 5 ],[ 1, 2, 4 ],[ 2, 3, 8 ],[ 3, 2, 8 ],[ 3, 4, 6 ],[ 0, 3, 5 ],[ 2, 4, 2 ],[ 4, 1, 3 ],[ 0, 4, 7 ] ];



describe('routes', () => {
  describe('.convertGraph', () => {
    it('generates points', () => {
      var vertexSet = 'ABCDE'.split('');
      var inputArray = ['AB6', 'CD15', 'DE1'];
      var expected = [[0, 1, 6], [2, 3, 15], [3, 4, 1]];
      var result = routes.convertGraph(vertexSet, inputArray);
      expect(result).toEqual(expected);
    });
  });

  describe('.paths', () => {
    it('calculates the paths between two nodes', () => {
      var expected = [ [ 1, 2, 3, 2, 4, 1 ],[ 1, 2, 3, 4, 1 ],[ 1, 2, 4, 1 ] ];
      var result = routes.paths({ graph, from: 1, to: 1});
      expect(result).toEqual(expected);
    });
  });

describe('.recodeRoutes', () => {
    it('Converts index based points back to their names', () => {
      var inputArray = [[0, 1, 3], [2, 3, 1], [3, 4, 0, 2]];
      var expected = [ [ 'A', 'B', 'D' ], [ 'C', 'D', 'B' ], [ 'D', 'E', 'A', 'C' ] ];
      var result = routes.recodeRoutes(vertexSet, inputArray);
      expect(result).toEqual(expected);
    });
  });

describe('.loadGraph', () => {
    it('Loads edges for a directed graph from a file', () => {
      var f = './input/graph.txt';
      var expected = [ 'AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7' ];
      var result = routes.loadGraph(f);
      expect(result).toEqual(expected);
    });
  });

describe('.calcShortRoute', () => {
    it('Calculate the shortest route between two nodes', () => {
      var f = './input/graph.txt';
      var expected = [ 'AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7' ];
      var result = routes.loadGraph(f);
      expect(result).toEqual(expected);
    });
  });

describe('.calcRoute', () => {
    it('Calculate the length of the route along a series of nodes', () => {
      var expected = 9;
      var result = routes.calcRoute(vertexSet,graph,['A','B','C']);
      expect(result).toEqual(expected);
    });
  });



});
