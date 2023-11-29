// import Mountain1 from "../images/m3.jpg"
// import Mountain2 from "../images/m2.jpg"
// import Mountain3 from "../images/n4.jpg"
import { Component } from "react";
import "./Event.css";
class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
        </div>
        <div className="image">
            <img alt="img" src={this.props.img1}></img>
            {/* <img alt="img" src={Mountain2}></img> */}
            <img alt="img" src={this.props.img2}></img>
        </div>
    </div>
        )
    }
}
export default DestinationData;


