import './chai-log';
import ChaiStatic = Chai.ChaiStatic;
import ChaiUtils = Chai.ChaiUtils;
import logCapture, { LOG_LEVELS, LogLevel } from '../log-capture';

/**
 * @see https://www.chaijs.com/api/plugins/
 * @param chai
 * @param utils
 */
export default function chaiLog(chai: ChaiStatic, utils: ChaiUtils) {
  const Assertion = chai.Assertion;

  const chainConsole = function (this: Chai.Assertion) {
    // You could use use https://www.chaijs.com/api/plugins/#method_flag to allow subsequent assert/chain
    // methods to ensure that they are being called after `.console`

    // `utils.flag(this, 'object')` returns the expectation: `expect(myObject)`
  };

  /**
   * This function is called _if_ the chainedMethod is used as a function.
   * @param args value/s expected by the unit test
   */
  const assertLogs = function (this: Chai.Assertion, args: any) {
    // const actual = utils.flag(this, 'object');
    // or
    // const actual = logCapture.foo();

    // new Assertion(actual).to. ?
  }

  // This function can be used to create a function. Parameters passed to this function are included in the closure
  const chainLogs = () =>
    // This function can set the `object` which is assertable: `expect(x).that.console.info.includes('Hello World!')`
    function (this: Chai.Assertion) {
      // utils.flag(this, 'object', ?);
    };

  utils.addProperty(Assertion.prototype, 'console', chainConsole);
  utils.addChainableMethod(Assertion.prototype, 'info', assertLogs, chainLogs());
}
