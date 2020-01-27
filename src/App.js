import React from 'react';
import './App.css';
import DataFetchComponent from "./data-fetch-component.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            districtSelected: false,
            candidateID: ""
        };
        this.parseDistrictClick = this.parseDistrictClick.bind(this);
        this.closeDisplayBox = this.closeDisplayBox.bind(this);
    }

    parseDistrictClick(e){
        let candidateID = e.target.id;
        this.setState({
            districtSelected: true,
            candidateID: candidateID
        });
    }

    closeDisplayBox(){
        this.setState({
            districtSelected: false,
            candidateID: ""
        })
    }

    render() {
        return (
            <div className="App">
                <svg className={"svg"} viewBox={"0 35 270 235"} >
                    <polygon onClick={this.parseDistrictClick} id={"N00007419"} className={"district"} points="60 105, 50 110, 70 125, 90 140, 100 165, 100 170, 100 180, 120 180, 160 200, 135 170, 150 180,135 170, 130 140, 170 140, 175 125, 165 115, 160 105, 155 100, 150 95, 100 95, 100 100, 70 100, 70 105"/>
                    <polygon onClick={this.parseDistrictClick} id={"N00033030"} className={"district"} points="135 170, 160 200, 170 200, 180 210, 190 210, 200 190, 170 140, 130 140" />
                </svg>
                {this.state.districtSelected ?
                    <DataFetchComponent
                        districtSelected={this.state.districtSelected}
                        candidateID={this.state.candidateID}
                        closeDisplayBox={this.closeDisplayBox}
                    />
                    :
                    null
                }
            </div>
        )
    }
}





