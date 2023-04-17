const arr =[[1,2],[3,4],[5,6]];
const flatten = function()
{
    return this .reduce((acc,val) => 
    {
        return acc.concat(val);
    }, []);

};

Array.prototype.flatten = flatten;

console.log(arr.flatten());