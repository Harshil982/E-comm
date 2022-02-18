import React, { useEffect, useState } from 'react';
import './Styles/Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchDemoData from './../../Json/SearchDemoData.json'
import Card from '../Card';
import { Link } from 'react-router-dom';

function SearchResult(props) {
    document.title = "Search Products"
    const [serchProductName, setserchProductName] = useState('')
    const [filteredData, setfilteredData] = useState([])
    // const [isproductExist,setisproductExist] = useState(false)

    const handleSearch = (e) => {
        setserchProductName(e.target.value);
    }
    useEffect(() => {
        console.log(serchProductName);
        const temp = SearchDemoData.filter((val) => {
            if (serchProductName.trim() === "") {
                return val
            }
            else if (val.item.replace(/ /g, "").toLowerCase().includes(serchProductName.replace(/ /g, "").toLowerCase())) {
                return val
            }
            else {
                return null
            }
        })
        setfilteredData(temp)
    }, [serchProductName])
    console.log(filteredData);
    return (
        <>
            <div className="search-page">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}> <FontAwesomeIcon icon={faTimes} className="cancel-search" /></Link>
                <div className="search-input-container">
                    <FontAwesomeIcon icon={faSearch} style={{ color: "gray" }} />
                    <input type="text" placeholder="Serch for Products or Informations" className="serach-input" onChange={handleSearch} />
                </div>
                {filteredData.length === 0
                    ?
                    <h2 style={{textAlign: "center",width :"80%",margin : "5vw 10%",overflow : "hidden"}}>"Sorry ,No Results found for {serchProductName}"</h2>
                    :
                    <div className="display-flex-css">
                        {filteredData.map((item, index) => (
                            <Card data={item} key={index} />
                        ))}
                    </div>
                }
            </div>
        </>
    );
}

export default SearchResult;