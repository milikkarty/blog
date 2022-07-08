import { useState } from "react";
import { Link } from 'react-router-dom';

const Nav = () => {

    const [search, setSearch] = useState("");

    return (
        <nav>
            <form className="searchForm" onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search posts</label>
            <input
                autoComplete="off"
                autoFocus
                id="search"
                placeholder="Search posts"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            </form>
            <ul className="searchList">
                <Link to="/"><li>Home</li></Link>
                <Link to="/compose"><li>Compose</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;