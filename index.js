// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  const returnFirstTwoDrivers = function (arr){
    return arr.slice(0,2);
  }
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function (arr){

  return arr.slice(drivers.length -2)

}
console.log(returnLastTwoDrivers(drivers));

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 console.log(returnFirstTwoDrivers(drivers)[0])
 console.log(returnLastTwoDrivers(drivers)[1])

 function createFareMultiplier(inti){
  return  function (fare){

         return fare * inti;
  }
 }

 console.log(createFareMultiplier(5)(5))

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(5))

const fareTripler = createFareMultiplier(3)
console.log(fareTripler(5))

function selectDifferentDrivers (drivers,cb){
  return cb(drivers);
}
console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers))
console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers));
