"use strict";

var $ = function(id) {
    return document.getElementById(id);
};
 
function getHTTPObject() {
  var xhr = false;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e) {
        xhr = false;
      }
    }
  }
  return xhr;
}
 

function grabFile(file) {
  var request = getHTTPObject();
  var city  = $("city").value;
  if (request) {
    request.onreadystatechange = function() {
      parseResponse(request);
    };
    request.open("GET",'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&mode=xml" + "&units=metric"+
		      "&APPID=928d8ff6c0fd07b16dbb7640b27d3dae", true);
    request.send(null);
  }
  $("city").value = "";
}

function parseResponse(request) {
  if (request.readyState == 4) {
    if (request.status == 200 || request.status == 304) {
      
         
           var data = request.responseXML;
	 
	        console.log(data);
			var detail = $("details");
			
			
             detail.innerHTML = Fetch(data);
    }
  }
}

function Fetch(data){
	       var max = [];
		   var min = [];
           var Forecast_max= [] ;  
           var Forecast_min= [];	
           var Symbol = [];
		    var Symbolname = [];
           var Temp5days = [];
           var Avg  = [];		   
		   var name = data.getElementsByTagName("name")[0].childNodes[0].nodeValue;
		   var country = data.getElementsByTagName("country")[0].childNodes[0].nodeValue;
		   var forecast = data.getElementsByTagName("time");
		
			  for(var i=0;i<5;i+=1)
			 {
				 
			     var max1  = [data.getElementsByTagName("temperature")[i].getAttribute('max')]
				             
				 var min2 = [data.getElementsByTagName("temperature")[i].getAttribute('min')]
				 
				 max.push(parseFloat(max1));
				 min.push(parseFloat(min2));
			 }
			  console.log(forecast.length)
			  for(var i =0;i<forecast.length;i+=8)
			 {
				var days = [data.getElementsByTagName("temperature")[i].getAttribute('max')]
				             
				var day1 = [data.getElementsByTagName("temperature")[i].getAttribute('min')]
				            
							
				 var avg = (parseFloat(days)+parseFloat(day1))/2;
							Avg.push(avg);
				var symb = [data.getElementsByTagName("symbol")[i].getAttribute('var')
				            //data.getElementsByTagName("name")[0].childNodes[0].nodeValue
							]
				 var symbname = [data.getElementsByTagName("symbol")[i].getAttribute('name')
				            //data.getElementsByTagName("name")[0].childNodes[0].nodeValue
							]
				 Symbol.push(symb);	
                 Symbolname.push(symbname)				 
			     Forecast_max.push(parseFloat(days));
				 Forecast_min.push(parseFloat(day1));
				 
				 Temp5days.push(days);
			 }
			 console.log(Forecast_min)
			var ctx = $("tempday1").getContext('2d');		
        var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'],
    datasets: [{
      label: 'Max',
      data: [max[0],max[1],max[2],max[3],max[4]],
      backgroundColor: "rgba(255,153,0,0.4)"
    }, {
      label: 'Min',
      data: [min[0],min[1],min[2],min[3],min[4]],
      backgroundColor: "rgba(255, 255, 255, 0)"
    }]
  },
  options: {
        title: {
            display: true,
            text: 'Todays Max and Min Temperature in Line Chart'
        }
    }
});
var ctx1 = $("tempallday").getContext('2d');		
        var myChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'],
    datasets: [{
      label: 'Max',
      data: [Forecast_max[0],Forecast_max[1],Forecast_max[2],Forecast_max[3],Forecast_max[4]],
      backgroundColor: "rgba(255,153,0,0.2)"
    }, {
      label: 'Min',
      data: [Forecast_min[0],Forecast_min[1],Forecast_min[2],Forecast_min[3],Forecast_min[4]],
      backgroundColor: "rgba(255, 255, 255, 0.4)"
    }]
  },
     options: {
        title: {
            display: true,
            text: 'Average Max and Min of all days in Line chart'
        }
    }
		});
	var ctx1 = $("barallday").getContext('2d');		
        var myChart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'],
    datasets: [{
      label: 'Max',
      data: [Forecast_max[0],Forecast_max[1],Forecast_max[2],Forecast_max[3],Forecast_max[4]],
      backgroundColor: "rgba(255,153,0,0.4)"
    }, {
      label: 'Min',
      data: [Forecast_min[0],Forecast_min[1],Forecast_min[2],Forecast_min[3],Forecast_min[4]],
      backgroundColor: "rgba(0, 1, 153, 0.4)"
    }]
  },
     options: {
        title: {
            display: true,
            text: 'Average Max and Min of all days in Bar chart'
        }
    }
});
			  
			  
              $("day1").innerHTML = "Day1<br>"+Avg[0]+"&#x2103<br>"+Symbolname[0]+"<img src='http://openweathermap.org/img/w/"+Symbol[0]+".png'>";
			  $("day2").innerHTML = "Day2<br>"+Avg[1]+"&#x2103<br>"+Symbolname[1]+"<img src='http://openweathermap.org/img/w/"+Symbol[1]+".png'>";
			  $("day3").innerHTML = "Day3<br>"+Avg[2]+"&#x2103<br>"+Symbolname[2]+"<img src='http://openweathermap.org/img/w/"+Symbol[2]+".png'>";
			  $("day4").innerHTML = "Day4<br>"+Avg[3]+"&#x2103<br>"+Symbolname[3]+"<img src='http://openweathermap.org/img/w/"+Symbol[3]+".png'>";
			  $("day5").innerHTML = "Day5<br>"+Avg[4]+"&#x2103<br>"+Symbolname[4]+"<img src='http://openweathermap.org/img/w/"+Symbol[4]+".png'>";
			  var d = Date(Date.now().toString());
			 
			  console.log(d);
			return "<h2>"+name+","+country+"</h2>" + "<h2>"+d.substring(0,3)+","+d.substring(16,21)+"</h2>";
}


window.onload = function(){
	$("find").onclick = grabFile;
};
