let expect = require('expect');
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });
  describe('handleStatusChange', () => {
    it('should start timer on started status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('started');
        done();
      }, 1001);
    });
    it('should pause timer on paused status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() => {
        timer.handleStatusChange('paused');
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });
    it('should clear timer on stopped status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() => {
        timer.handleStatusChange('stopped');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 3001);
    });
  });
});
