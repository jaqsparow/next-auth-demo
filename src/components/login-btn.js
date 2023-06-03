import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="mx-auto">
        <p className="text-green-600 py-8">Signed in as {session.user.email}</p>
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
    <div className="text-pink-600 py-8 flex justify-center">
      <p>Not signed in </p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
}
