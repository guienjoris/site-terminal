import React, { useState , useEffect } from "react";
import axios from 'axios';



export default function Birthday() {
    const [birthdayState , setBirthdayState] = useState({})

    useEffect(() => {
        console.log(birthdayState);
        try {
            const newLocal = `${process.env.URL_SERVER}/api/getBirthday`;
            console.log(newLocal)
            const{data} = axios.get(`${process.env.URL_SERVER}/api/getBirthday`);
            setBirthdayState = data.data
            return(birthdayState)
         } catch (error) {
             console.log(error)
         }
    }, [])
    return(
        <div>Birthday</div>
    )
}