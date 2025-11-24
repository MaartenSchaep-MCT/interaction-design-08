import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="container m-auto p-4 w-fit grid place-items-center min-h-screen">
        <ul className="w-fit">
          <li className="w-fit">
            <Link to="/exercise/1">01 Boop Animation</Link>
          </li>
          <li className="w-fit">
            <Link to="/exercise/2">02 Todo</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
