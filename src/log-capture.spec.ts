import { should as _should } from 'chai';
import logCapture from './log-capture';

_should();

describe('log-capture', () => {
  describe('started', () => {
    // Given
    // before(() => {});
    // afterEach(() => {});
    // after(() => {});

    it('gets info logs', () => {
      // When
      console.debug('debug');
      console.info('Hello World!');
      // Then
      logCapture.get('info').should.deep.equal(['Hello World!']);
      logCapture.get('error').should.be.empty;
    });
  });
});
