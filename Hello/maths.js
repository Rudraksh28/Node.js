function add(a, b)
{
    return a + b;
}   

function sub(a , b)
{
    return a - b;
}

module.exports = {add, sub};


// or

module.exports = 
{
    addFun: add,
    subFun: sub,
};