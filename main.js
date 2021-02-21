

var citiesStrings = "";
var manyCities =
["VUE DAY - LONDON (UK)", 
"JAVASCRIPT EUROPE CONFERENCE - BERLIN (GR)", 
"WEB SUMIT - LISBON (PT)",
"GITHUB - SAN FRANCISCO (USA)"];



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
