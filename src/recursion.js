/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n)
{
	if (n < 0) return null;
	if (n === 0) return 1;

	return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array)
{
	if (array.length === 0) return 0;
	if (array.length === 1) return array[0];

	let copy = array.slice();
	return copy.pop() + sum(copy);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array)
{
	if (array.length === 0) return 0;
	if (array.length === 1) return Array.isArray(array[0]) ? arraySum(array[0]) : array[0];

	let copy = array.slice();
	let current = copy.pop();

	if (Array.isArray(current)) return arraySum(current) + arraySum(copy);
	else return current + arraySum(copy);
};

// 4. Check if a number is even.
var isEven = function(n)
{
	n *= Math.sign(n);

	if (n === 0) return true;
	if (n === 1) return false;

	return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n)
{
	if (n === 0 || n === 1 || n === -1) return 0;

	if (n > 1) return (n - 1) + sumBelow(n - 1);
	if (n < -1) return (n + 1) + sumBelow(n + 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y)
{
	if (x === y || (x - y) === 1 || (y - x) === 1) return [];

	if (y > x) return [x + 1].concat(range(x + 1, y));
	if (x > y) return [x - 1].concat(range(x - 1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp)
{
	if (exp === 0) return 1;
	if (exp === 1) return base;
	if (exp < 0) return (1 / exponent(base, -exp));

	if (exp % 2 === 0)
	{
		let x = exponent(base, exp / 2);
		return x * x;
	}

	if (exp > 1) return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n)
{
	if (n === 1) return true;
	if (n < 1) return false;

	return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string)
{
	if (string.length === 0) return '';

	return string.slice(-1).concat(reverse(string.slice(0, -1)));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string)
{
	if (string.length === 0 || string.length === 1) return true;

	let s = string.toLowerCase().replace(/\s+/g, '');

	if (s.slice(0, 1) === s.slice(-1)) return palindrome(s.slice(1, -1));
	else return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y)
{
	if (x < 0 && y < 0) return -modulo(-x, -y);
	if (x > 0 && y < 0) return -modulo(x, -y);
	if (x < 0 && y > 0) return -modulo(-x, y);

	if (y === 0) return NaN;
	if (x === y) return 0;

	if (x < y) return x;
	return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y)
{
	if (x < 0 && y < 0) return multiply(-x, -y);
	if (x > 0 && y < 0) return -multiply(x, -y);
	if (x < 0 && y > 0) return -multiply(-x, y);

	if (x === 0 || y === 0) return 0;
	if (x === 1) return y;
	if (y === 1) return x;

	if (x < y) return multiply(y, x);

	return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y)
{
	if (x < 0 && y < 0) return divide(-x, -y);
	if (x > 0 && y < 0) return -divide(x, -y);
	if (x < 0 && y > 0) return -divide(-x, y);

	if (y === 0) return NaN;
	if (x === 0) return 0;
	if (y === 1) return x;

	if (x < y) return 0;
	return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y)
{
	if (x < 0 || y < 0) return null;
	if (x < y) return gcd(y, x);

	if (y === 0) return x;
	return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2)
{
	if (str1.length === 0 && str2.length === 0) return true;

	if (str1[0] !== str2[0]) return false;
	return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str)
{
	if (str.length === 0) return [];

	return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array)
{
	if (array.length === 0) return [];

	return [array[array.length - 1]].concat(reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length)
{
	if (length === 0) return [];

	return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n)
{
	if (n === 0) return [];

	let value = n % 15 === 0 ? 'FizzBuzz' : n % 5 === 0 ? 'Buzz' : n % 3 === 0 ? 'Fizz' : n.toString();
	return fizzBuzz(n - 1).concat([value]);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value)
{
	if (array.length === 0) return 0;

	let count = array[0] === value ? 1 : 0;
	return count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback)
{
	if (array.length === 0) return [];

	let result = callback.call(null, array[0]);
	return [result].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key)
{
	let count = 0;

	for (let [k, v] of Object.entries(obj))
	{
		if (k === key) count++;
		if (typeof v === 'object') count += countKeysInObj(v, key);
	}

	return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value)
{
	let count = 0;

	for (let v of Object.values(obj))
	{
		if (v === value) count++;
		if (typeof v === 'object') count += countValuesInObj(v, value);
	}

	return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey)
{
	if (obj[oldKey] !== undefined)
	{
		obj[newKey] = obj[oldKey];
		delete obj[oldKey];
	}

	for (let value of Object.values(obj))
	{
		if (typeof value === 'object') replaceKeysInObj(value, oldKey, newKey);
	}

	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n)
{
	if (n <= 0) return null;

	if (n === 1) return [0, 1];

	let prevResult = fibonacci(n - 1), prevTwo = prevResult.slice(-2);
	return prevResult.concat([prevTwo[0] + prevTwo[1]]);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n)
{
	if (n < 0) return null;

	if (n === 0) return 0;
	if (n === 1) return 1;

	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array)
{
	if (array.length === 0) return [];

	return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array)
{
	if (array.length === 0) return [];

	let capitalizedWord = array[0].slice(0, 1).toUpperCase() + array[0].slice(1);

	return [capitalizedWord].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj)
{
	let sum = 0;

	for (let value of Object.values(obj))
	{
		if (value % 2 === 0) sum += value;
		if (typeof value === 'object') sum += nestedEvenSum(value);
	}

	return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array)
{
	let arr = [];

	for (let i of array)
	{
		if (Array.isArray(i)) arr = arr.concat(flatten(i));
		else arr.push(i);
	}

	return arr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj)
{
	obj = obj || {};
	if (str.length === 0) return obj;

	let letter = str[0];

	if (obj[letter]) obj[letter]++;
	else obj[letter] = 1;

	letterTally(str.slice(1), obj);

	return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list)
{
	if (list.length === 0) return [];

	let copy = list.slice();

	while (copy[0] === copy[1])
	{
		copy.shift();
	}

	return [copy[0]].concat(compress(copy.slice(1)));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug)
{
	if (array.length === 0) return [];

	let copy = array[0];
	copy.push(aug);

	return [copy].concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array)
{
	if (array.length === 0) return [];

	let copy = array.slice();

	while (copy[0] === 0 && copy[1] === 0)
	{
		copy.shift();
	}

	return [copy[0]].concat(minimizeZeroes(copy.slice(1)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array)
{
	if (array.length === 0) return [];

	let current = array[array.length - 1];
	let sign = array.length % 2 === 0 ? -1 : 1;
	let signed = sign * current * Math.sign(current);

	return alternateSign(array.slice(0, -1)).concat([signed]);
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str)
{
	if (str.length === 0) return '';

	let convertToText =
	{
		0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
	};

	if (str[0] === ' ' || isNaN(str[0])) return str[0] + numToText(str.slice(1));
	return convertToText[str[0]] + numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node)
{
	let count = 0;
	node = node || document.body;

	for (let child of node.children)
	{
		if (child.tagName.toLowerCase() === tag.toLowerCase()) count++;
		if (child.children) count += tagCount(tag, child);
	}

	return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max)
{
	min = min || 0;
	max = max || array.length;

	let guess = Math.floor((min + max) / 2);

	if (array[guess] === target) return guess;
	if (max - min === 1) return null;

	if (array[guess] < target)
	{
		return binarySearch(array, target, guess, max);
	}

	if (array[guess] > target)
	{
		return binarySearch(array, target, min, guess);
	}
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array)
{
	if (array.length < 2) return array;

	let mid = Math.floor(array.length / 2);
	let sub1 = mergeSort(array.slice(0, mid));
	let sub2 = mergeSort(array.slice(mid, array.length));

	let merged = [];
	while (sub1.length > 0 && sub2.length > 0)
	{
		if (sub1[0] < sub2[0]) merged.push(sub1.shift());
		else merged.push(sub2.shift());
	}
	return merged.concat(sub1).concat(sub2);
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input)
{
	let result = Array.isArray(input) ? [] : {};

	for (let [k, v] of Object.entries(input))
	{
		if (Array.isArray(v) || typeof v === 'object') result[k] = clone(v);
		else result[k] = v;
	}

	return result;
};
