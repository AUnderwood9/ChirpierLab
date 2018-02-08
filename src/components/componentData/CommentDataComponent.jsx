let CommentDataComponent = [
    {
        id: 1,
        usrName: "Widdly2Diddly",
        comment: "Oh Lawd, can ya feel it? Large fries brothah! Large fries!",
        timeStamp: "Sat Dec 25 2017 10:38:02 PM"
    },{
        id: 2,
        usrName: "GaryTheHotSoup",
        comment: "Soup's on, baby!",
        timeStamp: "Tue Jan 08 2018 1:12:32 PM"
    },{
        id: 3,
        usrName: "LordOfHintz",
        comment: "People Call me Lord of the Tutorial. I've been traveling the lands leaving my hints for all to see. I'm a pretty big deal. Got a lot of fans.",
        timeStamp: "Wed Jan 15 2018 08:06:45 AM"
    }
];

let getDate = () => {
    let dateTemp = new Date();

    return dateTemp.toDateString()
}

export const addToComponent = (dataToAdd) => {
    // add an object to the CommentDataCompnent
    CommentDataComponent.push(dataToAdd);
}

export default CommentDataComponent;