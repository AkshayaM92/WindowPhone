function convertDate(month){
		
		switch(month){
			case 'Jan':
				monthVal = '0';
				break;
			case 'Feb':
				monthVal = '1';
				break;
			case 'Mar':
				monthVal = '2';
				break;
			case 'Apr':
				monthVal = '3';
				break;
			case 'May':
				monthVal = '4';
				break;
			case 'Jun':
				monthVal = '5';
				break;
			case 'Jul':
				monthVal = '6';
				break;
			case 'Aug':
				monthVal = '7';
				break;
			case 'Sep':
				monthVal = '8';
				break;
			case 'Oct':
				monthVal = '9';
				break;
			case 'Nov':
				monthVal = '10';
				break;
			case 'Dec':
				monthVal = '11';
				break;
		}
		
		return monthVal;
	}
	
	
function reverseConvertDate(month){
		
		switch(month){
			case '01':
				monthVal = 'Jan';
				break;
			case '02':
				monthVal = 'Feb';
				break;
			case '03':
				monthVal = 'Mar';
				break;
			case '04':
				monthVal = 'Apr';
				break;
			case '05':
				monthVal = 'May';
				break;
			case '06':
				monthVal = 'Jun';
				break;
			case '07':
				monthVal = 'Jul';
				break;
			case '08':
				monthVal = 'Aug';
				break;
			case '09':
				monthVal = 'Sep';
				break;
			case '10':
				monthVal = 'Oct';
				break;
			case '11':
				monthVal = 'Nov';
				break;
			case '12':
				monthVal = 'Dec';
				break;
		}
		
		return monthVal;
	}

	function toCheckTableIsCreated(mydb){
	try{
	mydb.transaction(function(t) {
t.executeSql("select count(busExpId) as cnt from businessExpDetails;", [], function(t, res) {
        alert("res.rows.length: " + res.rows.length + " -- should be 1");
        alert("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
      });
});	
	}catch(err){
		alert(err);
	}
}	