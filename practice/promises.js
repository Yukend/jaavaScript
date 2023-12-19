var promise = new Promise(function(resolve, reject) {

    var love = true;

    if (love) {
        resolve("yes");
    }
    else{
        reject("no");
    }
});

promise.then(function(resolve) {
    console.log(resolve);
}).catch(function(reject){
    console.log(reject);
})


var funcs = function() {

    return new Promise(function(resolve, reject){
        resolve("Hey i am here");
    });

};

var callback = function(msg) {

    return new Promise(function(resolve, reject){
        resolve("Hey i am here" + msg);
    });
    
};

var promises = function(msg) {

    return new Promise(function(resolve, reject){
        resolve("Hey i am here" + msg);
    });
    
};

funcs().then(function(result){
    console.log(result);
    return callback(result);
}).then(function(result){
    console.log(result);
    return promises(result);
}).then(function(result){
    console.log("dsdss" + result);
});