// const add = (a, b) => {
//   console.log(arguments)
//   return a + b;
// }
//
// console.log(add(1, 2));

//
// const user = {
//   name: 'Edward',
//   cities: ['Boulder', 'Chapel Hill', "Boone"],
//   printPlacesLived() {
//     return this.cities.map((city) => this.name + ' has lived in ' + city);
//   }
// }
//
// console.log(user.printPlacesLived());

const multiplier = {
  nums : [1, 2, 3],
  multiplyBy : 3,
  multiply() {
    return this.nums.map((currNum) => currNum * this.multiplyBy);
  }
}


console.log(multiplier.multiply());
