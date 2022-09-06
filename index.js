// Add your code here
const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector("body").append(data.id)
    })
    .catch(error => {
        document.querySelector("body").append(error)
    })
}