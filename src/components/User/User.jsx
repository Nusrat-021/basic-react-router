

import PropTypes from 'prop-types';
import './User.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    console.log(user);
    const {name,email,id,phone} = user;
    return (
        <div className='user'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};
User.propTypes = {
    user:PropTypes.object.isRequired,

}
export default User;