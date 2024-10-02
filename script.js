// List of valid usernames and passwords
const credentials = {
    'Auld_D3n': 'PssAdmin01',
    'febdem123': 'PssAdmin02',
    'aiden_ju': 'PssAdmin03'
};

// Fallback password
const fallbackPassword = 'Pssmyanmar';

// Form event listener
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Reset error message
    errorMessage.textContent = '';
    
    // Check if the username exists in the credentials
    if (credentials.hasOwnProperty(username)) {
        // Check if the password is correct or fallback password is used
        if (credentials[username] === password || password === fallbackPassword) {
            // Successful login
            window.location.href = 'invoiceGenerator.html'; // Redirect to the invoice generator page
        } else {
            // Invalid password
            errorMessage.textContent = 'Incorrect password!';
        }
    } else {
        // Invalid username
        errorMessage.textContent = 'Username not found!';
    }
});
