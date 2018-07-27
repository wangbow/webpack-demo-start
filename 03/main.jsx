import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class HellMessage extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    }

    static defaultProps = {
        text: "world"
    }
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>hello,{this.props.text} </h1>
    }
}

ReactDOM.render(
    <HellMessage text="baobei.good night" />,
    document.querySelector("#root")
)