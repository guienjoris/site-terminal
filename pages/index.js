import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import React, { useEffect, useRef } from "react";


const Input = styled.input`
  background-color: transparent;
  caret-color: white;
  caret-shape:underscore;
  border: 1px solid white;
  box-shadow: 0px 0px 10px white;
  color:white;
  font-family: Orbitron, sans-serif;
  font-size: 50px;
  text-shadow: 1px 1px 10px white;
  outline:none;
  &:focus{
    border:none;
    box-shadow: 0px 0px 10px black;
  }
  height:80px;
  width:50%;
`
const Title = styled.h1`
  color:white;
  position:absolute;
  top:0;
  font-family: Orbitron, sans-serif;
  text-shadow: 1px 1px 10px white;
  font-size: 100px;
`

export default function Home() {
  const searchInput = useRef(null);
useEffect(()=>{
  searchInput.current.focus();
},[]) 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Title>Terminal Site</Title>
      <Input ref={searchInput}></Input>
    </div>
  )
}
