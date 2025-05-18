
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: 'Expenses',
        Key: { userId: 'temp-user', expenseId: data.expenseId },
        UpdateExpression: 'set #d = :d, amount = :a, category = :c, description = :desc',
        ExpressionAttributeNames: { '#d': 'date' },
        ExpressionAttributeValues: {
            ':d': data.date, ':a': data.amount,
            ':c': data.category, ':desc': data.description
        }
    };

    try {
        await db.update(params).promise();
        return { statusCode: 200, body: JSON.stringify({ message: 'Updated' }) };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Update error' }) };
    }
};
