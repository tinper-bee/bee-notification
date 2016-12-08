import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
    duration: PropTypes.number,
    onClose: PropTypes.func,
    children: PropTypes.any,
};

const defaultProps = {
    onEnd() {
    },
    onClose() {
    },
    duration: 1.5,
    style: {
      right: '50%',
    },
    clsPrefix: ""
}

class Notice extends React.Component {
    constructor(props) {
        super(props);
        this.clearCloseTimer = this.clearCloseTimer.bind(this);
        this.close = this.close.bind(this);
    }

  componentDidMount() {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration * 1000);
    }
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  close() {
    this.clearCloseTimer();
    this.props.onClose();
  }

  render() {
    const props = this.props;
    const componentClass = `${props.clsPrefix}-notice`;
    const className = {
      [`${componentClass}`]: 1,
      [`${componentClass}-closable`]: props.closable,
      [props.className]: !!props.className,
    };
    return (
      <div className={classNames(className)} style={props.style}>
        <div className={`${componentClass}-content`}>{props.children}</div>
        {props.closable ?
          <a tabIndex="0" onClick={this.close} className={`${componentClass}-close`}>
            <span className={`${componentClass}-close-x`}></span>
          </a> : null
        }
      </div>
    );
  },
};

export default Notice;
