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
["VUE DAY - LONDON", 
"JAVASCRIPT EUROPE CONFERENCE - BERLIN", 
"WEB SUMIT - LISBON",
"GITHUB - SAN FRANCISCO"];

function setCity() {
     for (var i = 0; i < manyCities.length; i++) {
         citiesStrings = manyCities + "<p>" + manyCities[i] + "</p>";
     }            
}
setTimeout (function(){document.getElementById("go").innerHTML = manyCities},(3000));