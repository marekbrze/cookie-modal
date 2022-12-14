import type { NextPage } from "next";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <h1>This is homepage</h1>
        <p>
          <Link href={"/page2"}>Go to page 2</Link>
        </p>
        <p>
          <Link href={"/privacy-policy"}>Go to privacy policy</Link>
        </p>
      </main>
    </div>
  );
};

export default Home;
