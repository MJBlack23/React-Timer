const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
  getInitialState: function () {
    return {
      timer: 0,
      timerStatus: 'stopped'
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();

          break;
        case 'stopped':
          this.setState({
            timer: 0,
          });

        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    this.handleStatusChange('stopped');
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      let newCount = this.state.timer + 1;
      this.setState({
        timer: newCount
      });

    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      timerStatus: newStatus
    })
  },
  render: function () {
    let { timer, timerStatus } = this.state;
    return (
      <div>
        <h3 className='page-title'>Timer App</h3>
        <Clock totalSeconds={ timer } />
        <Controls countdownStatus={ timerStatus } onStatusChange={ this.handleStatusChange } />
      </div>
    )
  }
});

module.exports = Timer;
