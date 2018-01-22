import React, { Component } from "react";
import {generateRandom, sum} from "./Function";

class FunctionMain extends Component{
    render() {
        return (
            <div>
                <div>Generate Random : {generateRandom()}</div>
                <div>Sum 1 + 2 : {sum(1, 2)}</div>
            </div>
        );
    }
}

export default FunctionMain;