import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const {userId,title,body} = post;
    return (
        <div>
            <h1>{title}</h1>
            <h3>{body}</h3>
            <h5>UserId: {userId}</h5>
        </div>
    );
};

export default PostDetails;