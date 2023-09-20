import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import Link from "next/link";
import Date from "../components/date";
import Tile from "../components/Tile";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Chimi Real Estate</title>
      </Head>
      <Tile />
    </Layout>
  );
}
