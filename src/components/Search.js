import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const Search = () => {
    const [starwarsData, setStarwarsData] = useState({})
    const [dropdownKeys, setDropdownKeys] = useState([])
    const [formInfo, setFormInfo] = useState({
        term: "",
        idInput:""
    })

    const changeHandler = (e) =>{
        console.log("filling out form!")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response =>{
            console.log("***********")
            console.log(response)
            console.log("***********")
            setStarwarsData(response.data)
            setDropdownKeys(Object.keys(response.data))
        })
        .catch(err =>{
            console.log("ERROR")
        })
    }, [])

    const submitHandler = (e) =>{
        e.preventDefault()
        navigate(`/${formInfo.term}/${formInfo.idInput}`)
    }

    return (
        <div>
            <form onSubmit = {submitHandler}>
            <p>Search for: <select  onChange = {changeHandler} name="term" id="">
                {dropdownKeys.map((item, i)=>{
                    return <option value={item} key = {i}>{item}</option>
                })}
            </select></p>
            <p>Id: <input onChange = {changeHandler} type="number" name="idInput" id=""/></p>
            <input type ="submit" value="Search"/>
            </form>
        </div>
    );
};



export default Search;