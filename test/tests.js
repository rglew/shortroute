var expect = require('expect');
var routes = require('../routes.js');

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
    it('calculates the paths between two points', () => {
      var graph = [ [ 0, 1, 5 ],[ 1, 2, 4 ],[ 2, 3, 8 ],[ 3, 2, 8 ],[ 3, 4, 6 ],[ 0, 3, 5 ],[ 2, 4, 2 ],[ 4, 1, 3 ],[ 0, 4, 7 ] ];
      var expected = [ [ 1, 2, 3, 2, 4, 1 ],[ 1, 2, 3, 4, 1 ],[ 1, 2, 4, 1 ] ];
      var result = routes.paths({ graph, from: 1, to: 1});
      expect(result).toEqual(expected);
    });
  });



});