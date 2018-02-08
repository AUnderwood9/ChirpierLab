import React, {Component, Fragment} from "react";

class CommentContainerComponent extends Component{
    constructor(props){
        // console.log("Fire");
        super(props);
        // console.log(props.commentData);
        // console.dir(props.commentData);
        this.state = {usrContent: props.commentData};
        // console.dir(this.state);
    }

    render(){
        // console.log(this.state.usrContent);
        return(
            <Fragment>
                <section className="comment-section row">
                    {/* <h1>Stuff is here!</h1> */}
                    {this.state.usrContent.map(
                        (item, key) => {
                            // Display the user
                            return (
                                    <div key={`div${key}`} className="usr-comment-section col-12 mt-3 mb-5">   
                                        <h2 key={`usr${key}`} className="usr-name-header text-center mb-0 text-info">{item.usrName} said:</h2>
                                        <hr className="mt-0 mb-4 bg-white"/>
                                        <h5 key={`comment${key}`} className="ml-2 lead text-primary"><span></span>{item.comment}</h5>
                                        <h6 key={`date${key}`} className="ml-5 text-muted">{item.timeStamp}</h6>
                                    </div>
                                    );
                        }
                    )}
                </section>

                <hr className="row mt-3 mb-3 bg-primary"/>
                <small className="text-muted">Goodby Stuff :(</small>
            </ Fragment>
        );
    }
}

export default CommentContainerComponent;