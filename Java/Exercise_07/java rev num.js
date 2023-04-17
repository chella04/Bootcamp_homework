 function number()
{
    let result =0;
    let number= 34726;
    result= Number(String(number).split(''). reverse().join(''));
    return ("Reversed number is:  "+result);
}

console.log(number());