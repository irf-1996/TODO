// Define variables for DOM elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Event listener for login form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simulate a login request with a delay using a Promise
    simulateLogin(username, password)
        .then(() => {
            // Redirect to the ToDo page
            window.location.href = 'todo.html';
        })
        .catch(error => {
            alert('Invalid login credentials. Please try again.');
            console.error('Login error:', error);
        });
});


function simulateLogin(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'admin' && password === '12345') {
                resolve();
                alert("Successfully logged in!!!!");
            } else {
                reject('Invalid login credentials');
            }
        }, 1000); //1-second delay
    });
}
