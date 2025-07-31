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
        // console.log("My name is: ", this.state.name);

        // Merge State => React Class
        this.setState({
            name: "Nam",
            age: Math.floor((Math.random() * 100) + 1)
        });
    }

    handleOnMouseOver(event) {
        // console.log(event.pageX);
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        );
    };
};

export default MyComponent;