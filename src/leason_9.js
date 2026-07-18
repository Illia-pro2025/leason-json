const settings = {
    user:'blabla',
    email:'blabla@example.com'
}
localStorage.setItem('userData', JSON.stringify(settings));

// localStorage.removeItem('userData');

const userData = JSON.parse(localStorage.getItem('userData'));
console.log(userData);

localStorage.clear();