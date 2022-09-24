import React from "react";
import "../css/MainView.css"
import Navbar from "../components/Navbar";

class MainView extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="nav-container">
                    <Navbar></Navbar>
                </div>
                <div className="calendar-container">
                </div>
            </div>)
        ;
    }
}



export default MainView