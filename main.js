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

/*
function setCity() {
     for (var i = 0; i < manyCities.length; i++) {
         citiesStrings = manyCities + "<p>" + manyCities[i] + "</p>";
     }            
}
setInterval (function(){document.getElementById("go").innerHTML = manyCities[0]},(5000));
setInterval (function(){document.getElementById("go").innerHTML = manyCities[1]},(10000));
setInterval (function(){document.getElementById("go").innerHTML = manyCities[2]},(15000));
setInterval (function(){document.getElementById("go").innerHTML = manyCities[3]},(20000));
*/



// Function to set city and change at regular intervals - called from index.html when the body loads
function setCity() {
    
    // Counter to keep track of which city in array to display
    var position = 0;

    // setInterval function to keep triggering change
    setInterval(function(){
        
        // Logging to console just so we know somethings happening - not really needed
        console.log('Interval triggered ' + position);
        
        // Move position to next place
        position = position + 1;

        // Check if we've gone past the end of the array - if so, go back to the beginning
        if (position > manyCities.length - 1) {
            position = 0;
        }
        
        // Set the text to what we want
        document.getElementById('go').innerHTML = manyCities[position];

        // Set interval in milliseconds (i.e. 1000 is 1 second)
    }, 5000);
};