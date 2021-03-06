let expect = require('expect');
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');

let Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });
  describe('handleStatusChange', () => {
    it('should start timer on started status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);
      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('started');
        done();
      }, 1001);
    });
    it('should pause timer on paused status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count:10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');
      setTimeout(() => {
        expect(timer.state.count).toBe(10);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });
    it('should clear timer on stopped status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
