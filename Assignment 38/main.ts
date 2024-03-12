//Task 38
//Cities: Write a function called describe_city() that accepts the name of a city 
//and its country. The function should print a simple sentence, such as Karachi is in Pakistan. 
//Give the parameter for the country a default value. Call your function for three different 
//cities, at least one of which is not in the default country.

//Writing a function called describe city
function describe_city(city: string, country: string = 'Pakistan'): void{
    console.log(`${city} is in ${country}`)
}

describe_city('Karachi') //default sentence
describe_city('France','Europe')
describe_city('lahore', 'is in punjab')