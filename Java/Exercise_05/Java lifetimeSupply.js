
   function calculateSupply(age,numPerDay)
{  
    var maxAge=100;
    var totalNeeded=((numPerDay*365)*(maxAge-age));
    var message=("you will need "+ totalNeeded +"cups of coffee to last you until the ripe oldage of "+ maxAge);
    console.log(message);
}       


calculateSupply(30,2);
calculateSupply(40,3);
calculateSupply(45,1);