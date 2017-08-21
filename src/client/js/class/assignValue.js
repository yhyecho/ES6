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