'use strict';

angular
  .module('f1App').filter('allURLWithHTTP', function () {
        return function (text) {
			
			var str = text.replace('https', 'http');
			str = str.replace('http://en.wikipedia.org/wiki/' , 'http://en.m.wikipedia.org/wiki/');
			return str;
        };
});