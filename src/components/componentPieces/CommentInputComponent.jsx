import React, { Component } from 'react';

class CommentInputComponent extends Component{
    constructor(props){
        super(props);
        this.state = {usrName: "", usrComment: "", timeStamp: new Date()};
    }

    // Update the page when an input is submitted
    handleUsrChange(event){
        this.setState({tempUsr: event.target.value});
    }

    handleCommentChange(event){
        this.setState({tempComment: event.target.value});
        //console.log(this.state.tempComment);
    }

    // handleClickEvent(event){
    //     console.log(this.state.tempUsr);
    //     console.log(this.state.tempComment);
    // }

    handleSubmitEvent(event){
        console.log(this.state.tempUsr);
        console.log(this.state.tempComment);
        console.log(this.props.parentStateModifier);
        this.props.parentStateModifier(
            {
            usrName: this.state.tempUsr, 
            comment: this.state.tempComment
            }
        );
        event.preventDefault();
    }


    render(){
        return(
            <form className="usr-input-section row"
                onSubmit={(e) => this.handleSubmitEvent(e)}
            >
                <input className="col-12" type="text" placeholder="User Name here:"
                    onChange={(e) => this.handleUsrChange(e)}
                />
                <input className="col-12" type="text" placeholder="Comment here:"
                    onChange={(e) => this.handleCommentChange(e)}
                />
                <input type="submit" value="Click me to do stuff"/>
                {/* <button className="btn btn-primary"
                    >Click me to do stuff</button> */}
                <hr className="col-12"/>
            </form>

            
        );
    }
}

export default CommentInputComponent;