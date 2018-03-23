exports.handler = (event, context, callback) => {
    var now = new Date();
    var mm = now.getMonth() + 1;
    var dd = now.getDate(); 
    var hh = now.getHours() + 11;
    var minu = now.getMinutes(); 
    // TODO implement
    callback(null, {
        "dialogAction":{
            "type":"Close",
            "fulfillmentState":"Fulfilled",
            "message":{
                "contentType":"PlainText",
                "content":"Time is "+mm+"/"+dd+" "+hh+":"+minu
            }
        }
    });
};