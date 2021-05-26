// Add your code here
function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObj)
            .then(function(response) {
                return response.json()
            })
            .then(function(object) {
                const id = object['id']
                document.body.append(id)
            })
            .catch(function(error) {
                const errorMessage = error.message
                document.body.append(errorMessage)
            })
}