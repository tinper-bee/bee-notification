/**
 *
 * @title 默认提醒
 * @description
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Notification from '../../src';

const notification = Notification.newInstance({position: 'bottomRight'});


class Demo1 extends Component {

    simpleFn() {
      notification.notice({
        content: <span>这是一个提示</span>,
        onClose() {
          console.log('simple close');
        },
      });
    }
    render () {

        return (
            <div className="demoPadding">
                <Button onClick={this.simpleFn}>simple show</Button>
            </div>
        )
    }
}

export default Demo1;
