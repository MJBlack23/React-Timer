const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', () => {
    const timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');
    expect(timer.state.timer).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.timer).toBe(1);
    }, 1001);
  });

  it('should pause timer on paused status', () => {
    const timer = TestUtils.renderIntoDocument(<Timer />);

    timer.setState({ timer: 10 });
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.timer).toBe(10);
    }, 1001);
  });

  it('should clear timer on stopped status', () => {
    const timer = TestUtils.renderIntoDocument(<Timer />);

    timer.setState({ timer: 10 });
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('test');
      expect(timer.state.timer).toBe(10);
    }, 1001);
  });
});
