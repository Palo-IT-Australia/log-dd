import chai, { expect } from 'chai';
import chaiLog from './index';
import logCapture from '../log-capture';

chai.use(chaiLog);

// Given
// before(() => {});
// afterEach(() => {});
// after(() => {});

describe('chai-log', () => {
  it('asserts info', () => {
    // When
    console.info('Hello World!');
    // Then
    expect(logCapture).to.console.error('Hello World!');
  });
});
