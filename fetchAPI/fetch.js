//Fetch API
fetch('https://dummyjson.com/products/1')
.then( (response) => response.json())
.then( data => console.log(data))
.catch( (error) => console.log(error))

//POST request
fetch('https://dummyjson.com/products/add' , {
   
    method : 'POST',
    headers : {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify({
        description :'Iphone17',
        price :'1000',
        rating : '9/10'
    }) 
})
.then( (response) => response.json())
.then( data => console.log(data))
.catch( (error) => console.log(error))

//PUT Request
fetch('https://dummyjson.com/products/1' , {
   
    method : 'PUT',
    headers : {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify({
        title :'Iphone 17',
        describtion :'Iphone17 is a brand new Phone',
        price :'1000',
        rating : '9/10'
    }) 
})
.then( (response) => response.json())
.then( data => console.log(data))
.catch( (error) => console.log(error))

//DELETE Request
fetch('https://dummyjson.com/products/1' , {
   
    method : 'DELETE',
})
.then( (response) => response.json())
.then( data => console.log(data))
.catch( (error) => console.log(error))