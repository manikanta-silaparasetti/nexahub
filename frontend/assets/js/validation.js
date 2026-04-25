// Form validation utilities

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateRequired(value) {
    return value !== null && value !== undefined && value.trim() !== '';
}

function validateForm(formData, rules) {
    const errors = {};
    
    for (const [field, value] of Object.entries(formData)) {
        if (rules[field]) {
            const fieldRules = rules[field];
            
            if (fieldRules.required && !validateRequired(value)) {
                errors[field] = `${field} is required`;
            }
            
            if (fieldRules.email && value && !validateEmail(value)) {
                errors[field] = 'Invalid email format';
            }
            
            if (fieldRules.phone && value && !validatePhone(value)) {
                errors[field] = 'Invalid phone number';
            }
            
            if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
                errors[field] = `Must be at least ${fieldRules.minLength} characters`;
            }
        }
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = 'var(--error)';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    
    // Remove existing error
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    field.style.borderColor = 'var(--error)';
    field.parentElement.appendChild(errorDiv);
}

function clearFieldErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.remove());
    document.querySelectorAll('.form-control').forEach(el => {
        el.style.borderColor = 'var(--border-color)';
    });
}
