
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
        content: <span>simple show</span>,
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
 * @description 通过color属性来设置提醒的颜色
 *
 */

class Demo2 extends Component {

 simpleFnsuccess() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'success'
      });
    }
 simpleFndark() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'dark'
      });
    }
simpleFnwarning() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'warning'
      });
    }
 simpleFninfo() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'info'
      });
    }
 simpleFndanger() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'danger'
      });
    }
    render () {
        return (
            <div className="demoPadding">
            <Button onClick={this.simpleFnsuccess} colors="success">success show</Button>
            <Button onClick={this.simpleFninfo} colors="info">info show</Button>
            <Button onClick={this.simpleFndark} style={{ background: "rgb(97,97,97)", color: "#fff"}}>dark show</Button>
            <Button onClick={this.simpleFndanger} colors="danger">danger show</Button>
            <Button onClick={this.simpleFnwarning} colors="warning">warning show</Button>
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
        content: <span>closdisable but autoclose</span>,
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
          <p>click below button to close</p>
          <Button onClick={this.close.bind(this, key)}>close</Button>
        </div>,
        key,
        duration: null,
      });
    }
    render () {
        return (
            <div className="demoPadding">
            <Button colors="primary" onClick={this.closableFn}>closdisable but autoclose</Button>
            <Button colors="primary" onClick={this.manualClose}>controlled close</Button>
            </div>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认提醒","code":"/**\r\n *\r\n * @title 默认提醒\r\n * @description\r\n *\r\n */\r\n\r\n\r\n\r\n\r\nclass Demo1 extends Component {\r\n\r\n    simpleFn() {\r\n      notification.notice({\r\n        content: <span>simple show</span>,\r\n        onClose() {\r\n          console.log('simple close');\r\n        },\r\n      });\r\n    }\r\n    render () {\r\n\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button onClick={this.simpleFn}>simple show</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo2 />,"title":" 不同颜色的提醒","code":"/**\r\n *\r\n * @title 不同颜色的提醒\r\n * @description 通过color属性来设置提醒的颜色\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n\r\n simpleFnsuccess() {\r\n      notification.notice({\r\n        content: <span>simple show</span>,\r\n        onClose() {\r\n          console.log('simple close');\r\n        },\r\n        color: 'success'\r\n      });\r\n    }\r\n simpleFndark() {\r\n      notification.notice({\r\n        content: <span>simple show</span>,\r\n        onClose() {\r\n          console.log('simple close');\r\n        },\r\n        color: 'dark'\r\n      });\r\n    }\r\nsimpleFnwarning() {\r\n      notification.notice({\r\n        content: <span>simple show</span>,\r\n        onClose() {\r\n          console.log('simple close');\r\n        },\r\n        color: 'warning'\r\n      });\r\n    }\r\n simpleFninfo() {\r\n      notification.notice({\r\n        content: <span>simple show</span>,\r\n        onClose() {\r\n          console.log('simple close');\r\n        },\r\n        color: 'info'\r\n      });\r\n    }\r\n simpleFndanger() {\r\n      notification.notice({\r\n        content: <span>simple show</span>,\r\n        onClose() {\r\n          console.log('simple close');\r\n        },\r\n        color: 'danger'\r\n      });\r\n    }\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n            <Button onClick={this.simpleFnsuccess} colors=\"success\">success show</Button>\r\n            <Button onClick={this.simpleFninfo} colors=\"info\">info show</Button>\r\n            <Button onClick={this.simpleFndark} style={{ background: \"rgb(97,97,97)\", color: \"#fff\"}}>dark show</Button>\r\n            <Button onClick={this.simpleFndanger} colors=\"danger\">danger show</Button>\r\n            <Button onClick={this.simpleFnwarning} colors=\"warning\">warning show</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过color属性来设置提醒的颜色"},{"example":<Demo3 />,"title":" 可控制的提醒","code":"/**\r\n *\r\n * @title 可控制的提醒\r\n * @description 通过设置duration:6来设置时间，null为自动控制\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.manualClose = this.manualClose.bind(this);\r\n    }\r\n closableFn() {\r\n      notification.notice({\r\n        content: <span>closdisable but autoclose</span>,\r\n        duration: null,\r\n        onClose() {\r\n          console.log('closable close');\r\n        },\r\n        duration: 6,\r\n        closable: false\r\n      });\r\n    }\r\n\r\n close(key) {\r\n      notification.removeNotice(key);\r\n    }\r\n\r\n manualClose() {\r\n      const key = Date.now();\r\n      notification.notice({\r\n        content: <div>\r\n          <p>click below button to close</p>\r\n          <Button onClick={this.close.bind(this, key)}>close</Button>\r\n        </div>,\r\n        key,\r\n        duration: null,\r\n      });\r\n    }\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n            <Button colors=\"primary\" onClick={this.closableFn}>closdisable but autoclose</Button>\r\n            <Button colors=\"primary\" onClick={this.manualClose}>controlled close</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过设置duration:6来设置时间，null为自动控制"}]


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
