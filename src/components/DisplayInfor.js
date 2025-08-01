import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // Destructuring Array / Object
        const { name, age } = this.props;
        return (
            <div>
                My name is {name} and I'm {age}
            </div>
        );
    }
};

export default DisplayInfor;