const user = new Object();
user.name = "Shrinivas";
user.age = 23;
user.city = "Pune";

const user2 = {
  address: {
    currentAddress: {
      city: "Pune",
      state: "Maharashtra",
    },
  },
};

console.log(user);

//Combining 2 Objects
const obj1 = {
  0: "a",
  1: "b",
};
const obj2 = {
  0: "c",
  4: "d",
};
//2 Ways of Combining Objects
const obj3 = Object.assign({}, obj1, obj2);
const obj4 = { ...obj1, ...obj2 };
//Note: If 2 Objects have same key then the value of the key in combined Object will be the value
//of the second object
console.log(obj3); //{ '0': 'c', '1': 'b', '4': 'd' }
console.log(obj4); //{ '0': 'c', '1': 'b', '4': 'd' }

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("name"));
