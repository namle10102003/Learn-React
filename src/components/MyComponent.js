import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    // JSX
    render() {
        const myInfor = ['ab', 'c', 'd'];
        // {
        //     key: value
        // }
        return (
            <div>
                <UserInfor />
                <br /><br />
                <DisplayInfor name="Nam Le" age="22" />
                <hr />
                <DisplayInfor name={'Laurent Garcia'} age={23} myInfor={myInfor} />
            </div>
        );
    };
};

export default MyComponent;