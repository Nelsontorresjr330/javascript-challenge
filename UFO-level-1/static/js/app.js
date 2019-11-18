// from data.js
var tableData = data;

// YOUR CODE HERE!

//Selects the button
var button = d3.select("#filter-btn");

//Upon buttone click, do this
button.on('click', function(){

    //Get the input value
    var input = d3.select(".form-control");
    var input = input.property("value");

    //Get the table location and reset it
    var table = d3.select(".test");
    table.html("");

    //Loop through all the data, if the dates match the input, insert the data and console log it's occurance
    for (var i = 0; i < tableData.length; ++i){
        if(tableData[i].datetime==input){
            table.append("tr");
            table.append("td").text(tableData[i].datetime);
            table.append("td").text(tableData[i].city);
            table.append("td").text(tableData[i].state);
            table.append("td").text(tableData[i].country);
            table.append("td").text(tableData[i].shape);
            table.append("td").text(tableData[i].durationMinutes);
            table.append("td").text(tableData[i].comments);
            console.log("We in there (test)")
        }
    }
});
