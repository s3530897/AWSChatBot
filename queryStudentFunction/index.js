var AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var scourse=event.currentIntent.slots.Scourse;
    var params = {
    TableName : "StudentTest",
    FilterExpression: "#yr = :scourse",
    ExpressionAttributeNames:{
        "#yr": "Scourse"
    },
    ExpressionAttributeValues: {
        ":scourse": scourse
    }
};
    
    docClient.scan(params, function(err, data) {
    if (err) console.log(err);
    else {
   //console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
   var names="";
   data.Items.forEach(function(item){
       names+=item.Sno+"_"+item.Sname+" ";
   });
    callback(null, {
        "dialogAction":{
            "type":"Close",
            "fulfillmentState":"Fulfilled",
            "message":{
                "contentType":"PlainText",
                "content":"Here the list who is studying "+scourse+" : "+names
            }
        }
    });
  }
}); 
}