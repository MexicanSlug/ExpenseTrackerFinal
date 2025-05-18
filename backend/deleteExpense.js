
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: 'Expenses',
        Key: { userId: 'temp-user', expenseId: data.expenseId }
    };

    try {
        await db.delete(params).promise();
        return { statusCode: 200, body: JSON.stringify({ message: 'Deleted' }) };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Delete error' }) };
    }
};
