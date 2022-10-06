import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-black p-6">
        <Link to="/">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg
              class="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span class="font-semibold text-xl tracking-tight">WANDRLUST</span>
          </div>
        </Link>

        <div class="w-full block flex justify-end flex-grow lg:flex lg:items-right lg:w-auto">
          <div>
            <Link
              to="/tripform"
              class="inline-block text-sm px-4 py-2 leading-none text-white hover:border-transparent hover:text-green-300 hover:bg-black mt-4 lg:mt-0"
            >
              Find a Flight
            </Link>
          </div>

          <div>
            <Link
              to="/form"
              class="inline-block text-sm px-4 py-2 leading-none text-white hover:border-transparent hover:text-green-300 hover:bg-black mt-4 lg:mt-0"
            >
              Create a Blog
            </Link>
          </div>

          <div>
            <Link
              to="/blog"
              class="inline-block text-sm px-4 py-2 leading-none text-white hover:border-transparent hover:text-green-300 hover:bg-black mt-4 lg:mt-0"
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
