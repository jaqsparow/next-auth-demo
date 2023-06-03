import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Dashboard() {
  return (
    <div className={` ${inter.className}`}>
      <p className="bg-green-400">This is protected dashboard page</p>
    </div>
  );
}
