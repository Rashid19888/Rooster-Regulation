const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
    describe('.announceDawn', () => {
       it('returns a rooster call', () => {


         // Setup
          const expected = 'cock-a-doodle-doo!';

         //Exercise
         const actual = Rooster.announceDawn();

         // Verify
         assert.equal(actual, expected);

       });
    });
     describe('.timeAtSawn', () => {
       it('returns its argument as a string', () => {

            // Setup 
            const inputNumber = 12;
            const expected = '12';
                 
             // Exercise

            const actual =
            Rooster.timeAtDawn(inputNumber);
            
           // Verify
           assert.equal(actual, expected);
          
       });
         it('throws a arange error if passed a number more than 23', () => {
              
               // Setup 
            const inputNumber = 24;
            const expected = RangeError;

            //Verify
            assert.throws(() => {
              Rooster.timeAtDawn(inputNumber); 
       // Exercise
            }, expected);
            });
                 
         });
});




