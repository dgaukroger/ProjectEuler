var sum = 0

var f1 = 1
var f2 = 2
var temp

while (sum < 4000000) {

	if (f2 % 2 === 0) {
		
		sum += f2;
	}

	temp = f2;
	f2 += f1;
	f1 = temp;

}
console.log(sum);