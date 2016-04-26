'use strict';

QUnit.test('fizzbuzz returns "fizz" if divisible by 3', function(assert) {
  var max, result, expected;

  max = 3;
  expected = [1, 2, 'fizz'];
  result = fizzBuzz.calculate(max);

  assert.deepEqual(result, expected);
});

QUnit.test('fizzbuzz returns "buzz" if divisible by 5', function(assert) {
  var max, result, expected;

  max = 5;
  expected = [1, 2, 'fizz', 4, 'buzz'];
  result = fizzBuzz.calculate(max);

  assert.deepEqual(result, expected);
});

QUnit.test('fizzbuzz returns "fizzbuzz" if divisible by 3 and 5', function(assert) {
  var max, result, expected;

  max = 15;
  expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzBuzz'];

  result = fizzBuzz.calculate(max);

  assert.deepEqual(result, expected);
});

QUnit.test('fizzBuzz generator displays fizzBuzz results for a given range', function(assert) {
  $('#fizzbuzz-range').val('5');
  $('#fizzbuzz-submit').click();
  assert.equal(
    $('#fizzbuzz-results').html().trim(),
    '<li>1</li><li>2</li><li>fizz</li><li>4</li><li>buzz</li>'
  );
});
