exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    
    let timeout = (t) => {
        return new Promise(resolve => setTimeout(resolve, t));
    }
    
    await timeout(3000);
    return "Hello World";
};