const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';  //1-е
user.hobby = 'skydiving'; //2-e
user.premium = false; //3-e

const keys = Object.keys(user); //4-e
// console.log(keys); 


for (const key of keys) { //4-e 2
  console.log(key, ':', user[key]);
}


