/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      
      <div>Welcome to <a className="text-teal-500" href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">Tailwind CSS</a></div>
      
    </>
  );
}
