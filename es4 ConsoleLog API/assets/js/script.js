//Get
axios.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
    console.log(response);
    console.table(response.data);
}).catch(function(error) {
    console.log(error);
})

//Post
axios.post('https://jsonplaceholder.typicode.com/users', {title: 'banana', price: 131, description: 'boh'}).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});


//Put
axios.put('https://jsonplaceholder.typicode.com/users/4', {title: 'Questo e miracle blade'}).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});

//delete
axios.delete('https://jsonplaceholder.typicode.com/users/4', {price: 266}).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
}); 