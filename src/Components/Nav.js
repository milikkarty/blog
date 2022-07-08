import { useState } from "react";

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
            <li>Compose</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;