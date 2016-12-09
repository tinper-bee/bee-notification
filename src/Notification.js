import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
//import Animate from 'rc-animate';
import createChainedFunction from 'tinper-bee-core/lib/createChainedFunction';
import classnames from 'classnames';
import Notice from './Notice';
import  elementType from 'tinper-bee-core/lib/elementType';
import Fade from 'bee-transition/build/Fade';

let seed = 0;
const now = Date.now();

function getUuid() {
  return `uNotification_${now}_${seed++}`;
}

var propTypes = {
    show: PropTypes.bool,
    clsPrefix: PropTypes.string,
    transition: elementType,
    style: PropTypes.object,
    /**
     * 延迟时间
     */
    timeout: React.PropTypes.number,
    onEnter: React.PropTypes.func,
    onEntering: React.PropTypes.func,
    onEntered: React.PropTypes.func,
    onExit: React.PropTypes.func,
    onExiting: React.PropTypes.func,
    onExited: React.PropTypes.func,
};

var defaultProps = {
    clsPrefix: 'u-notification',
    transition: Fade,
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
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);

    }



  add(notice) {
      console.log(notice);
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
        transition: Transition,
        onExit,
        onExiting,
        onEnter,
        onEntering,
        show,
        onEntered,
        timeout,
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

    return (
      <div className={classnames(classes)} style={style}>
      <Transition
        transitionAppear
        in={show}
        timeout={timeout}
        onExit={onExit}
        onExiting={onExiting}
        onExited={this.handleHidden}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
      <div>
      {noticeNodes}
      </div>
      </Transition>
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
