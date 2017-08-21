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