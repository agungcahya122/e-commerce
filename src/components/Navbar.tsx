import React from "react";
import avatar from "../assets/avatar.webp";
import trolley from "../assets/trolley.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white shadow-md p-5">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl md:ml-24"
            style={{
              color: "#007549",
              fontFamily: "Poppins",
              fontWeight: "700",
            }}
          >
            Greenish
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle mr-7">
              <div className="indicator">
                <img src={trolley} />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className=" text-green-700">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to="/shoppingCart">
                    <button className="btn bg-green-700 border-none btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end md:pr-24">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} className="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/" className="justify-between">
                  Profile
                  <span className="badge">Account</span>
                </Link>
              </li>

              <li>
                <Link to="/aboutmeProfil">About Me</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/deactivate">Deactivate Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
