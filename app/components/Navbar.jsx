let React = require('react');
let {Link, IndexLink} = require('react-router');

let Navbar = () => {
  return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React timer app
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="https://github.com/Shooshte" target="_blank">Miha Sustersic</a></li>
          </ul>
        </div>
      </div>
  )
}

module.exports = Navbar;
