// processor.js

function processData(jsonData){
    // Example processing logic
    console.log("Processing data:", jsonData);

    // Add your processing logic here
    if (jsonData.message){
        return {success: true, processedMessage: jsonData.message.toUpperCase()};
    } else {
        return {success: false, error: "No message provided"};
    }
}

module.exports = processData;