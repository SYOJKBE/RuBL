/*var newLayer = new ol.layer.Tile({
source: new ol.source.OSM({
    url: 'E:/Maperitive/Tiles/vychod/{z}/{x}/{y}.png',
    crossOrigin: null
    })
});*/

window.onload = function() {
	const url = "http://escaxw025097.seat.vwg:8080/job/Test_RuBL_Checkers/api/json"
	readTextFile(url);
	//http://escaxw025097.seat.vwg:8080/view/Configuration/job/ObsoleteJobs/ws/currentJobs.txt?token=SYOJKBE
	//readTextFile();
}

async function readTextFile(file)
{	

	var headers = new Headers();

	headers.append('Authorization', 'Basic ' + btoa('syojkbe' + ':' + '116b79441369080dffa7577a9a8dbf6a67'));

	const res = await fetch(file, {
      method: "GET",
      headers: {
        headers
      }
    });
    const resJson = await res.json();
	
	console.log(resJson);

	/*var xhr = new XMLHttpRequest();
	var authorizationbasic = window.btoa("syojkbe:116b79441369080dffa7577a9a8dbf6a67");
	xhr.onreadystatechange = function() {
		if(this.readyState == 4)
		{
			 console.log(this.status);
		}
	};
	xhr.open("POST", file, true);
	xhr.setRequestHeader('Authorization','Basic ' + authorizationbasic)
	xhr.send();*/

	/*var xhr=new XMLHttpRequest();
	xhr.open("GET", 'http://escaxw025097.seat.vwg:8080/');
	//xhr.setRequestHeader("Authorization", "Basic " + btoa("SYOJKBE:116b79441369080dffa7577a9a8dbf6a67"));
	//xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://escaxw025097.seat.vwg:8080/');
	xhr.onload=function(){
		var allText = xhr.responseText;
			
		var mainDiv = document.getElementById("table");
			
		// By lines
		var lines = allText.split('\n');
		for(var line = 0; line < lines.length - 1; line++){
			//document.getElementById("r0").innerHTML = lines[2];
			lines[line] = lines[line].substr(0, lines[line].indexOf(';'));
		}
		
		var uniqueLines = lines.filter(onlyUnique);
		
		for(var line = 0; line < uniqueLines.length - 1; line++){
			var element = document.createElement("div");
			element.setAttribute("class", "row");
			mainDiv.appendChild(element);
				
			var element2 = document.createElement("div");
			element2.innerHTML = uniqueLines[line];
			element2.setAttribute("class", "cell");
			element2.setAttribute("data-title", "GM Jobs");
			element.appendChild(element2);
				
			/*var element3 = document.createElement("div");
			element3.innerHTML = "0";
			element3.setAttribute("class", "cell");
			element3.setAttribute("data-title", "RuBL Errors");
			element.appendChild(element3);
			
		}
	}
	xhr.send(null);*/
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var table = document.getElementById("table");

table.onclick = e => {
    //alert(e.target.innerText);
	var prl = e.target.innerText;
	window.location.href = './projects.html?prl=' + prl;
} 