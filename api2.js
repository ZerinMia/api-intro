function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}
function displayUsers(data) {
    const ul = document.getElementById('users2');
    //loop na nile kono user k dekta parbo na
    for (const user of data) {
        console.log(user)
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}
            UserName: ${user.username}
            Email: ${user.email}
        `;
        ul.appendChild(li);
    }
}