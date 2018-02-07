import React, {Component} from "react";
import CommentInputComponent from "./componentPieces/CommentInputComponent";
import CommentDataComponent from "./componentData/CommentDataComponent";
import CommentContainerComponent from "./componentPieces/CommentContainerComponent";

// function PageCompnent(props){
//     return (
//         <div className="pageContainer container">
//             Hi, this is stuff
//             <CommentInputComponent commentData = {CommentDataComponent}/>
//             <CommentContainerComponent commentData = {CommentDataComponent}/>
//         </div>
//     );
// }

class PageCompnent extends Component{
    constructor(props){
        super(props);
        this.state = {usrData: CommentDataComponent};
        console.log(this.state);
        // console.log(this.state.usrData);
        this.changeParentState = this.changeParentState.bind(this);
        // let tempArr = this.state.usrData;
    }

    changeParentState(dataToAdd){
        // let tempArr = this.state.usrData;
        let tempArr = this.state.usrData;
        this.tempArr.push(dataToAdd);

        console.log("Fire");
        this.setState({usrData: this.tempArr});
        console.log("Done");
        
    }

    render(){
        return(
            <div className="pageContainer container">
                Hi, this is stuff
                <CommentInputComponent parentStateModifier = {this.changeParentState}/>
                <CommentContainerComponent commentData = {this.state.usrData}/>
            </div>
        );
    }
}

export default PageCompnent;