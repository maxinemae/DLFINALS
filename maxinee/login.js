const validUsername = "digitallogic";
        const validPassword = "pasarmi";
    
        function login() {
            var usernameInput = document.getElementById("loginUsername").value;
            var passwordInput = document.getElementById("loginPassword").value;
    
            if (usernameInput === validUsername && passwordInput === validPassword) {
                alert('Login successful!');
                // Redirect to index.html on successful login
                window.location.href = "index.html";
            } else {
                alert('Invalid username or password. Please try again.');
            }
        }
    
        function register() {
            // Implement registration logic here (if needed)
            alert('Register button clicked.');
        }
    
        function toggleForm() {
            var loginForm = document.getElementById("loginForm");
            var registerForm = document.getElementById("registerForm");
    
            loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
            registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
        }