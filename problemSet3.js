/* Problem Set #3 */
var x = 0;
//---------

/* Write a function palindrome that takes a single string parameter and returns true if the parameter is a palindrome (the string is the same forward as it is backward), otherwise returns false.
	palindrome("racecar") should return true because "racecar" is also "racecar" backwards. */

function palindrome (myString){
	//recursive for no reason but to be difficult
	if (myString.length == 1 || myString.length == 0){
		return true; 
		}else{
		if (myString[0]==myString[(myString.length)-1])
			palindrome(myString.slice(1,-1));
		else return false;
	}
	return true;
}

function simplerPalindrome (myString){
	return myString == myString.split("").reverse().join("");
}

console.log(++x,"-----------------");
console.log(palindrome("racecar")," ",simplerPalindrome ("racecar"));
console.log(palindrome("notapalindrome")," ",simplerPalindrome ("notapalindrome"));
console.log(palindrome("radxdar")," ",simplerPalindrome ("radxdar"));

/*Write a function dashInsert that takes a single num parameter and returns the num with inserted dashes ('-') between adjacent odd digits. 
	For example: if num is 454793 the output should be "4547-9-3". */

function dashInsert (num) {
	var numArray = [];
	num = num.toString();
	for (var i=0;i<num.length;i++){
		numArray.push(num[i]);
		if (num[i]%2!==0 && num[i+1]%2!==0 && num[i+1]!==undefined)
			numArray.push("-");	
	}
	return numArray.join("");
}
console.log(++x,"-----------------");
console.log(dashInsert(454793));
console.log(dashInsert(33546799));

/* Bonus: Write a function caesarCipherthat takes a string and number parameter and performs a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). 
	Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".  */

function cipher(myString,num){
	var encoded = [];
	for (var i=0;i<myString.length;i++){
		if (myString[i].match(/[a-zA-Z]/) !==null){
				var asciiNum = myString.charCodeAt(i)+num;
				if ((asciiNum>90 && asciiNum <97) || asciiNum > 122)
					asciiNum-=26;
				encoded.push(String.fromCharCode(asciiNum));
		}else encoded.push(myString[i]);
	}
	return (encoded.join(""));
}
console.log(++x,"-----------------");
console.log(cipher("This is a test, here come some dashes ------ q",8));
console.log(cipher("Caesar Cipher.",2));



