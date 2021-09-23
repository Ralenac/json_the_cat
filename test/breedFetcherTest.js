// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error when an invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('Unknown', (err, desc) => {
     // first we want to compare error in this case we have error since our breed is not found
      assert.equal(err,`Unknown is not found`);

      // second, since we don't have description for breed it should be equal to null
      assert.equal(desc, null)

      done()
    
    })})

});