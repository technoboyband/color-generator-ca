
// Returns a number between 0 and 255
function generateRandomNumber() {
	return Math.floor(Math.random() * 256);
}

function createRandomColor(){
	let newColor = [];
	for(let i = 0; i <3; i++){
		newColor.push(generateRandomNumber());
	}
	return newColor.join(',');
}

$w.onReady(function () {
	// Selectors for all the Container boxes
	const bigBox = $w('#box0');
	const firstCircle = $w('#box1');
	const secondCircle = $w('#box2');
	const thirdCircle = $w('#box3');
	const fourthCircle = $w('#box4');
	const fifthCircle = $w('#box5');

	const alShapes = [bigBox, fifthCircle, firstCircle,secondCircle,thirdCircle,fourthCircle];
	
	// Selector for the first button
	const changeBoxBtn = $w('#changeBox');
	const changeAllBtn =$w('#changeAll');

	changeBoxBtn.onClick(event => {
		let newRGBColor = createRandomColor()
		bigBox.style.backgroundColor = `rgb(${newRGBColor})`;
		bigBox.style.borderColor = `rgb(${newRGBColor})`;
		});

	changeAllBtn.onClick(event => {
		alShapes.forEach(element => {
			let newRGBColor = createRandomColor()
			element.style.backgroundColor = `rgb(${newRGBColor})`;
			element.style.borderColor = `rgb(${newRGBColor})`;
		});
	});

});
