import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
//import Animate from 'rc-animate';
import { createChainedFunction } from 'tinper-bee/build/createChainedFunction';
import classnames from 'classnames';
import Notice from './Notice';

let seed = 0;
const now = Date.now();

function getUuid() {
  return `beeNotification_${now}_${seed++}`;
}

var propTypes = {
  clsPrefix: PropTypes.string,
  transitionName: PropTypes.string,
  animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
};

var defaultProps = {
    clsPrefix: 'u-notification',
    animation: 'fade',
    style: {
      top: 65,
      left: '50%',
    }
}

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
             notices: []
        }
    }


  getTransitionName() {
    const props = this.props;
    let transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${props.prefixCls}-${props.animation}`;
    }
    return transitionName;
  }

  add(notice) {
    const key = notice.key = notice.key || getUuid();
    this.setState(previousState => {
      const notices = previousState.notices;
      if (!notices.filter(v => v.key === key).length) {
        return {
          notices: notices.concat(notice),
        };
      }
    });
  }

  remove(key) {
    this.setState(previousState => {
      return {
        notices: previousState.notices.filter(notice => notice.key !== key),
      };
    });
  }

  render() {
    const props = this.props;
    const noticeNodes = this.state.notices.map((notice) => {
      const onClose = createChainedFunction(this.remove.bind(this, notice.key), notice.onClose);
      return (<Notice
        clsPrefix={props.clsPrefix}
        {...notice}
        onClose={onClose}
      >
        {notice.content}
      </Notice>);
    });
    const className = {
      [props.clsPrefix]: 1,
      [props.className]: !!props.className,
    };
    return (
      <div className={classnames(className)} style={props.style}>
        <Animate transitionName={this.getTransitionName()}>{noticeNodes}</Animate>
      </div>
    );
  },
});

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

Notification.newInstance = function newNotificationInstance(properties) {
  const props = properties || {};
  const div = document.createElement('div');
  document.body.appendChild(div);
  const notification = ReactDOM.render(<Notification {...props} />, div);
  return {
    notice(noticeProps) {
      notification.add(noticeProps);
    },
    removeNotice(key) {
      notification.remove(key);
    },
    component: notification,
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
};



export default Notification;
