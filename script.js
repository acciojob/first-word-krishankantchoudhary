function firstWord(s) {
  // your code here
	s=s.trim();
	if(s===""){
		return "";
	}

	let spaceindex=s.indexOf("");
	if(spaceindex===-1){
		return s;
	}
	else{
		s.substring(0,spaceindex);
		
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
