//async await
const preHeatOven = () => {
    return new Promise ( (resolve,reject) => {
        setTimeout( () => {
          const preHeatOven = true;
          if (preHeatOven){
            resolve('Oven is heated to 180 degrees!')
          }
          else{
            reject('Failed to heat oven!')
          }
        },1000)
    })
}

const addSugarandChocoChips = () => {
    return new Promise ( (resolve,reject) => {
        setTimeout( () => {
          const addChoco = true;
          if (addChoco){
            resolve('Place butter and chocolate chips until melted and smoothen!')
          }
          else{
            reject('Failed in butter & choco placement')
          }
        },1000)
    })
}

const addFlourCocoandSalt = () => {
    return new Promise ( (resolve,reject) => {
        setTimeout( () => {
          const addFlourCocoandSalt = true;
          if (addFlourCocoandSalt){
            resolve('Add Flour,Coco and Salt')
          }
          else{
            reject('Failed to add Flour,Coco and Salt')
          }
        },1000)
    })
}

const bakeMixture = () => {
    return new Promise ( (resolve,reject) => {
        setTimeout( () => {
          const bakeMixture = true;
          if (bakeMixture){
            resolve('Bake mixture for 20-25 minutes!')
          }
          else{
            reject('Failed bake mixture')
          }
        },1000)
    })
}

const serveCookies = () => {
    return new Promise ( (resolve , reject) => {
        setTimeout ( () => {
            const serveCookies = true;
            if (serveCookies){
              resolve('Serve the cookies & Enjoyyy!!')
            }
            else{
                reject('Failed to serve the cookies!')
            }
        },2000)
    })
}

const bakeChocolateChipCookies = async () => {
   try{
    const task1 = await preHeatOven();
   console.log(task1);
   
   const task2 = await addSugarandChocoChips();
   console.log(task2);

   const task3 = await addFlourCocoandSalt();
   console.log(task3)
   
   const task4 = await bakeMixture();
   console.log(task4)
   
   const task5 = await serveCookies();
   console.log(task5);

   setTimeout( () => {
    console.log("Enjoy your perfect Chocolate Brownies")
   },4000)
   
   }
   catch(error) {
     console.log('Error: ',error)
   }
}

bakeChocolateChipCookies();