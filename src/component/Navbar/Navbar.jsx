import React from "react";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="py-3 bg-zinc-800 text-white">
      <Container className="flex items-center justify-between">
        <Link to={"/"} className="text-xl font-bold hover:text-gray-100 hover:cursor-pointer">GadgetMax</Link>
        <ul className="flex items-center space-x-2">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
          </li>
        </ul>

        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
        
      </Container>
    </div>
  );
};

export default Navbar;
