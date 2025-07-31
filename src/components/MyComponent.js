import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Nam Le',
        address: 'Da Nang',
        age: 22
    };

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    };
};

export default MyComponent;