import React, { useState , useEffect } from "react";
import axios from 'axios';
import { Title, Signature, Card, ClassicText, BorderText } from "../styles/home";
import styles from "../styles/Home.module.css";
import Head from "next/head";


const urlBirthday = process.env.URL_SERVER;

export default function Birthday() {
    const [birthdayState , setBirthdayState] = useState([]);
    const [nextBirthday, setNextBirthday] = useState([]);
    const currentDate = new Date(Date.now());

    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`);
    const fetchData = async ()=>{
            try {
                const{data} = await axios.get(`${urlBirthday}api/getBirthday`);
                setBirthdayState(data)
             } catch (error) {
                 console.log(error)
             }
        }
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];
    useEffect(()=>{
        fetchData();
    },[])
    useEffect(()=>{
        const next = birthdayState.map(item=>{
            const dateItem = new Date(item.dateNaissance);
            const ageItem = currentDate.getFullYear() - dateItem.getFullYear();
            if(currentDate.getMonth()+1 == dateItem.getMonth()+1 && currentDate.getDate() <= dateItem.getDate()){
                const whosplit = item.who.split("de ")[1];
                const who = whosplit.split(" ")[0];
                setNextBirthday(prevState =>{
                    return [
                        ...prevState,
                        {
                            age:ageItem,
                            who: who,
                            date: dateItem
                        }
                    ]
                }
                    )
            }
        })
    },[birthdayState])
    return(
        <div  className={styles.container}>
            <Head>
            <title>Birthday</title>
        </Head>
        <Title href="/">Birthday</Title>
        <Card>
            <ClassicText>Prochain anniversaire(s) du mois :</ClassicText>
            {nextBirthday.map((e,index)=>{
                    return(
                        <BorderText key={index}>
                    <ClassicText>Le : {e.date.getDate()} {monthNames[e.date.getMonth()]} {currentDate.getFullYear()} </ClassicText>
                    <ClassicText>De : {e.who} </ClassicText>
                    <ClassicText>Age : {e.age} ans </ClassicText>

                    </BorderText>
                    )
            })}

        </Card>
        <Signature href="https://github.com/guienjoris" target="_blank">
        Shynryu
      </Signature>
        </div>
    )
}