var AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var Sno=event.currentIntent.slots.Sno;
    //var Sno=14970;
    var params = {
    TableName: 'StudentTest',
    Key: {
    "Sno":""+Sno
    },
};
    
    docClient.delete(params, function(err, data) {
    if (err) console.log(err);
    else {
    //    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
      callback(null, {
        "dialogAction":{
            "type":"Close",
            "fulfillmentState":"Fulfilled",
            "message":{
                "contentType":"PlainText",
                "content":"The Student "+Sno+" has been deleted "
            }
        }
    });
  }
}); 
}