
/*
Daniel J. Bernstein's Algorithm
*/

var djb2 = function (str) {
	var h = 5381;
	var i = 0;

	for (i = 0; i < str.length; i++) {

		var sptr = str.charCodeAt(i);

		h = ((h << 5) + h) + sptr;
	}
	return (h & 0xffffffffff).toString(16);
}

