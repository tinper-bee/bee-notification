/**
 *
 * @title 不同颜色的提醒
 * @description 通过color属性来设置提醒的颜色
 *
 */

class Demo2 extends Component {

 simpleFnsuccess() {
      notification.notice({
         title: '我是标题',
        content: <span>simpleshowaaaaaaaaaaaaaaaaasfgadageqrgfgfddddddddddddgadddddddddddddddddddddddddddddddd</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'dark',
        duration: null
      });
    }
 simpleFndark() {
      notification.notice({
        content: <span>simpleshowaaaaaaaaaaaaaaaaasfgadageqrgfgfddddddddddddgadddddddddddddddddddddddddddddddd</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'light',
        duration: null
      });
    }
simpleFnwarning() {
      notification.notice({
        content: <span>simpleshowaaaaaaaaaaaaaaaaasfgadageqrgfgfddddddddddddgadddddddddddddddddddddddddddddddd</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'light'
      });
    }
 simpleFninfo() {
      notification.notice({
        content: <span>simple showaaaaaaaaaaaaaaaaasfgadageqrgfgfddddddddddddgadddddddddddddddddddddddddddddddd</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'light',
        duration: null
      });
    }
 simpleFndanger() {
      notification.notice({
        content: <span>simple showaaaaaaaaaaaaaaaaasfgadageqrgfgfddddddddddddgadddddddddddddddddddddddddddddddd</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'light'
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
