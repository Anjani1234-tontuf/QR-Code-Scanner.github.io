
(function () {

	var btnLetter = document.getElementById('btnLetter');
	btnLetter.addEventListener('click', function () {
		generateLetterSequences();
	});

	function generateLetterSequences() {
		var string1 = document.getElementById('string1').value;
			string1 = string1.toLowerCase();
			string1 = string1.replace(/[!@#$%^&*?,.:;\d]/g, "");
		
		var length1 = document.getElementById('length1').value;
			length1 = parseInt(length1);
		
		var quantity1 = document.getElementById('quantity1').value;
			quantity1 = parseInt(quantity1);
			quantity1+= 1;																								
		
		var results1 = document.getElementById('results1');
		
		var quantityX = 1;
  		
		var tempArr = [];
  		
		var outputArr = [];
  		
		while (quantityX <= quantity1) {
	
			var lengthX = 1;
	    		
			while (lengthX <= length1) {
		    		var number = Math.floor(Math.random()*string1.length+1);

		      			tempArr.push(string1[number]);
						
	        			lengthX++;
	    		}
  			quantityX++;
		}		
		
	    var tempString = tempArr.join('');
		
		switch (length1) {
			case 1:
				outputArr = tempString.match(/.{1,1}/g);
				break;
			case 2:
				outputArr = tempString.match(/.{1,2}/g); 
		     	        break;
			case 3:
				outputArr = tempString.match(/.{1,3}/g);
				break;
			case 4:
				outputArr = tempString.match(/.{1,4}/g);
				break;
			case 5:
				outputArr = tempString.match(/.{1,5}/g);
				break;
			case 6:
				outputArr = tempString.match(/.{1,6}/g);
				break;
			case 7:
				outputArr = tempString.match(/.{1,7}/g);
				break;
			case 8:
				outputArr = tempString.match(/.{1,8}/g);
				break;
			case 9:
				outputArr = tempString.match(/.{1,9}/g);
				break;
			case 10:
				outputArr = tempString.match(/.{1,10}/g);
				break;
			case 11:
				outputArr = tempString.match(/.{1,11}/g);
				break;
			case 12:
				outputArr = tempString.match(/.{1,12}/g);  	
				break;
			case 13:
				outputArr = tempString.match(/.{1,13}/g);
				break;
			case 14:
				outputArr = tempString.match(/.{1,14}/g);
				break;
			case 15:
				outputArr = tempString.match(/.{1,15}/g);
				break;
			case 16:
				outputArr = tempString.match(/.{1,16}/g);
				break;
			case 17:
				outputArr = tempString.match(/.{1,17}/g);
				break;
			case 18:
				outputArr = tempString.match(/.{1,18}/g);
				break;
			case 19:
				outputArr = tempString.match(/.{1,19}/g);
				break;
			case 20:
				outputArr = tempString.match(/.{1,20}/g);
				break;
			default:
				outputArr = tempString.match(/.{1,5}/g);
				break;
		}
	    	for (var i = 0; i < quantity1 - 1; i++) {																				
	        	results1.innerHTML += i+1 + '. ' + outputArr[i] + '<br>';
	      	}
			reset1();
	}

	function reset1 () {
		document.getElementById('string1').value="";
		document.getElementById('length1').value="";
		document.getElementById('quantity1').value="";
	}

})();
