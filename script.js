function convertToRoman(num) {
	//create a roman numeral look up table
	  const lookUpTable = {
		   M:   1000,
		  CM:   900,
		  D:    500,
		  CD:   400,
		  C:	100,
		  XC:	90,
		  L:	50,
		  XL:	40,
		   X:	10,
		  IX:	9,
		  V:	5,
		  IV:	4,
		  I:	1
	  }

	//creatr an accumulator
	let acc = '';

	 //loop through look up table
	  for (const key in lookUpTable) {
		  const numberValue = lookUpTable[key]
		  while (numberValue <= num) {
			 num -= numberValue;
			 acc += key;
		  }
	  }
	return acc;
}
convertToRoman(36)
