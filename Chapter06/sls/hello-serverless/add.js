'use strict';

module.exports.add = async (event, context) => {
    let {num1, num2} = JSON.parse(event.body);
    let output = {
        num1: num1,
        num2: num2,
        result: num1 + num2
    };
    console.log(output);
    return {
        statusCode: 200,
        body: JSON.stringify(output)
    };
};
