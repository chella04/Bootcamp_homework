function celsiusToFahrenheit (celsius)
{
const celsiusInF =(celsius*9)/5+32;
console.log(celsius +'°C is  '+ celsiusInF +'°F');
}

celsiusToFahrenheit (25);

function FahrenheitToCelsius (fahrenheit)
{
const FahrenheitInC =(fahrenheit-32)*5/9;
console.log(fahrenheit +'°F is  '+ FahrenheitInC +'°C');
}
FahrenheitToCelsius (80);