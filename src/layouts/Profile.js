import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
// import { TableRow } from '@material-ui/core';
function Profile() {

    const {id} = useParams()
    const [data, setData]= useState(null)

    console.log(data)

    useEffect(()=>{
        (async ()=>{
            await axios.get(`https://my-json-server.typicode.com/Tharanieskp/mockjson/data/${id}`).then((res)=>{
                   setData(res.data)
            })
        })()
    },[id])
    if(data == null){
        return(
            <h1>Loading</h1>
        )
    }else
    return (
        <div class="profile">
            
            <h1 class="firstl">USER DETAILS</h1> 
           <pre>
            <h2>Name         : {data.name}</h2>
            <h2>RollNo       : {data.rollno}</h2>
            <h2>DOB          : {data.dob}</h2>
            <h2>Age          : {data.age}</h2>
            <h2>Phone number : {data.more.phone}</h2>
            <h2>Address      : {data.more.address_line1}</h2> </pre>
            <center>
             { data.more.previous != null && <Button color='secondary' variant='contained'><Link to={`/profile/${data.more.previous}`}>Previous </Link></Button>}
            &nbsp;&nbsp;&nbsp;&nbsp;{ data.more.next != null && <Button color='primary' variant='contained'><Link to={`/profile/${data.more.next}`}>Next </Link></Button>}
            </center>


        </div>
    )
}

export default Profile
