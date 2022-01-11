import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ol>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/jiggy-page">Jiggy Page</Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default MainNavigation;
