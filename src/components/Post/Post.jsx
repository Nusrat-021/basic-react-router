import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title,id} = post;
    return (
        <div>
            <h1>{title}</h1>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};
Post.propTypes = {
    post:PropTypes.object.isRequired,

}
export default Post;