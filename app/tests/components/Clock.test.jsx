const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={ 62 }/>);
      let $el = $(ReactDOM.findDOMNode(clock));
      let actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock />);
      let seconds = 615;
      let expected = '10:15';
      expect(clock.formatSeconds(seconds)).toBe(expected);
    });

    it('should format seconds when min/sec is less than 1', () => {
      let clock = TestUtils.renderIntoDocument(<Clock />);
      let seconds = 61;
      let expected = '01:01';
      expect(clock.formatSeconds(seconds)).toBe(expected);
    });
  });
});
