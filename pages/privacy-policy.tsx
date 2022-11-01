import type { NextPage } from "next";
import Link from "next/link";

const PrivacyPolicy: NextPage = () => {
  return (
    <div>
      <main>
        <h1>This is a privacy policy page</h1>
        <p>
          <Link href={"/"}>Go to homepage</Link>
        </p>
        <p>
          <Link href={"/page2"}>Go to page 2</Link>
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
