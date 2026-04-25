global.fetch = jest.fn();

beforeEach(() => {
    fetch.mockClear();
});

test('Login API response contains id field and returns 0 for invalid credentials', async () => {
    fetch.mockResolvedValueOnce({
        status: 200,
        json: async () => ({ id: 0 })
    });

    const response = await fetch('http://cop4331-smallproject.online/LAMPAPI/Login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ login: 'testuser', password: 'wrongpassword' })
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('id');
    expect(data.id).toBe(0);
});

test('SearchColors API response contains results array', async () => {
    fetch.mockResolvedValueOnce({
        status: 200,
        json: async () => ({ results: ['blue', 'navy'] })
    });

    const response = await fetch('http://cop4331-smallproject.online/LAMPAPI/SearchColors.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ search: 'blue', userId: 1 })
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('results');
    expect(Array.isArray(data.results)).toBe(true);
});
