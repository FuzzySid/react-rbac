import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/manager">Manager</Link>
            <Link to="/employee">Employer</Link>
        </nav>
    )
}