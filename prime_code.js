
function checkprime(number){
	let factor=0;
    	for(let i=1;i<=number;i++){
        	if(number%i==0){
            factor++;
			}
    	}
 if (factor ==2){
        	return true;
    	}
        	return false;
    	}
		let answer=checkprime(13);
		if(answer==true){
			console.log(answer, "Prime")
		}else {
			console.log(answer, "Not Prime")
		}


