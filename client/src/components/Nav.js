import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Nav = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-white p-6">
        <Link to="/">
          <div class="flex items-center mr-6 w-60">
            <img src="https://i.ibb.co/3FCLDJG/untitled-1.png" alt="logo"></img>
          </div>
        </Link>

        <div className="w-full block flex justify-end flex-grow lg:flex lg:items-right lg:w-auto">
          <div>
            <Link
              to="/tripform"
              class="inline-block text-sm px-4 py-2 leading-none text-black hover:border-transparent hover:text-green-300 hover:bg-black mt-4 lg:mt-0"
            >
              Find a Flight
            </Link>
          </div>

          <div>
            <Link
              to="/form"
              class="inline-block text-sm px-4 py-2 leading-none text-black hover:border-transparent hover:text-green-300 hover:bg-black mt-4 lg:mt-0"
            >
              Create a Blog
            </Link>
          </div>

          <div>
            <Link
              to="/blog"
              class="inline-block text-sm px-4 py-2 leading-none text-black hover:border-transparent hover:text-green-300 hover:bg-black mt-4 lg:mt-0"
            >
              Blogs
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
