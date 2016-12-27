let React = require('react');
let Navbar = require('Navbar');

let Main = (props) => {
  return (
      <div>
        <div >
          <div>
            <Navbar/>
            <p>Main.jsx rendered!</p>
            {props.children}
          </div>
        </div>
      </div>
  );
}

module.exports = Main;
