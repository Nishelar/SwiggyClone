import { useRouteError } from "react-router-dom";
const ErrorComponent=()=>{
    const {status,statusText}=useRouteError();
    return (

        <div>
            <h1>Oops!!</h1>
            <h2>Something Went Wrong!!</h2>
            <h2>{status+" :"+statusText}</h2>
        </div>
    )
}
export default ErrorComponent;