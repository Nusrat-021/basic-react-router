import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const {userId,title,body} = post;
    const navigate = useNavigate();

    const handleGoBack = () =>{
        // navigate(-1);
        navigate('/posts');
    }
    return (
        <div>
            <h1>{title}</h1>
            <h3>{body}</h3>
            <h5>UserId: {userId}</h5>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;