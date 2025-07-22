import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../component/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/" >
          <Image
            src="/arrow-left-solid.svg"
            alt="back arrow"
            width={16}
            height={16}
          />
          <span>Back to home</span>
        </Link>
      </h2>
    </Layout>
  );
}
