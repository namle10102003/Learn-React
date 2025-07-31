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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); // Ngăn việc load lại trang
        console.log(this.state);
    }

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    };
};

export default MyComponent;