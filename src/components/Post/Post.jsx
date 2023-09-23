import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate = useNavigate();
        console.log(navigate);
    const {title,id} = post;

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <h1>{title}</h1>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetails}>Click to see more details</button>
        </div>
    );
};
Post.propTypes = {
    post:PropTypes.object.isRequired,

}
export default Post;