import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'

class DisplayInfor extends React.Component {

    constructor(props) {
        console.log("call constructor: 1")
        super(props)
        // babel compiler
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log("call me component did mount")
        setTimeout(() => {
            document.title = 'Nam Le';
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("call me component did update", this.props, prevProps);
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 users')
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            // dấu ! có công dụng là khi click vào 1 cái gì đó, nếu nó đang bật thì sẽ tắt, đang tắt thì sẽ bật (giống bật wifi)
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        // Destructuring Array / Object
        console.log("call me render: ")
        const { listUsers } = this.props;
        // File Components ReactJS = Template HTML + Logic JS
        return (
            <div className="display-infor-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide List Users" : "Show List Users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                // Dấu + trước chữ user dùng để convert nhanh từ kiểu string sang number
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}> Delete </button>
                                    </div>

                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        );
    };
};

export default DisplayInfor;