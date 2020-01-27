import React from "react";

import "./App.css";

export default class FederalRepresentativesComponent extends React.Component {



    displayData() {
        let data = this.props.items.response.contributors;
        console.log(data);
        let displayableDonorsArray = [];
        let indRepHeader = <React.Fragment>
            <div>{data["@attributes"].cand_name}</div>
        </React.Fragment>;
        displayableDonorsArray.push(indRepHeader);
        data.contributor.forEach((element) => {
            let donor = element["@attributes"];
            let donorToDisplay = <li><b>{donor.org_name}</b> donated ${donor.total}. ${donor.pacs} as P.A.C
                contributions, ${donor.indivs} as Individual contributions. </li>;
            displayableDonorsArray.push(donorToDisplay)
        });
        return (
            displayableDonorsArray
        );
    }



    render(){
        return(
            <React.Fragment>
              <div className={this.props.districtSelected ? "data-display" : "display-none"}>
                <div onClick={this.props.closeDisplayBox} className={"close-button"}>x</div>
                  <React.Fragment>{this.displayData()}</React.Fragment>
              </div>
            </React.Fragment>


        )
    }
}

