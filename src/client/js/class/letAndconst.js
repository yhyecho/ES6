function test() {
  // let 定义的变量只存在于{}块作用域中
  for(let i = 1; i < 3; i++) {
    console.log(i);
  }
  // es6中强制使用了严格模式，变量未声明不能够引用
  // Uncaught ReferenceError: i is not defined
  // console.log(i);
}

function test2() {
  let a = 1; 
  // 使用let声明变量，不能重复声明
  // let a = 2;
}

function last() {
  // 声明常量
  // const 声明的时候必须赋值
  const PI = 3.1415926;
  // 常量声明后不可被修改
  // Module build failed: SyntaxError: "PI" is read-only
  // PI = 8;

  // 对象是引用类型,返回对象存储内存中的指针
  const k = {
    a: 2
  }
  k.b = 3;
  // 可以输出对象中的b属性
  // 指向k对象的指针未发生改变, 对象发生了改变
  console.log(PI, k);
}

test();
test2();
last();