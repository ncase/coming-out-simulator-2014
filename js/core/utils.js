function numberInWords(number) {

	var writtenNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight",
						  "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
						  "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	var writtenTens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", 
					   "ninety"];

	if(number < 1) {
		return "zero";
	}

	if(number <= 19) {
		return writtenNumbers[number - 1];
	}else if(number < 100) {
		var tens = Math.floor(number / 10);
		var ones = number % 10;
		var final = writtenTens[tens - 2];z

		if(ones > 0) {
			console.log(final);
			final += " " + writtenNumbers[ones   - 1];
		}

		return final;
	}else {
		return "too many";
	}

}
