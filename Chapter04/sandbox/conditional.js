const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: 'td_notes_sdk',
    Item: {
        user_id: 'ABC',
        timestamp: 1,
        title: 'Initial Title',
        content: 'Initial Content'
    },
    ConditionExpression: '#t <> :t',
    ExpressionAttributeNames: {
        '#t': 'timestamp'
    },
    ExpressionAttributeValues: {
        ':t': 1
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});