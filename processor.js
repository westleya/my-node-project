// processor.js

function processData(jsonData){
    // Example processing logic
    console.log("Processing data:", jsonData);

    
    var spawn = require('child_process').spawn,
    py    = spawn('python', ['compute_input.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';

    py.stdout.on('data', function(data){
        dataString += data.toString();
    });
    py.stdout.on('end', function(){
        console.log('Sum of numbers=',dataString);
    });
    py.stdin.write(JSON.stringify(data));
    py.stdin.end();

    // Add your processing logic here
    if (jsonData.message){
        return {success: true, processedMessage: jsonData.message.toUpperCase()};
    } else {
        return {success: false, error: "No message provided"};
    }
}

module.exports = processData;