function task1(callback){
    setTimeout( ()=> {
        console.log("1.preheat the oven to 180^C.");
        callback();
    },2000);
}

function task2(callback){
    setTimeout( ()=> {
        console.log("2.Chop half the chocolate into small pieces and melt in microwave.");
        callback();
    },2500);    
}

function task3(callback){
setTimeout( ()=> {
    console.log("3.Mix butter and sugar.");
    callback();
},1500);
}

function task4(callback){
setTimeout( ()=> {
    console.log("4.Beat in eggs and vanilla for 1-2 mins.");
    callback();
},2000);
}

function task5(callback){
setTimeout( ()=> {
    console.log("5.Whisk in the melted chocolate.");
    callback();
},1500);
}


function task6(callback){
setTimeout( ()=> {
    console.log("6.Fold in other half of the chocolate chunks, then transfer the batter to baking dish.");
    callback();
},1500);
}

function task7(callback){
setTimeout( ()=> {
    console.log("7.Bake for 20-25 mins, then let cool completely.");
    callback();
},3500);
}

function task8(){
setTimeout( ()=> {
    console.log("8.Cut into squares and serve.");
},500);
}


task1( () => {
    task2( () => {
        task3( () => {
            task4( () => {
                task5( () => {
                      task6( () => {
                        task7( () => {
                            task8();
                        })
                      })
                })
            })
        });
    });
});
