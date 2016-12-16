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
