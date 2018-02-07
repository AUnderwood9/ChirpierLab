import React, {Component} from "react";

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
            <section className="comment-section row">
                {/* <h1>Stuff is here!</h1> */}
                {this.state.usrContent.map(
                    (item, key) => {
                        {console.log(item.usrName)};
                        // Display the user
                        return (
                                <div key={`div${key}`} className="usr-comment-section col-12">   
                                    <h2 key={`usr${key}`} className="usr-name-header">{item.usrName}</h2>
                                    <h5 key={`comment${key}`}>{item.comment}</h5>
                                </div>
                                );
                    }
                )}

                
            </section>
        );
    }
}

export default CommentContainerComponent;