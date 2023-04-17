function tellFortune(jobTitle,geolocation,partner,numKids)
{
  return("You will be a" +jobTitle +"in"+geolocation+"and married to"+partner+"with"+numKids+"kids.");
}
function tellFortune2(jobTitle,geolocation,partner,numKids)
{
  var future="You will be a"+jobTitle+"in"+geolocation+"and married to" +partner+ " with "+numKids+" kids.";
  return(future);
}
console.log(tellFortune(" Teacher "," India "," Meena "," 2 "));
console.log(tellFortune(" Artist "," America "," Rosy "," 3 "));
console.log(tellFortune(" Developer "," Canada "," Marvette "," 1 "));
console.log(tellFortune(" Dancer "," Russia "," Rita "," 4 " ));