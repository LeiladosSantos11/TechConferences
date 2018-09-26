/*document.getElementById("text").innerHTML

var myCityarray = ["London", "Paris", "Berlin"];



var myCityarray = setInterval(myFunction, 300);

function myFunction () {

} 



var arr = ["London", "Paris", "Berlin"];
function newFunction() {
    document.getElementById("go").scroll = function myFunction() {
       
        for (var i = 0; i < arr.length; i++) {
            setInterval(arr[i], (5000));
        }
    };  
}
*/

var citiesStrings = "";
var manyCities = 
["VUE DAY - LONDON (UK)", 
"JAVASCRIPT EUROPE CONFERENCE - BERLIN (GR)", 
"WEB SUMIT - LISBON (PT)",
"GITHUB - SAN FRANCISCO (USA)"];

function setCity() {
     for (var i = 0; i < manyCities.length; i++) {
         citiesStrings = manyCities + "<p>" + manyCities[i] + "</p>";
     }            
}
setInterval (function(){document.getElementById("go").innerHTML = manyCities[0]},(3000));
setInterval (function(){document.getElementById("go").innerHTML = manyCities[1]},(5000));
setInterval (function(){document.getElementById("go").innerHTML = manyCities[2]},(7000));
setInterval (function(){document.getElementById("go").innerHTML = manyCities[3]},(10000));