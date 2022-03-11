import { Link } from "react-router-dom";

export default function Unauthorized(){
    return(
        <div className="text-center mt-5">
            <h3>Unauthorized</h3>
            <Link to={'/'} >Go to homepage</Link>
        </div>
    )
}