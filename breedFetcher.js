const request = require('request');

const breed = process.argv[2];// it is an array and have 3 elements (first two you don't need)
//console.log(breed)
const url = `http://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => { //it is important to add all three parametars at the begining, because you will get null (without error and response)
  if(error) {
    return console.log('error:', error)
  };
  const data = JSON.parse(body);
  if(data[0]) {
    console.log(data[0].description);// we are using .description because we want valu for description
  } else {
    console.log('Breed is not found');
  }
  console.log(response);
});

