import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 默认提醒","code":"/**\n *\n * @title 默认提醒\n * @description\n *\n */\n\nimport React, { Component } from 'react';\nimport { Notification, Button } from 'tinper-bee';\n\nlet notification = null;\nNotification.newInstance({position: 'bottomRight'}, n => notification = n);\n\n\nclass Demo1 extends Component {\n\n    simpleFn() {\n      notification.notice({\n        content: <span>这是一个提示</span>,\n        onClose() {\n          console.log('simple close');\n        },\n      });\n    }\n    render () {\n\n        return (\n            <div className=\"demoPadding\">\n                <Button onClick={this.simpleFn}>simple show</Button>\n            </div>\n        )\n    }\n}\n\n\n","desc":"","scss_code":".demoPadding{\n  button {\n    margin: auto 10px;\n  }\n}"},{"example":<Demo2 />,"title":" 不同颜色的提醒","code":"/**\n *\n * @title 不同颜色的提醒\n * @description 默认提供两种颜色，一黑一白。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Notification, Button } from 'tinper-bee';\n\nlet notification = null;\nNotification.newInstance({position: 'bottomRight'}, n => notification = n);\n\nclass Demo2 extends Component {\n\n simpleLight() {\n      notification.notice({\n         title: '通知',\n        content: '明天下午李总召开会议，请您参加',\n        color: 'light'\n      });\n    }\n    simpleDark() {\n         notification.notice({\n            title: '邮箱',\n           content: '您收到一封邮件'\n         });\n       }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Button onClick={this.simpleLight}>light notification</Button>\n                <Button onClick={this.simpleDark} style={{ background: '#404040', color: '#fff' }}>dark notification</Button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 默认提供两种颜色，一黑一白。","scss_code":".demoPadding{\n  button {\n    margin: auto 10px;\n  }\n}"},{"example":<Demo3 />,"title":" 可控制的提醒","code":"/**\n *\n * @title 可控制的提醒\n * @description 通过设置duration:6来设置时间，null为自动控制\n *\n */\n\nimport React, { Component } from 'react';\nimport { Notification, Button } from 'tinper-bee';\n\nlet notification = null;\nNotification.newInstance({position: 'bottomRight'}, n => notification = n);\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.manualClose = this.manualClose.bind(this);\n    }\n closableFn() {\n      notification.notice({\n        content: <span>只可以自动关闭的提示</span>,\n        duration: null,\n        onClose() {\n          console.log('closable close');\n        },\n        duration: 6,\n        closable: false\n      });\n    }\n\n close(key) {\n      notification.removeNotice(key);\n    }\n\n manualClose() {\n      const key = Date.now();\n      notification.notice({\n        content: <div>\n          <p>只可以点击关闭的提示</p>\n          <Button onClick={this.close.bind(this, key)} size=\"sm\" style={{ position: 'absolute', right: 15, bottom: 15}}>知道了</Button>\n        </div>,\n        key,\n        duration: null,\n        closable: false\n      });\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Button colors=\"primary\" onClick={this.closableFn}>自动关闭</Button>\n                <Button colors=\"primary\" onClick={this.manualClose}>手动关闭</Button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 通过设置duration:6来设置时间，null为自动控制","scss_code":".demoPadding{\n  button {\n    margin: auto 10px;\n  }\n}"}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
                        <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
