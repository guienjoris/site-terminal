import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled, {keyframes} from 'styled-components';
import React, { useEffect, useRef, useState } from "react";


const Input = styled.input`
  background-color: transparent;
  caret-color: transparent;
  caret-shape:underscore;
  background-image: url(caret.png);
  background-repeat:no-repeat;
  background-position: ${props => props.caretPosition};
  border-style:none;
  border-color:transparent;
  color:white;
  font-family: Orbitron, sans-serif;
  font-size: 50px;
  text-shadow: 1px 1px 10px white;
  text-align:center;
  outline:none;
  height:100vh;
  width:100%;
`

const Title = styled.h1`
  color:white;
  position:absolute;
  top:0;
  font-family: Orbitron, sans-serif;
  text-shadow: 1px 1px 10px white;
  font-size: 100px;
`
const Signature = styled.a`
  font-family: Orbitron, sans-serif;
  color:white;
  text-shadow: 1px 1px 10px white;
  position:absolute;
  bottom:10px;
`


export default function Home() {
  const [widthState, setWidthState]= useState("49vw")

  const searchInput = useRef(null);
useEffect(()=>{
  searchInput.current.focus();
  console.log(searchInput);
},[]) 
const handleKeyUp = e=>{
  console.log(e.currentTarget.value.length)
  let lengthInput;
  if(e.currentTarget.value.length <=1 ){
    lengthInput = 50 + e.currentTarget.value.length
  }
  if(e.currentTarget.value.length>1 && e.currentTarget.value.length <= 5 ){
    lengthInput = 51 + e.currentTarget.value.length
  }
  if(e.currentTarget.value.length>5 && e.currentTarget.value.length <= 10 ){
    lengthInput = 53 + e.currentTarget.value.length
  }
  if(e.currentTarget.value.length>10 && e.currentTarget.value.length <= 15 ){
    lengthInput = 55 + e.currentTarget.value.length
  }
  if(e.currentTarget.value.length>15 ){
    lengthInput = 57 + e.currentTarget.value.length
  }
  let lengthInputString = `${lengthInput}vw 50%`;
  setWidthState(lengthInputString)
  console.log(widthState)
  
  if (e.key === "Enter" && !e.shiftKey) {
    console.log("vous avez appuyé sur enter")
  }
}
  return (
    <div className={styles.container}>
      <Head>
        <title>Terminal site</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Title>Terminal Site</Title>
      <Input ref={searchInput} onKeyUp={handleKeyUp} caretPosition= {widthState}></Input>
      <Signature href="https://github.com/guienjoris" target="_blank" >Shynryu</Signature>
    </div>
  )
}
