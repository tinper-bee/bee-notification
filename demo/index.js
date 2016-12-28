
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Notification from '../src';

const notification = Notification.newInstance({position: 'bottomRight'});
const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


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
          <Button onClick={this.close.bind(this, key)} shape='border' style={{ position: 'absolute', right: 5, bottom: 3}}>close</Button>
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
var DemoArray = [{"example":<Demo1 />,"title":" 默认提醒","code":"/**\n *\n * @title 默认提醒\n * @description\n *\n */\n\n\n\n\nclass Demo1 extends Component {\n\n    simpleFn() {\n      notification.notice({\n        content: <span>这是一个提示</span>,\n        onClose() {\n          console.log('simple close');\n        },\n      });\n    }\n    render () {\n\n        return (\n            <div className=\"demoPadding\">\n                <Button onClick={this.simpleFn}>simple show</Button>\n            </div>\n        )\n    }\n}\n","desc":""},{"example":<Demo2 />,"title":" 不同颜色的提醒","code":"/**\n *\n * @title 不同颜色的提醒\n * @description 默认提供两种颜色，一黑一白。\n *\n */\n\nclass Demo2 extends Component {\n\n simpleLight() {\n      notification.notice({\n         title: '通知',\n        content: '明天下午李总召开会议，请您参加',\n        color: 'light'\n      });\n    }\n    simpleDark() {\n         notification.notice({\n            title: '邮箱',\n           content: '您收到一封邮件'\n         });\n       }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n            <Button onClick={this.simpleLight}>light notification</Button>\n            <Button onClick={this.simpleDark} style={{ background: '#404040', color: '#fff' }}>dark notification</Button>\n            </div>\n        )\n    }\n}\n","desc":" 默认提供两种颜色，一黑一白。"},{"example":<Demo3 />,"title":" 可控制的提醒","code":"/**\n *\n * @title 可控制的提醒\n * @description 通过设置duration:6来设置时间，null为自动控制\n *\n */\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.manualClose = this.manualClose.bind(this);\n    }\n closableFn() {\n      notification.notice({\n        content: <span>只可以自动关闭的提示</span>,\n        duration: null,\n        onClose() {\n          console.log('closable close');\n        },\n        duration: 6,\n        closable: false\n      });\n    }\n\n close(key) {\n      notification.removeNotice(key);\n    }\n\n manualClose() {\n      const key = Date.now();\n      notification.notice({\n        content: <div>\n          <p>只可以点击关闭的提示</p>\n          <Button onClick={this.close.bind(this, key)} shape='border' style={{ position: 'absolute', right: 5, bottom: 3}}>close</Button>\n        </div>,\n        key,\n        duration: null,\n        closable: false\n      });\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n            <Button colors=\"primary\" onClick={this.closableFn}>自动关闭</Button>\n            <Button colors=\"primary\" onClick={this.manualClose}>手动关闭</Button>\n            </div>\n        )\n    }\n}\n","desc":" 通过设置duration:6来设置时间，null为自动控制"}]


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
