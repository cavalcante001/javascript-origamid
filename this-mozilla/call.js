// // function.call(this, arg1, arg2)
// // call do inglẽs chamar
// // retornar o this do contexto que eu enviar

// this.name = "Camila";

// function sayMyName(age) {
//   this.age = arguments[0];
//   this.likes = arguments[1];
//   this.clouthes = arguments[2];
//   console.log(this.name, this.age, this.clouthes);
// }

// const dev = {
//   name: "Isabela",
// };

// sayMyName.call(this, 18);
// sayMyName.call(dev, 19);

// console.log(this.age);
// console.log(dev.age);

// // function.apply(this, [arg1, arg2])
// // retorna o this do contexto que eu enviar

// sayMyName.apply(this, [18, "banana", "vestido"]);
// console.log(this);

// function multiply() {
//   const args = Array.from(arguments);
//   console.log(args);
//   return args.reduce((acc, item) => {
//     console.log(acc);
//     return acc * item;
//   }, 1);
// }

// const total = multiply.apply(this, [2, 2, 3]);
// console.log(total);

// //bind = ligar
// // retorna a função chamada porém, ligada ao contexto que lhe foi passada
// // bound function

// const boundSayMyName = sayMyName.bind(this);
// // const boundSayMyName = sayMyName.bind(this)(18);
// boundSayMyName(18);

const dev = {
  name: "Isabela",
  age: 35,
  sayMyAge: function () {
    console.log(this.name, this.age);
  },
};

const age = dev.sayMyAge;
age();
