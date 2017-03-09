function encode(tekst){

	var array = tekst.split("");

	for(i=0; i<array.length; i++){

		if (array[i] === "a" || array[i]=== "A") {
			array[i] = "!";

		}else if(array[i] === "e"){
			array[i] = "@";

		}else if (array[i] === "u") {
			array[i] = "#";
			
		}else if (array[i] === "i") {
			array[i] = "%";
		}
	}
	return(array.join(""));

}
function uitprintenBoven(){
	var test = document.getElementById('tekst').value;
	document.getElementById('resultaat').innerHTML += encode(test);
}
function uitprintenOnder(){
	var test = document.getElementById('tekst2').value;
	document.getElementById('resultaat').innerHTML += encode(test);
}

