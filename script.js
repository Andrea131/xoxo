const signs = [
	"X",
	"O",
	"U"
]
let player = 0

function move(e){
    const cell = e.target.closest(".cell")
	if(!cell) return
	cell.innerText = signs[player++%signs.length]
}
