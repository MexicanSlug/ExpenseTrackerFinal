
document.getElementById('expenseForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = {
    date: document.getElementById('date').value,
    amount: document.getElementById('amount').value,
    category: document.getElementById('category').value,
    description: document.getElementById('description').value
  };

  fetch('https://example.com/dev/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(resp => resp.json())
    .then(json => console.log('Expense added:', json))
    .catch(err => console.error('Error:', err));
});
