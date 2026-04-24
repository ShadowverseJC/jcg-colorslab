const API_BASE = 'http://cop4331-smallproject.online/LAMPAPI';

test('Login API returns JSON with id field for invalid credentials', async () => {
    const response = await fetch(`${API_BASE}/Login.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ login: 'testuser', password: 'wrongpassword' })
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('id');
    expect(data.id).toBe(0);
});

test('SearchColors API returns JSON with results field', async () => {
    const response = await fetch(`${API_BASE}/SearchColors.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ search: 'blue', userId: 0 })
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('results');
    expect(Array.isArray(data.results)).toBe(true);
});
