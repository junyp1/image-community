import React from "react";

import {Grid, Image, Text} from "../elements"

const Post = (props) => {
    
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shpae="circle" src={props.src}></Image>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src}></Image>
                </Grid>
                <Grid padding="16px">
                    <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </React.Fragment>    
        
    );
}

Post.defaultProps = {
    user_info: {
        user_name: "jun0",
        user_profile: "https://i.pinimg.com/474x/a8/e7/60/a8e760bcdf6af796ebf9745ae28b7eae.jpg",   
    },
    image_url: "https://pbs.twimg.com/media/Ds7f0HyU8AEhdLW.jpg",
    contents: "고양이구만",
    comment_cnt: 10,
    insert_dt: "2021-07-02 16:54:00"
};

export default Post;