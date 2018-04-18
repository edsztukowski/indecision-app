var nameVar = "Edward";

console.log('nameVar', nameVar);

let nameLet = 'Ed';
console.log('NameLet', nameLet);


const nameConst = 'Edwardbobedward';

console.log('NameConst', nameConst);

function getPetName() {
  var petName = 'Oscar';

  return petName;
}

getPetName();


const fullName = 'Ed Sztukowski';

if (fullName) {
  const firstName = fullName.split(' ')[0];
  console.log('FirstName', firstName)
}

console.log(firstName)
