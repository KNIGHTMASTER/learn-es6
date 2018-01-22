import Pixel from "./Pixel";
import React, { Component } from "react";

class Main extends Component {
    render() {
        const p = new Pixel(1,2, "Red");
        return (        
            <div>{p.toString()}</div>
        );
    };
}

export default Main;