import React, { Component, Fragment } from 'react';

class CommentInputComponent extends Component{
    constructor(props){
        super(props);
        let d = new Date();
        let currentTime = d.toDateString() + " " + d.toLocaleTimeString();
        this.state = {usrName: "", usrComment: "", timeStamp: currentTime};
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
        let d = new Date();
        let currentTime = d.toDateString() + " " + d.toLocaleTimeString();

        this.props.parentStateModifier(
            {
                usrName: this.state.tempUsr, 
                comment: this.state.tempComment,
                timeStamp: currentTime
            }
        );
        event.preventDefault();
    }


    render(){
        return(
            <Fragment>
                <form className="usr-input-section row border border-light p-3 rounded"
                    onSubmit={(e) => this.handleSubmitEvent(e)}
                >
                    <input className="col-12 mt-1" type="text" placeholder="Reveal yourself"
                        onChange={(e) => this.handleUsrChange(e)}
                    />
                    <input className="col-12 mt-1" type="text" placeholder="Nah, you don´t want to do that. Just don't type here..."
                        onChange={(e) => this.handleCommentChange(e)}
                    />
                    <input type="submit" value="Click me to do stuff" className="mt-3 mb-2 mx-auto btn btn-primary"/>
                    {/* <button className="btn btn-primary"
                        >Click me to do stuff</button> */}
                    
                </form>
                <hr className="row bg-primary"/>
            </ Fragment>

            
        );
    }
}

export default CommentInputComponent;