import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
console.log(user);
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.city},{user.address.street}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default UserDetails;