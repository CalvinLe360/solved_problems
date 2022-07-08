function solve(input){
	function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
	}

	const chr_i = []
	for(let i = 0; i < input.length; i++){
		chr_i.push(i)
	}
	shuffleArray(chr_i)

	answer = ""
	for(let i = 0; i < chr_i.length; i++){
		answer += input[chr_i[i]]
	}

	return answer
}

const text = "abcdefg"
console.log(solve(text))
console.log(solve(text))
console.log(solve(text))
console.log(solve(text))
console.log(solve(text))
console.log(solve(text))
console.log(solve(text))
console.log(solve(text))