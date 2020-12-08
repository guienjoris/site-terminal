import React from "react";
import axios from 'axios';

const getBirthday = async ()=>{

 try {
    const{data} =await axios.get(`${process.env.URL_SERVER}/api/getBirthday`);
    return data.data
 } catch (error) {
     console.log(error)
 }
} 
export default function Birthday() {

    console.log(getBirthday);

    return(
        <div>Birthday</div>
    )
}