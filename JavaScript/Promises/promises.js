const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I'm inside setTimeout");
    }, 1000)
    resolve()
})
newPromise.then(() => {
    console.log("Promise is resolved");
})