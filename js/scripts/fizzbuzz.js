'use strict';

var fizzBuzz = {
  calculate: function(max) {
    var array = [];
    for (var i = 1; i <= max; i++) {
      var result;

      if (this._isFizzBuzz(i)) {
        result = 'fizzBuzz';
      } else if (this._isBuzz(i)) {
        result = 'buzz';
      } else if (this._isFizz(i)) {
        result = 'fizz';
      } else {
        result = i;
      }

      array.push(result);
    }

    return array;
  },

  render: function(results) {
    var list = $('#fizzbuzz-results');
    list.find('li').remove();

    for (var i = 0; i < results.length; i++) {
      list.append('<li>' + results[i] + '</li>');
    }
  },

  _isFizz: function(num) {
    return num % 3 === 0;
  },

  _isBuzz: function(num) {
    return num % 5 === 0;
  },

  _isFizzBuzz: function(num) {
    return num % 15 === 0;
  }
};

var fizzBuzzTemplate =
'<h3>fizzbuzz</h3>' +
  '<form id="fizzbuzz-form">' +
    '<label for="fizzbuzz-range">max</label>' +
    '<input type="text" name="fizzbuzz-range" id="fizzbuzz-range">' +
    '<input type="submit" id="fizzbuzz-submit" value="Calculate">' +
  '</form>' +
  '<ul id="fizzbuzz-results"></ul>';

$(document).ready(function() {
  $('main').append(fizzBuzzTemplate);
  $('#fizzbuzz-form').submit(function(e) {
    e.preventDefault();
    var range, results;
    range = $('#fizzbuzz-range').val();
    results = fizzBuzz.calculate(range);
    fizzBuzz.render(results);
  });
});
