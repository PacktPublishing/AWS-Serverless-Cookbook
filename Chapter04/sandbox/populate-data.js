const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.batchWrite({
    RequestItems: {
        'td_notes_test': [
            {
                PutRequest: {
                    Item: {
                        user_id: 'A',
                        timestamp: 1,
                        title: 'Title A1',
                        content: 'Content A1',
                        cat: 'general',
                        note_id: 'n1',
                        user_name: 'User A'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'A',
                        timestamp: 4,
                        title: 'Title A4',
                        content: 'Content A4',
                        cat: 'test',
                        note_id: 'n4',
                        user_name: 'User A'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'A',
                        timestamp: 7,
                        title: 'Title A7',
                        content: 'Content A7',
                        cat: 'todo',
                        note_id: 'n7',
                        user_name: 'User A'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'A',
                        timestamp: 10,
                        title: 'Title A10',
                        content: 'Content A10',
                        cat: 'aws',
                        note_id: 'n10',
                        user_name: 'User A'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'B',
                        timestamp: 2,
                        title: 'Title B2',
                        content: 'Content B2',
                        cat: 'general',
                        note_id: 'n2',
                        user_name: 'User B'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'B',
                        timestamp: 8,
                        title: 'Title B8',
                        content: 'Content B8',
                        cat: 'todo',
                        note_id: 'n8',
                        user_name: 'User B'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'C',
                        timestamp: 6,
                        title: 'Title C6',
                        content: 'Content C6',
                        cat: 'test',
                        note_id: 'n6',
                        user_name: 'User C'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'C',
                        timestamp: 9,
                        title: 'Title C9',
                        content: 'Content C9',
                        cat: 'general',
                        note_id: 'n9',
                        user_name: 'User C'
                    }
                }
            },
        ]
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
