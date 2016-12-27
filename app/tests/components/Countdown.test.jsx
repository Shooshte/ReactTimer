let expect = require('expect');
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });
  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });
    it('should not set count to negative number', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});
