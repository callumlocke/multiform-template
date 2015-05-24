import Foo from '../lib/foo';
import assert from 'assert';

let passed = false;

process.on('exit', () => {
  if (!passed) {
    console.error('test failed :(');
    process.exit(1); // eslint-disable-line
  }

  console.log('test passed :)');
});


(async () => {

  try {
    assert(Foo.anotherProperty === 456, 'static properties work');

    const foo = new Foo();
    assert(foo.someProperty === 123, 'default properties work');


    const result = await foo.doSomething();
    assert(result === 1, 'async functions work');

    const gen = foo.someGenerator();
    assert(gen.next().value === 99, 'generators work');

    passed = true;
  }
  catch (err) {
    // this is necessary in order to see traces from async errors in Node 0.10
    // (because it swallows unhandled rejections)
    console.error(err.stack);
  }

})();
