import React from "react";
import {Routes ,Route } from "react-router-dom";
import Dashboard from './Dashboard';
import './Snaptik.css';
import Project from './Projects';
import Contact from './Contact';
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Services from "./Services";
function Synaptik(){

    return <>
        <div className="snaptik-main--container">
            <div className="snaptik--header">
                <Header/>
            </div>
            <div className="snaptik-main--pages">
                 <Routes>
                    
                    <Route path='/' element = {<Dashboard/>}/>
                    <Route path='/Home' element = {<Dashboard/>}/>
                    <Route path='/About' element = {<About/>}/>
                    <Route path='/Services' element = {<Services/>}/>
                    <Route path='/Project' element = {<Project/>}/>
                    <Route path='/Portfolio' element = {<Portfolio/>}/>
                    <Route path='/Blog' element = {<Blog/>}/>
                    <Route path='/Contact' element = {<Contact/>}/>
                </Routes>
            </div>
        </div>
       
    </>

}
export default Synaptik;