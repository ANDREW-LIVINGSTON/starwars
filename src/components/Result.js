import React, { useEffect, useState} from 'react';
import axios from 'axios';


const Result = (props) => {
    const [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev.api/${props.categoryTerm}/${props.id}`)
        .then(response=>{
            console.log("response is here")
            console.log(response)
            setInfo(response.data)
        })
        .catch(err=> {
            console.log(err)
        })
    }, [props.categoryTerm, props.id])

    return (
        <div>
            <h1>Search Results for {props.categoryTerm} {props.id}</h1>
            <p>{info.name}</p>
        </div>
    );
};

Result.propTypes = {};

export default Result;