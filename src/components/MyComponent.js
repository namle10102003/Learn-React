import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Nhat Nam", age: 22 },
            { id: 2, name: "Quang Thang", age: 21 },
            { id: 3, name: "Thanh Dat", age: 20 },
        ]
    };

    // JSX
    render() {
        // DRY: Don't repeat yourself
        return (
            <div>
                <UserInfor />
                <br /><br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    };
};

export default MyComponent;