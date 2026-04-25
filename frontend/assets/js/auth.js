// Authentication utilities

function login(email, password) {
    const mockResponse = {
        success: true,
        token: 'frontend-only-token',
        user: {
            id: 1,
            email,
            role: 'student',
            full_name: 'Frontend User'
        }
    };

    localStorage.setItem('token', mockResponse.token);
    localStorage.setItem('user', JSON.stringify(mockResponse.user));
    return Promise.resolve(mockResponse);
}

function register(userData) {
    return Promise.resolve({
        success: true,
        message: 'Frontend-only register simulation',
        user: userData
    });
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login.html';
}

function getToken() {
    return localStorage.getItem('token');
}

function getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

function isAuthenticated() {
    return !!getToken();
}
