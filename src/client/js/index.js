class Test {
  constructor() {
    this.a = 'hello ES6';
  }
}

let test = new Test();

document.body.innerHTML = test.a;