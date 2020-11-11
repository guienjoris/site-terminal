import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Title, Signature } from "../styles/home";
import {InputClassic, Label} from "../styles/qrCode";

export default function QrCode() {
    return(
        <div  className={styles.container}>
            <form action="">
            <Head>
            <title>QrCode</title>
        </Head>
        <Title href="/">Qr Code Generator</Title>
        <Label> String à transformer en QrCode
        <InputClassic></InputClassic>
        </Label>
        </form>
        <Signature href="https://github.com/guienjoris" target="_blank">
        Shynryu
      </Signature>
        </div>
    )
}