document.getElementById("valOne").addEventListener("click", init()); 


function init(){
	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	var other = document.getElementById("other").value;
	if(year>=1800&&year<=1899)month=80+Number(month);
	if(year>=2000&&year<=2099)month=20+Number(month);
	if(year>=2100&&year<=2199)month=40+Number(month);
	if(year>=2200&&year<=2299)month=60+Number(month);
	if(month.length==1)month='0'+month;

	var pesel = year.substring(2,4)+''+month+''+day+''+other;
	console.log("pesel = "+ pesel);

}

function init2(){
	var worker = new Worker('validate_one_pesel.js');
	worker.addEventListener('message', function(e) {
		alert('otrzymano odpowiedź: ' + e.data);
	}, false);
	worker.postMessage("start");
	worker.postMessage("ala");
	worker.postMessage('stop')

}

