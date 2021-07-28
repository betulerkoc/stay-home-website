import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="sign-up">Sing Up</Link></li>
                    <li><Link to="sign-in">Sign In</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Nav;