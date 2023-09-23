import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div style={{display:'flex',justifyContent:"center",alignItems:'center',height:'100vh'}}>
            <h1>{error.status}:{error.statusText}</h1>
        </div>
    );
};

export default ErrorPage;