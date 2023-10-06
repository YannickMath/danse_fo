import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between w-full text-white bg-black text-sm">
      <h1 className="w-1/2 flex justify-center">
        © 2023 [Latnight SAS]. Tous droits réservés.{" "}
      </h1>
        <Link href="/CGU" className="w-1/2 flex justify-center">Conditions Générales d'Utilisation</Link>.
    </div>
  );
}
