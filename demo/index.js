
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Notification from '../src';

const notification = Notification.newInstance({position: 'bottomRight'});
const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
 *
 * @title 默认提醒
 * @description
 *
 */




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
/**
 *
 * @title 不同颜色的提醒
 * @description 默认提供两种颜色，一黑一白。
 *
 */

class Demo2 extends Component {

 simpleLight() {
      notification.notice({
         title: '通知',
        content: '明天下午李总召开会议，请您参加',
        color: 'light'
      });
    }
    simpleDark() {
         notification.notice({
            title: '邮箱',
           content: '您收到一封邮件'
         });
       }
    render () {
        return (
            <div className="demoPadding">
            <Button onClick={this.simpleLight}>light notification</Button>
            <Button onClick={this.simpleDark} style={{ background: '#404040', color: '#fff' }}>dark notification</Button>
            </div>
        )
    }
}
/**
 *
 * @title 可控制的提醒
 * @description 通过设置duration:6来设置时间，null为自动控制
 *
 */

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.manualClose = this.manualClose.bind(this);
    }
 closableFn() {
      notification.notice({
        content: <span>只可以自动关闭的提示</span>,
        duration: null,
        onClose() {
          console.log('closable close');
        },
        duration: 6,
        closable: false
      });
    }

 close(key) {
      notification.removeNotice(key);
    }

 manualClose() {
      const key = Date.now();
      notification.notice({
        content: <div>
          <p>只可以点击关闭的提示</p>
          <Button onClick={this.close.bind(this, key)} size="sm" style={{ position: 'absolute', right: 15, bottom: 15}}>知道了</Button>
        </div>,
        key,
        duration: null,
        closable: false
      });
    }
    render () {
        return (
            <div className="demoPadding">
            <Button colors="primary" onClick={this.closableFn}>自动关闭</Button>
            <Button colors="primary" onClick={this.manualClose}>手动关闭</Button>
            </div>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认提醒","code":"/**\r\n *\r\n * @title 默认提醒\r\n * @description\r\n *\r\n */\r\n\r\n\r\n\r\n\r\nclass Demo1 extends Component {\r\n\r\n    simpleFn() {\r\n      notification.notice({\r\n        content: <span>这是一个提示</span>,\r\n        onClose() {\r\n          console.log('simple close');\r\n        },\r\n      });\r\n    }\r\n    render () {\r\n\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button onClick={this.simpleFn}>simple show</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo2 />,"title":" 不同颜色的提醒","code":"/**\r\n *\r\n * @title 不同颜色的提醒\r\n * @description 默认提供两种颜色，一黑一白。\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n\r\n simpleLight() {\r\n      notification.notice({\r\n         title: '通知',\r\n        content: '明天下午李总召开会议，请您参加',\r\n        color: 'light'\r\n      });\r\n    }\r\n    simpleDark() {\r\n         notification.notice({\r\n            title: '邮箱',\r\n           content: '您收到一封邮件'\r\n         });\r\n       }\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n            <Button onClick={this.simpleLight}>light notification</Button>\r\n            <Button onClick={this.simpleDark} style={{ background: '#404040', color: '#fff' }}>dark notification</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 默认提供两种颜色，一黑一白。"},{"example":<Demo3 />,"title":" 可控制的提醒","code":"/**\r\n *\r\n * @title 可控制的提醒\r\n * @description 通过设置duration:6来设置时间，null为自动控制\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.manualClose = this.manualClose.bind(this);\r\n    }\r\n closableFn() {\r\n      notification.notice({\r\n        content: <span>只可以自动关闭的提示</span>,\r\n        duration: null,\r\n        onClose() {\r\n          console.log('closable close');\r\n        },\r\n        duration: 6,\r\n        closable: false\r\n      });\r\n    }\r\n\r\n close(key) {\r\n      notification.removeNotice(key);\r\n    }\r\n\r\n manualClose() {\r\n      const key = Date.now();\r\n      notification.notice({\r\n        content: <div>\r\n          <p>只可以点击关闭的提示</p>\r\n          <Button onClick={this.close.bind(this, key)} size=\"sm\" style={{ position: 'absolute', right: 15, bottom: 15}}>知道了</Button>\r\n        </div>,\r\n        key,\r\n        duration: null,\r\n        closable: false\r\n      });\r\n    }\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n            <Button colors=\"primary\" onClick={this.closableFn}>自动关闭</Button>\r\n            <Button colors=\"primary\" onClick={this.manualClose}>手动关闭</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过设置duration:6来设置时间，null为自动控制"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );


        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0, borderColor: "transparent"}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
