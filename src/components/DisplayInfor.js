import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            // dấu ! có công dụng là khi click vào 1 cái gì đó, nếu nó đang bật thì sẽ tắt, đang tắt thì sẽ bật (giống bật wifi)
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        // Destructuring Array / Object
        const { listUsers } = this.props;
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide List Users" : "Show List Users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                // Dấu + trước chữ user dùng để convert nhanh từ kiểu string sang number
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        );
    };
};

export default DisplayInfor;