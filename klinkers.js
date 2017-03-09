function encode(tekst){

	var array = tekst.split("");

	for(i=0; i<array.length; i++){

		if (array[i] === "a") {
			array[i] = "!";
			console.log(array[i]);

		}else if(array[i] === "e"){
			array[i] = "@";
			console.log(array[i]);
		}else if (array[i] === "u") {
			array[i] = "#";
			console.log(array[i]);
		}else if (array[i] === "i") {
			array[i] = "%";
			console.log(array[i]);
		}
	}
	return(array.join(""));

}
function test(){
	var test = document.getElementById('tekst').value;
	document.getElementById('resultaat').innerHTML = encode(test);
}

