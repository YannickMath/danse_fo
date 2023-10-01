import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
      <Link href="/signup">Signup</Link>
        </div>
        <div>
      <Link href="/login">Login</Link>
        </div>


    </div>
  );
}
