import { Link } from 'react-router-dom'

const Navbar = () => {    //created by "sfc"-stateless functional component
    return (
        <nav className="navbar">
            <h1>Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'8px'
                }}>New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
