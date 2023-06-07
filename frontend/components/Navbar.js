'use client';

import Link from "next/link";

const Navbar = () => (
  <div>
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <Link href="/">
          Anima Studios
      </Link>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/imageGeneration">
              About US
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;