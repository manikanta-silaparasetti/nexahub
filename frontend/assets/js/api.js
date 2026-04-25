// API communication utilities

const api = {
    async request(endpoint, options = {}) {
        return Promise.resolve({
            success: true,
            endpoint,
            method: options.method || 'GET',
            data: options.body ? JSON.parse(options.body) : null,
            frontendOnly: true
        });
    },
    
    get(endpoint) {
        return this.request(endpoint, {
            method: 'GET'
        });
    },
    
    post(endpoint, body) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    },
    
    put(endpoint, body) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(body)
        });
    },
    
    delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
};
