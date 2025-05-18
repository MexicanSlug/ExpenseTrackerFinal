
# Expense Tracker (Serverless)

## Quick Setup

- Frontend is in HTML/JS, call API endpoints from the form.
- Backend deployed with Serverless Framework.
- Data stored in DynamoDB under Expenses table.
- Cognito used for authentication (see infra setup).

## Deploy

```bash
npm install -g serverless
cd backend
serverless deploy
```
