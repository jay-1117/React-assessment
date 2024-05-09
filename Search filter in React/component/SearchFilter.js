import "../component/SearchFilter.css"
import React,{ useState } from "react"

export default function SearchFilter() {

    const[data,setData] = useState('')


    const[searchHistory,setsearchHistory] =useState([])

    const handleSearch = (e) => {
        setData(e.target.value);
    }

    const handleButton = (change) => {
        change.preventDefault(); 
        setsearchHistory([...searchHistory,data]);
        setData('');
        console.log("working")
    } 

    

    


    return (

        <div className="container-fluid mt-5">
            <nav className="navbar bg-body-tertiary mt-5 container-fluid d-flex flex-column justify-content-center align-self-center">
  
    <form className="d-flex justify-content-center align-item-center" role="search searchitem">
        <div className="me-2 mt-1 fs-5">
        <label for ="search">Search :</label>
        </div>
      <div className="me-3">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={data} onChange={handleSearch}/>
        </div>
        <div>
            <button className="btn btn-outline-success me-4" type="submit" onClick={handleButton}>Search</button>
            </div>
    </form>
    
    <div className="list">
    <ul>
        {searchHistory.map((change,index) => (
            <li key={index}>{change}
            </li>
        ))}
        
    </ul>
    </div>
     
</nav>
</div>

    


 
    )
}