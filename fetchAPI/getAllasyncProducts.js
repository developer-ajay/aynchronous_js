//asyn/await API

const getAllProducts = async () => {

    try{
        const response = await fetch('https://dummyjson.com/products/')
        const products = await response.json();
        console.log(products);    
    }catch (error){
       console.log(error);  
    }
}

getAllProducts();