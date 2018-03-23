const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var Sno=event.currentIntent.slots.Sno;
    var Sname=event.currentIntent.slots.Sname;
    var Scourse=event.currentIntent.slots.Scourse;
    
    docClient.put({
        TableName: 'StudentTest',
        Item: {
            Sno:""+Sno,
            Sname:Sname,
            Scourse:Scourse
        },
    }).promise();
    callback(null, {
        "dialogAction":{
            "type":"Close",
            "fulfillmentState":"Fulfilled",
            "message":{
                "contentType":"PlainText",
                "content":"You requested "+Sno+":"+Sname+" study "+Scourse
            }
        }
    });
    /*
    // TODO implement
    */
};