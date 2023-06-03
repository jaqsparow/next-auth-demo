import { useSession, signIn, signOut } from "next-auth/react";

export default function Me() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <p className="text-green-600 py-8">
          Welcome back Mr.{session.user.name}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 border border-blue-700 rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <>
      <p className="bg-purple-400 p-4">You are not logged in!</p>{" "}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
