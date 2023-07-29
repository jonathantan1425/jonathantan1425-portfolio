import Link from "next/link";

export default function Navbar() {
  const pathways = ["about", "experience", "projects", "contact"];

  const directory = pathways.map((pathway) => {
    const redirect = `#${pathway}`;

    return (
      <Link href={redirect} className="text-turquoise-950 hover:text-turquoise-400 transition-all duration-300">
        {pathway.toUpperCase()}
      </Link>
    );
  });

  return (
<div className="flex justify-center px-5 py-5">
  <div className="space-x-10">
    {directory}
  </div>
  </div>
  );
}
