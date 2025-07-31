import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Nam Le',
        address: 'Da Nang',
        age: 22
    };

    handleClick(event) {
        console.log("Clicked");
        console.log(event);
        console.log("My name is: ", this.state.name);
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    };
};

export default MyComponent;