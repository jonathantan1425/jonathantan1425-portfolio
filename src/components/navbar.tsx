import { Bars3Icon } from "@heroicons/react/24/solid";

// Do not use next/link for the navbar, it will cause smooth scroll to fail

export default function Navbar() {
  const buttonStyling =
    " bg-smoke-50 text-turquoise-950 hover:text-smoke-50 hover:bg-turquoise-950 transition-all duration-300";

  const pathways = ["about", "experience", "projects", "contact"];

  const directory = pathways.map((pathway) => {
    const redirect = `/#${pathway}`;

    return (
      <li key={pathway}>
        <a
          href={redirect}
          className={`px-2 text-lg lg:text-2xl ${buttonStyling}`}
        >
          {pathway.toUpperCase()}
        </a>
      </li>
    );
  });

  return (
    <div className="sticky top-0 z-50 px-5 bg-smoke-50 w-full divide-y divide-solid divide-turquoise-950">
      <div className="flex items-center justify-between py-2 text-turquoise-950 text-2xl lg:text-4xl">
        <a href="/" className={`px-2 text-2xl lg:text-4xl ${buttonStyling}`}>
          JONATHAN TAN
        </a>
        <div className="block lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className={`btn rounded-none ${buttonStyling}`}>
            <Bars3Icon className="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu mt-2 p-2 border border-turquoise-950 bg-smoke-50 w-52"
          >
            {directory}
          </ul>
        </div>
      </div>
      <div className="hidden lg:block py-2">
        <ul className="flex space-x-10">{directory}</ul>
      </div>
      <hr />
    </div>
  );
}
