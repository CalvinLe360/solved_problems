function solve(input){
	solution = ""
	for(let i = 0; i < input.length; i++){
		switch(input[i]){
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
			case 'A':
			case 'E':
			case 'I':
			case 'O':
			case 'U':
				break;
			default:
				solution += input[i];
				break;
		}
	}

	console.log(solution)
}

solve("afeoYPOQoP")
solve("AElvkVnjwj")
solve("tSKZOjIqRF")
solve("JOPkFOZIZP")
solve("dKlYRNWegw")
solve("sRDdkrGmmp")
solve("PrOtkSNGHK")
solve("YCIapndDXE")
solve("uJncJQEjkI")
solve("NFOWpNQoPx")