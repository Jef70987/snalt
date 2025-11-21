import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
const Navigation = () =>{
    const Navlinks = [
        {
            title:"Home",
            Link: "/Home"
        },
        
        {
            title:"Services",
            Link: "/Services"
        },
        {
            title:"Portfolio",
            Link: "/Portfolio"
        },
        {
            title:"Blog",
            Link: "/Blog"
        },
        {
            title:"About us",
            Link: "/About"
        },
        {
            title:"Contact",
            Link: "/Contact"
        },
    ];
    return (
        <div className="Nav--container">
                    
            {Navlinks.slice(0,6).map((item, index)=> (

                <Link key={index} to={item.Link} className="Nav--item">
                    <span>{item.title}</span>
                </Link>

            ))}
                
        </div>
    );

};

export default Navigation;