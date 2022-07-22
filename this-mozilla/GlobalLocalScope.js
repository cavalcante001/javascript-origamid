"use strict";
// global scope

this.name = "Diego";

function sayName() {
  // local scope
  console.log(this.name); //undefined
}

const user = {
  name: "Diego",
  sayMyName: function () {
    console.log(this.name);
    console.log(this);
  },
};

user.sayMyName();
