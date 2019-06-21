const readline = require('readline');
rl = readline.createInterface({input: process.stdin, output: process.stdout});

 calculator = (value1, value2) => {
    let result = value1/value2;
    return result;
}
rl.on('line', () => {
    // let value1, value2;
    // return calculator(value1, value2);
    if(value1 && value2 !== NaN ){
        
    }
    rl.close();
})
rl.on('close', () => {
    console.log(calculator(x, y));
})