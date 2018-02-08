import React, {Component} from "react";
import CommentInputComponent from "./componentPieces/CommentInputComponent";
import CommentDataComponent, {addToComponent} from "./componentData/CommentDataComponent";
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
        // this.changeParentState = this.changeParentState.bind(this);
    }

    changeParentState = (dataToAdd) => {
        {addToComponent(dataToAdd)};

        this.setState({usrData: CommentDataComponent});
    }

    render(){
        return(
            <div className="pageContainer container mt-4">
                <h6 className="text-muted mb-2">Hi, this is stuff</h6>
                <CommentInputComponent parentStateModifier = {this.changeParentState}/>
                <CommentContainerComponent commentData = {this.state.usrData}/>
            </div>
        );
    }
}

export default PageCompnent;