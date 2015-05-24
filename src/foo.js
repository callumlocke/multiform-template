export default class Foo {
  someProperty = 123;
  static anotherProperty = 456;

  async doSomething () {
    await Promise.delay(1000);
    return 1;
  }

  *someGenerator(foo) {
    yield foo;
  }
}
