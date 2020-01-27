import React from "react";
import "./App.css"
import FederalRepresentativesComponent from "./federal-representatives-component";

export default class DataFetchComponent extends React.Component {
    constructor(props){
        super(props);
         this.state = {
             error: null,
             isLoaded: false,
             items: {}
         };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
            let url = "https://www.opensecrets.org/api/?method=candContrib&cid=" + this.props.candidateID + "&cycle=2020&apikey=6387ebd6daac7d1ba991193163e8e62a&output=json";
            this.getData(url);
            console.log(url);
    }

    getData(url) {
        fetch(url)
            .then( res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }


render(){
        return( this.state.isLoaded ?
                    <FederalRepresentativesComponent error={this.state.error}
                                                     items={this.state.items}
                                                     districtSelected={this.props.districtSelected}
                                                     closeDisplayBox={this.props.closeDisplayBox}/>
                    :
                    null
        )
}






}

