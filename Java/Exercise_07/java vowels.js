function vowel_count(str)
{
    return str.replace(/[^aeiou]/g, "").length;
}
console.log(vowel_count("Magnificient"));
console.log(vowel_count("amazing"));