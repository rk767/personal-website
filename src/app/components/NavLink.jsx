import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block p-6 text-white sm:text-xl hover:text-blue-300 transition duration-200"
    >
      {title}
    </Link>
  );
};

export default NavLink;