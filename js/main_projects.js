/*var newLayer = new ol.layer.Tile({
source: new ol.source.OSM({
    url: 'E:/Maperitive/Tiles/vychod/{z}/{x}/{y}.png',
    crossOrigin: null
    })
});*/

window.onload = function() {
	
	var url_string = window.location.href;
	var url = new URL(url_string);
	var prl = url.searchParams.get("prl");
	
	//document.getElementById("title").innerHTML = prl;
	
	//readTextFile("http://escaxw025097.seat.vwg:8080/view/Configuration/job/ObsoleteJobs/ws/currentJobs.txt", prl);
	readTextFile("ftp://escaxw025097.seat.vwg/currentJobs.txt", prl);
	//readTextFile();
}

function readTextFile(file, prl)
{	
	var xhr=new XMLHttpRequest();
	xhr.open("GET", file);
	xhr.onload=function(){
		var allText = xhr.responseText;
			
		var mainDiv = document.getElementById("table");
		var repeatLines = [];
			
		// By lines
		var lines = allText.split('\n');
		for(var line = 0; line < lines.length - 1; line++){

			if (prl === lines[line].substr(0, lines[line].indexOf(';'))) {
				
				var gm = lines[line].substr(lines[line].indexOf(';') + 1, lines[line].length);
				
				if (gm.indexOf("AppAdapter") === -1) {
					repeatLines.push(lines[line].substr(lines[line].indexOf(';') + 1, lines[line].length));
				}
			}
		}
		
		for(var line = 0; line < repeatLines.length; line++){
			var element = document.createElement("div");
			element.setAttribute("class", "row");
			mainDiv.appendChild(element);
				
			var element2 = document.createElement("div");
			element2.innerHTML = repeatLines[line];
			element2.setAttribute("class", "cell");
			element2.setAttribute("data-title", "GM Jobs");
			element.appendChild(element2);
				
			var element3 = document.createElement("div");
			element3.innerHTML = "0";
			element3.setAttribute("class", "cell");
			element3.setAttribute("data-title", "RuBL Errors");
			element.appendChild(element3);
			
		}
	}
	xhr.send();
}

var table = document.getElementById("table");

table.onclick = e => {
    alert(e.target.innerText);
} 