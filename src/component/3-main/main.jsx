import React, { useState } from "react";
import "./main.css";
import "./my project"
import { myProjects } from "./my project";



export default function Main() {

  const [activstate, setactivestate] = useState("all");
  const [projects, setprojects] = useState(myProjects);

  const buttonClick = (categorypar)=>{
      setactivestate(categorypar)

      const primfilter = myProjects.filter((item)=>{
      const secfilter =item.category.find((myitem)=>{
         return  myitem === categorypar; 
        });
          return secfilter === categorypar;
      });
    setprojects(primfilter)
  }
  return (

    <main className="flex">
      <section className="left-sec flex ">

        <button onClick={()=>{buttonClick("all");
      setprojects(myProjects)}} className={activstate === "all"? "active" : null}>all projects</button>
        <button onClick={()=>{buttonClick("css");}} className={activstate === "css"? "active" : null}>html & css</button>
        <button onClick={()=>{buttonClick("javascript");}} className={activstate === "javascript"? "active" : null} >java script</button>
        <button onClick={()=>{buttonClick("react");}} className={activstate === "react"? "active" : null}>js react</button>
        <button onClick={()=>{buttonClick("nextjs");}} className={activstate === "nextjs"? "active" : null}>next js</button>
        <button onClick={()=>{buttonClick("node");}} className={activstate === "node"? "active" : null}>node & express</button>

      </section>

      <section className="right-sec flex ">

        
      {projects.map((item)=>{
        return(
          <div className="card">
          <img src={item.imgPath}></img>
          <div className="descrip">
            <h3>{item.title}</h3>
            <p>{item.p}</p>

            <div className="card-icons flex">
            <div className="flex">
            <a href="#"><i className="fa-solid fa-link"></i></a> 
            <a href="#"> <i className="fa-brands fa-github"></i></a>
            </div>

            <a href="#">more 
            <i className="fa-solid fa-arrow-right"></i>
            </a>

            </div>
          </div>
        </div>
        )
      })} 
      </section>

    </main>
  );
}
