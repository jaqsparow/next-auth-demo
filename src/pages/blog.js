import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Dashboard() {
  return (
    <div className={` ${inter.className}`}>
      <p className="bg-green-400 dark:text-gray-800 p-2 rounded">
        This is a sample blog page and it is not protected.This can be viewed by
        everyone
      </p>
    </div>
  );
}
