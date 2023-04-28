function test_prime(num) 
{
    if (num <= 1) 
    {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
      if (num % i === 0)
      {
        return false;
      }
    }
    return true;
  }
  console.log(test_prime(17));
  console.log(test_prime(25));
  console.log(test_prime(29));