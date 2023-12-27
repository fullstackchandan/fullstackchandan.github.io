
// read no of times char repeated in a string stored in an object

// passing whole program code as string literal using tilde " `` "
const str1 = `for(let ch of str1){
	if(obj1[ch]){
  	obj1[ch] += 1;
  } else {
  	obj1[ch] = 1;
  }
}
console.log(obj1) `;

// read no of times char repeated
const obj1 = {};

for (let ch of str1) {
  if (obj1[ch]) {
    obj1[ch] += 1;
  } else {
    obj1[ch] = 1;
  }
}
console.log(obj1)
