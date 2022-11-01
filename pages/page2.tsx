import type { NextPage } from "next";

import Link from "next/link";

const Page2: NextPage = () => {
  return (
    <div>
      <main>
        <h1>This is a second page</h1>
        <p>
          <Link href={"/"}>Go to homepage</Link>
        </p>
        <p>
          <Link href={"/privacy-policy"}>Go to privacy policy</Link>
        </p>
      </main>
    </div>
  );
};

export default Page2;
