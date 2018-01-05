import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Animate from 'bee-animate';
import createChainedFunction from 'tinper-bee-core/lib/createChainedFunction';
import classnames from 'classnames';
import Notice from './Notice';

let seed = 0;
const now = Date.now();

function getUuid() {
  return `uNotification_${now}_${seed++}`;
}

var propTypes = {
    show: PropTypes.bool,
    clsPrefix: PropTypes.string,
    style: PropTypes.object,
    position: PropTypes.oneOf(['topRight', 'bottomRight', '']),
    transitionName: PropTypes.string,
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

var defaultProps = {
    clsPrefix: 'u-notification',
    animation: 'fade',
    position: 'topRight'
}

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
             notices: []
        };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);

    }

    getTransitionName() {
        const props = this.props;
        let transitionName = props.transitionName;
        if (!transitionName && props.animation) {
          transitionName = `${props.clsPrefix}-${props.animation}`;
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
    const {
        clsPrefix,
        className,
        position,
        style,
    } = this.props;
    const noticeNodes = this.state.notices.map((notice) => {
      const onClose = createChainedFunction(this.remove.bind(this, notice.key), notice.onClose);
      return (<Notice
        clsPrefix={clsPrefix}
        {...notice}
        onClose={onClose}
      >
        {notice.content}
      </Notice>);
    });
    const classes = {
      [clsPrefix]: 1,
      [className]: !!className,
    };
    if(position) {
        classes[`${clsPrefix}-${position}`] = !! position;
    }

    return (
        <div className={classnames(className,classes)} style={style}>
          <Animate transitionName={this.getTransitionName()}>{noticeNodes}</Animate>
        </div>
    );
  }
};

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
