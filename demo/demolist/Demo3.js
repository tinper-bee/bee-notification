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
