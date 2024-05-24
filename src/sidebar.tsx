import "./sidebar.css";
import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';

function Sidebar(){

    const[headerValue, setheadervalue] = useState<string>("Contact");

    const setcontact = () =>{
        setheadervalue("Contact")
    }
    const setchartandmaps = () =>{
        setheadervalue("Charts And Maps of Covid-19")
    }
    return(
        <div>
            <div>
                <header className="divheader">{headerValue}</header>
            </div>
            <div className="hello">
                <div className="divsidebar">
                    
                    <Link to="/"  onClick={setcontact} className="sidebarcontact common">Contact</Link>
                    <Link to="/chartsandmaps" onClick={setchartandmaps} className="sidebarchartsmaps common">Charts and Maps</Link>
                    
                </div>
                <div className="divcontact">
                    <Outlet/>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;