import Link from "next/link";

function Nav() {
  return (
    <div className="w-2/12 bg-white rounded p-3 shadow-lg">
      <div className="flex items-center p-2 mb-5">
        <h1 className="font-bold text-2xl text-gray-700 uppercase font-poppins tracking-wide">
          <Link href="/" passHref>TAILWIND CSS</Link>
        </h1>
      </div>

      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/introduction" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
              <span>Introduction</span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/typography" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Typography</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/background" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Background</span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/borders" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Borders</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/effects" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Effects</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/filters" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Filters</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/tables" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Tables</span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/spacing" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Spacing</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/sizing" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Sizing</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/layout" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Layout</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/baseStyles" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Base Styles</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/coreConcepts" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Core Concepts</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/transitionsAnimation" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Transitions & Animation</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/interactivity" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Interactivity</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/svg" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>SVG</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/accessibility" passHref>
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
              <span>Accessibility</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
