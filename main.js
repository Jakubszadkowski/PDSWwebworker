//document.getElementById("valOne").addEventListener("click", initOnePesel()); 
//document.getElementById("valFromDate").addEventListener("click", initPeselFromDate()); 
//document.getElementById("valFromNumb").addEventListener("click", initPeselFromOther()); 

function initOnePesel(){
	clrear();
	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	var other = document.getElementById("other").value;
	if(day==""||month==""||year==""||other==""||year.length!=4)
		alert("Błąd danych! Sprawdz czy dane sa wpisane poprawnie");
	else{

	if(year>=1800&&year<=1899)month=80+Number(month);
	if(year>=2000&&year<=2099)month=20+Number(month);
	if(year>=2100&&year<=2199)month=40+Number(month);
	if(year>=2200&&year<=2299)month=60+Number(month);
	if(month.length==1)month='0'+month;

	pesel = year.substring(2,4)+''+month+''+day+''+other;
	var worker = new Worker("validate_one_pesel.js");
	var odp ="";
	worker.addEventListener('message', function(e) {
		odp=e.data;
		if(odp=="true")
		{
			addElement("pesel",pesel+" jest prawidłowym numerem pesel");
		}
		else
			addElement("pesel",pesel+" jest nieprawidłowym numerem pesel");
	}, false);
	worker.postMessage(pesel);
	worker.postMessage('stop')
	// alert("odp = "+odp);

}
}

function initPeselFromDate(){
	clrear();
	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	if(day==""||month==""||year==""||year.length!=4)
	{
		alert("Blad danych, wprowadz ponownie!");
	}
	else{
		if(year>=1800&&year<=1899)month=80+Number(month);
		if(year>=2000&&year<=2099)month=20+Number(month);
		if(year>=2100&&year<=2199)month=40+Number(month);
		if(year>=2200&&year<=2299)month=60+Number(month);
		if(month.length==1)month='0'+month;
		var beg = year.substring(2,4)+''+month+''+day;
		var worker = new Worker("show_all_pesels.js");
		worker.addEventListener('message', function(e) {
			addElement("pesel","Numery pesel prawidłowe : "+e.data)
		}, false);
		worker.postMessage(beg);
		worker.postMessage('stop')
	}

}
function initPeselFromOther(){
	var other = document.getElementById("other").value;
	if(other==""||other.length!=5)
	alert("Podane dane są nieprawidłowe!");
	else{
		var worker = new Worker("find_valid_pesels.js");
		worker.addEventListener('message', function(e) {
			addElement("pesel","Numery pesel prawidłowe : "+"<br>"+e.data)
		}, false);
		worker.postMessage(other);
		worker.postMessage('stop')
		
	}
}
function addElement(mydiv,msg){
	clrear();
	newDiv = document.createElement("span");
	newDiv.innerHTML = msg;  
  
	my_div = document.getElementById(mydiv);
	parentDiv = document.getElementById('box');
	parentDiv.insertBefore(newDiv, my_div);
	newDiv.classList.add("mystyle");  
  }
  function clrear(){  
	document.getElementById('box').innerHTML = "";
  }