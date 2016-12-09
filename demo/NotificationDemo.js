
import Notification from '../src';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
const notification = Notification.newInstance({});

function simpleFn() {
  notification.notice({
    content: <span>simple show</span>,
    onClose() {
      console.log('simple close');
    },
  });
}

function durationFn() {
  notification.notice({
    content: <span>can not close...</span>,
    duration: null,
  });
}

function closableFn() {
  notification.notice({
    content: <span>closable</span>,
    duration: null,
    onClose() {
      console.log('closable close');
    },
    closable: true,
  });
}

function close(key) {
  notification.removeNotice(key);
}

function manualClose() {
  const key = Date.now();
  notification.notice({
    content: <div>
      <p>click below button to close</p>
      <Button onClick={close.bind(null, key)}>close</Button>
    </div>,
    key,
    duration: null,
  });
}

function demo () {
    return (
        <div>
          <Button onClick={simpleFn}>simple show</Button>
          <Button onClick={durationFn}>duration=0</Button>
          <Button onClick={closableFn}>closable</Button>
          <Button onClick={manualClose}>controlled close</Button>
        </div>
    )
};

 export default demo;
