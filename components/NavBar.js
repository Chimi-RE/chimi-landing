import React from "react";
import { Navbar } from "flowbite-react";

function NavBar() {
  return (
    <Navbar fluid rounded className="bg-gray-200 shadow">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Chimi Real Estate
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
