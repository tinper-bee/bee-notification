
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
var DemoArray = [{"example":<Demo1 />,"title":" 默认提醒","code":"/**\n *\n * @title 默认提醒\n * @description\n *\n */\n\n\n\n\nclass Demo1 extends Component {\n\n    simpleFn() {\n      notification.notice({\n        content: <span>simple show</span>,\n        onClose() {\n          console.log('simple close');\n        },\n      });\n    }\n    render () {\n\n        return (\n            <div className=\"demoPadding\">\n                <Button onClick={this.simpleFn}>simple show</Button>\n            </div>\n        )\n    }\n}\n","desc":""},{"example":<Demo2 />,"title":" 不同颜色的提醒","code":"/**\n *\n * @title 不同颜色的提醒\n * @description 通过color属性来设置提醒的颜色\n *\n */\n\nclass Demo2 extends Component {\n\n simpleFnsuccess() {\n      notification.notice({\n        content: <span>simple show</span>,\n        onClose() {\n          console.log('simple close');\n        },\n        color: 'success'\n      });\n    }\n simpleFndark() {\n      notification.notice({\n        content: <span>simple show</span>,\n        onClose() {\n          console.log('simple close');\n        },\n        color: 'dark'\n      });\n    }\nsimpleFnwarning() {\n      notification.notice({\n        content: <span>simple show</span>,\n        onClose() {\n          console.log('simple close');\n        },\n        color: 'warning'\n      });\n    }\n simpleFninfo() {\n      notification.notice({\n        content: <span>simple show</span>,\n        onClose() {\n          console.log('simple close');\n        },\n        color: 'info'\n      });\n    }\n simpleFndanger() {\n      notification.notice({\n        content: <span>simple show</span>,\n        onClose() {\n          console.log('simple close');\n        },\n        color: 'danger'\n      });\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n            <Button onClick={this.simpleFnsuccess} colors=\"success\">success show</Button>\n            <Button onClick={this.simpleFninfo} colors=\"info\">info show</Button>\n            <Button onClick={this.simpleFndark} style={{ background: \"rgb(97,97,97)\", color: \"#fff\"}}>dark show</Button>\n            <Button onClick={this.simpleFndanger} colors=\"danger\">danger show</Button>\n            <Button onClick={this.simpleFnwarning} colors=\"warning\">warning show</Button>\n            </div>\n        )\n    }\n}\n","desc":" 通过color属性来设置提醒的颜色"},{"example":<Demo3 />,"title":" 可控制的提醒","code":"/**\n *\n * @title 可控制的提醒\n * @description 通过设置duration:6来设置时间，null为自动控制\n *\n */\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.manualClose = this.manualClose.bind(this);\n    }\n closableFn() {\n      notification.notice({\n        content: <span>closdisable but autoclose</span>,\n        duration: null,\n        onClose() {\n          console.log('closable close');\n        },\n        duration: 6,\n        closable: false\n      });\n    }\n\n close(key) {\n      notification.removeNotice(key);\n    }\n\n manualClose() {\n      const key = Date.now();\n      notification.notice({\n        content: <div>\n          <p>click below button to close</p>\n          <Button onClick={this.close.bind(this, key)}>close</Button>\n        </div>,\n        key,\n        duration: null,\n      });\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n            <Button colors=\"primary\" onClick={this.closableFn}>closdisable but autoclose</Button>\n            <Button colors=\"primary\" onClick={this.manualClose}>controlled close</Button>\n            </div>\n        )\n    }\n}\n","desc":" 通过设置duration:6来设置时间，null为自动控制"}]


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

        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} sm={12} smOffset={0}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
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
