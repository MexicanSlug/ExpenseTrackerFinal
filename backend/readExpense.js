
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
    const params = {
        TableName: 'Expenses',
        KeyConditionExpression: 'userId = :uid',
        ExpressionAttributeValues: {
            ':uid': 'temp-user' // mock user
        }
    };

    try {
        const data = await db.query(params).promise();
        return { statusCode: 200, body: JSON.stringify(data.Items) };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Read failed' }) };
    }
};
