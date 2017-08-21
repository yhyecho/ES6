## ES6语法
#### 1. let和const
* 作用域的概念
  * 全局作用域
  * 函数作用域
  * 块作用域 (let, const)
* 如何使用let和const
  * let
  ```js
  function test() {
    // let 定义的变量只存在于{}块作用域中
    for(let i = 1; i < 3; i++) {
      console.log(i);
    }
    // es6中强制使用了严格模式，变量未声明不能够引用
    // Uncaught ReferenceError: i is not defined
    console.log(i);
  }

  function test2() {
    let a = 1; 
    // 使用let声明变量，不能重复声明
    let a = 2;
  }
  test();
  test2();
  ```
  * const
  ```js
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
  ```
#### 2. 解构赋值
* 什么是解构赋值
  通俗的解释:＝左边一种结构，右边一种结构，进行赋值。
* 解构赋值的分类
  * 数组解构赋值
  * 对象解构赋值
  * 字符串解构赋值
  * 布尔值解构赋值
  * 函数参数解构赋值
  * 数值解构赋值
* 代码演示
```js
{
  let a,b;
  // 数组类型解构赋值
  [a,b] = [1,2];
  // 之前写法
  // let a = 1; let b = 2;
  console.log(a,b);
}

{
  let a,b,rest;
  // ...rest
  [a,b,...rest] = [1,2,3,4,5,6];
  console.log(a,b,rest);
}

{
  let a,b;
  // 对象解构赋值
  ({a,b} = {a:1,b:2})
  console.log(a,b);
}

{
  // 解构赋值的默认值
  let a,b,c;
  // 如果c没有默认值，右边又没有对应的值，c为undefine
  [a,b,c=3] = [1,2];
  console.log(a,b,c);
}

{
  // 解构赋值使用场景
  // 变量交换
  let a = 1;
  let b = 2;
  [a,b] = [b,a];
  console.log(a,b);
}

{
  function f() {
    // 返回数量，金额
    return [1,2];
  }
  let a,b;
  [a,b] = f();
  console.log(a,b);
}

{
  function f() {
    return [1,2,3,4,5]
  }
  let a,b,c;
  // 只接收需要的值
  [a,,,b] = f();
  console.log(a,b);
}

{
  function f() {
    return [1,2,3,4,5]
  }
  let a,b,c;
  // 只关心第一个返回值，其它的返回到b数组
  [a,...b] = f();
  console.log(a,b);
}

{
  // 对象解构赋值
  let o = {p:42, q:true};
  let {p, q} = o;
  console.log(p, q);
}

{
  // 对象解构赋值中的默认值
  let {a=10, b=5} = {a:3}
  console.log(a,b);
}

{
  // 对象解构赋值使用场景
  let metaData = {
    title: 'abc',
    test:[{
      title: 'test',
      desc: 'description'
    }]
  }

  let {title: esTitle, test:[{title: cnTitle}]} = metaData;
  console.log(esTitle, cnTitle);
}
```
#### 3. 正则扩展
* 正则新增特性
  * 构造函数的变化
  * 正则方法的扩展
  * u修饰符
  * y修饰符
  * s修饰符
* 代码演示
```js
{
  // es5中正则的使用
  // 第一个参数必须是字符串
  let regex = new RegExp('xyz', 'i');
  let regex2 = new RegExp(/xyz/i);
  console.log(regex.test('xyz123'), regex2.test('xyz123'));
  // es6
  let regex3 = new RegExp(/xyz/ig, 'i');
  // flags获取正则对象的修饰符属性
  console.log(regex3.flags);
}

{
  // y修饰符
  let s = 'bbb_bb_b';
  // 全局匹配 忽略_
  let a1 = /b+/g;
  //_不匹配, 匹配的下一个位置开始
  let a2 = /b+/y;
  console.log('one', a1.exec(s), a2.exec(s));
  // a.exec(s) => null
  console.log('two', a1.exec(s), a2.exec(s));
  // 是否开启y修饰符
  console.log(a1.sticky, a2.sticky);
}

{
  // u 修饰符
  // 当成两个字符
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
  // 当成一个字符
  console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));

  console.log(/\u{61}/.test('a')); // false
  console.log(/\u{61}/u.test('a')); // true

  console.log(`\u{20BB7}`);

  let s = '𠮷';
  console.log('u', /^.$/.test(s)); // false
  // 字符串中大于两个字节长度，需要加u修饰符
  // .并不能够匹配所有字符
  console.log('u-2', /^.$/u.test(s)); // true

  console.log('test', /𠮷{2}/.test('𠮷𠮷'));
  console.log('test-2', /𠮷{2}/u.test('𠮷𠮷'));

  // s修饰符
}
```

