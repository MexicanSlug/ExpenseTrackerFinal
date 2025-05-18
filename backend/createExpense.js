
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: 'Expenses',
        Item: {
            userId: 'temp-user', // mock
            expenseId: Date.now().toString(),
            ...data
        }
    };

    try {
        await db.put(params).promise();
        return { statusCode: 200, body: JSON.stringify({ message: 'Expense created' }) };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Error saving expense' }) };
    }
};
