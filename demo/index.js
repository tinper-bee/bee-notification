
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
 * @title 默认按钮
 * @description 基础按钮
 *
 */




class Demo1 extends Component {

    simpleFn() {
          notification.notice({
            content: <span>simple show</span>,
            onClose() {
              console.log('simple close');
            },
            color: 'success'
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
 * @title 不同形状的按钮
 * @description 通过`shape`属性控制按钮大小
 *
 */

class Demo2 extends Component {
    render () {
        return (
            <div className="demoPadding">
            <Col md={6} xs={12}>
                <Button shape="block" colors="primary">块状按钮</Button>
            </Col>
            <Col md={6} xs={12}>
            <Button shape="round" colors="primary">圆形边按钮</Button>
            <Button shape="squared" colors="warning">方形按钮</Button>
            <Button shape="floating" colors="primary">圆形按钮</Button>
            </Col>
            </div>
        )
    }
}
/**
 *
 * @title 不同颜色的按钮
 * @description 通过`colors`属性控制按钮颜色
 *
 */

class Demo3 extends Component {

    render () {
        return (
            <div className="demoPadding">
                    <Button colors="success">success</Button>
                    <Button colors="info">info</Button>
                    <Button colors="warning">warning</Button>
                    <Button colors="danger">danger</Button>
                <div className="divider"></div>
                    <Button shape="border" colors="success">success</Button>
                    <Button shape="border" colors="warning">info</Button>
                    <Button shape="border" colors="info">warning</Button>
                    <Button shape="border" colors="danger">danger</Button>
            </div>
        )
    }
}
/**
 *
 * @title 不同大小的按钮
 * @description 通过`size`属性控制按钮大小
 *
 */

class Demo4 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <Button size="sm" colors="primary">小按钮</Button>
                <Button colors="primary">默认</Button>
                <Button size="lg" colors="primary">大按钮</Button>
                <Button size="xg" colors="primary">巨大按钮</Button>
            </div>
        )
    }
}
/**
 *
 * @title 事件按钮
 * @description 点击按钮触发事件
 *
 */

class Demo5 extends Component {
    constructor(props){
        super(props);
    }
    handleClick(){
        alert("谢谢你点我")
    }

    render () {
        return (
                <Button colors="primary" onClick={ this.handleClick }>事件按钮</Button>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮","code":"/**\r\n *\r\n * @title 默认按钮\r\n * @description 基础按钮\r\n *\r\n */\r\n\r\n\r\n\r\n\r\nclass Demo1 extends Component {\r\n\r\n    simpleFn() {\r\n          notification.notice({\r\n            content: <span>simple show</span>,\r\n            onClose() {\r\n              console.log('simple close');\r\n            },\r\n            color: 'success'\r\n          });\r\n\r\n    }\r\n    render () {\r\n\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button onClick={this.simpleFn}>simple show</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 基础按钮"},{"example":<Demo2 />,"title":" 不同形状的按钮","code":"/**\r\n *\r\n * @title 不同形状的按钮\r\n * @description 通过`shape`属性控制按钮大小\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n            <Col md={6} xs={12}>\r\n                <Button shape=\"block\" colors=\"primary\">块状按钮</Button>\r\n            </Col>\r\n            <Col md={6} xs={12}>\r\n            <Button shape=\"round\" colors=\"primary\">圆形边按钮</Button>\r\n            <Button shape=\"squared\" colors=\"warning\">方形按钮</Button>\r\n            <Button shape=\"floating\" colors=\"primary\">圆形按钮</Button>\r\n            </Col>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`shape`属性控制按钮大小"},{"example":<Demo3 />,"title":" 不同颜色的按钮","code":"/**\r\n *\r\n * @title 不同颜色的按钮\r\n * @description 通过`colors`属性控制按钮颜色\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                    <Button colors=\"success\">success</Button>\r\n                    <Button colors=\"info\">info</Button>\r\n                    <Button colors=\"warning\">warning</Button>\r\n                    <Button colors=\"danger\">danger</Button>\r\n                <div className=\"divider\"></div>\r\n                    <Button shape=\"border\" colors=\"success\">success</Button>\r\n                    <Button shape=\"border\" colors=\"warning\">info</Button>\r\n                    <Button shape=\"border\" colors=\"info\">warning</Button>\r\n                    <Button shape=\"border\" colors=\"danger\">danger</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`colors`属性控制按钮颜色"},{"example":<Demo4 />,"title":" 不同大小的按钮","code":"/**\r\n *\r\n * @title 不同大小的按钮\r\n * @description 通过`size`属性控制按钮大小\r\n *\r\n */\r\n\r\nclass Demo4 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button size=\"sm\" colors=\"primary\">小按钮</Button>\r\n                <Button colors=\"primary\">默认</Button>\r\n                <Button size=\"lg\" colors=\"primary\">大按钮</Button>\r\n                <Button size=\"xg\" colors=\"primary\">巨大按钮</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`size`属性控制按钮大小"},{"example":<Demo5 />,"title":" 事件按钮","code":"/**\r\n *\r\n * @title 事件按钮\r\n * @description 点击按钮触发事件\r\n *\r\n */\r\n\r\nclass Demo5 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n    }\r\n    handleClick(){\r\n        alert(\"谢谢你点我\")\r\n    }\r\n\r\n    render () {\r\n        return (\r\n                <Button colors=\"primary\" onClick={ this.handleClick }>事件按钮</Button>\r\n        )\r\n    }\r\n}\r\n","desc":" 点击按钮触发事件"}]


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
