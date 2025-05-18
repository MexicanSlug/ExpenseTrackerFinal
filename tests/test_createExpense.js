
// basic test, just checks structure
const res = require('./createExpense');
res.handler({ body: JSON.stringify({ date: "2024-01-01", amount: 50, category: "Food", description: "Lunch" }) })
    .then(r => console.log("Test result:", r))
    .catch(err => console.error("Error:", err));
