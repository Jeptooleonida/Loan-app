import { Link } from 'react-router-dom'; // Make sure this is included

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">LoanLending</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/apply-loan">Apply Loan</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
