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
