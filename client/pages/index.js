import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Title, Input, Signature } from "../styles/home";
import { useRouter } from "next/router";

export default function Home() {
  const [widthState, setWidthState] = useState("49vw");
  const router = useRouter();
  const searchInput = useRef(null);
  useEffect(() => {
    searchInput.current.focus();
    console.log(searchInput);
  }, []);
  const handleKeyUp = (e) => {
    const value = e.currentTarget.value;
    console.log(value);
    setWidthState(`${49 + e.currentTarget.value.length}vw 50%`);
    console.log(widthState);

    if (e.key === "Enter" && !e.shiftKey) {
      router.push(`/${value}`);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Terminal site</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Title>Terminal Site</Title>
      <Input
        ref={searchInput}
        onKeyUp={handleKeyUp}
        caretPosition={widthState}
      ></Input>
      <Signature href="https://github.com/guienjoris" target="_blank">
        Shynryu
      </Signature>
    </div>
  );
}
