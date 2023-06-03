import Link from "next/link";

import { navItems } from "@/data/navHeader";
export default function Header() {
  return (
    <>
      <header className="py-16">
        <div className="flex justify-center">
          <h1 className="text-3xl font-mono font-semibold">Next Auth Demo</h1>
        </div>
        <div className="flex justify-center px-16">
          <nav>
            <ul className="flex flex-row">
              {navItems.map((item) => {
                return (
                  <li className="px-2" key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
