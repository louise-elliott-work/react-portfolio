import React from "react";
import Table from 'react-bootstrap/Table';
import training from '../training.json';
import "./Skills.css";

// Home page containing name, headshot and brand statement.
function Skills() {
    return (
        <div className="page-grid skills-grid">
        <section className="heading-container">
            <strong className="heading">Skills</strong>
        </section>
        <section className="transferable-skills">
            <strong><span className="skills-subheading subheading">Top transferable skills</span></strong>
            <ul className="transferable-skills-list">
                <li className="skills"> <span className="skills-text text"> Active listening </span> </li>
                <li className="skills"> <span className="skills-text text"> Written and verbal communication </span> </li>
                <li className="skills"> <span className="skills-text text"> Education </span> </li>
                <li className="skills"> <span className="skills-text text"> Front-end development </span> </li>
                <li className="skills"> <span className="skills-text text"> Tenacious work ethic </span> </li>
                <li className="skills"> <span className="skills-text text"> English language - native </span> </li>
                <li className="skills"> <span className="skills-text text"> Spanish language - full professional proficency </span> </li>
            </ul>
        </section>
        <section className="web-dev-skills">
            <strong><span className="skills-subheading subheading">Web development tools and technologies</span></strong>
            <ul className="web-dev-skills-list">
                <li className="skills"> <img className="skills-image" src="/bootstrap.svg" /> <span className="skills-text text"> Bootstrap </span> </li>
                <li className="skills"> <img className="skills-image" src="/css3.svg" /> <span className="skills-text text"> CSS </span> </li>
                <li className="skills"> <img className="skills-image" src="/figma.svg" /> <span className="skills-text text"> Figma </span> </li>
                <li className="skills"> <img className="skills-image" src="/github.svg" /> <span className="skills-text text"> GitHub </span> </li>
                <li className="skills"> <img className="skills-image" src="/html5.svg" /> <span className="skills-text text"> HTML </span> </li>
                <li className="skills"> <img className="skills-image" src="/js.svg" /> <span className="skills-text text"> JavaScript </span> </li>
                <li className="skills"> <img className="skills-image" src="/node-js.svg" /> <span className="skills-text text"> Node </span> </li>
                <li className="skills"> <img className="skills-image" src="/react.svg" /> <span className="skills-text text"> React </span> </li>
                <li className="skills"> <img className="skills-image" src="/slack.svg" /> <span className="skills-text text"> Slack </span> </li>
                <li className="skills"> <img className="skills-image" src="/tailwind-css.svg" /> <span className="skills-text text"> Tailwind </span> </li>
                <li className="skills"> <img className="skills-image" src="/terminal-solid.svg" /> <span className="skills-text text"> Terminal </span> </li>               
            </ul>
        </section>
        <section className="child-dev-skills">
            <strong><span className="skills-subheading subheading">Extensive child development training completed - scroll down for more</span></strong>
            <div className="table-div">
                <Table bordered hover> 
                    <thead>
                        <tr>
                        <th className="table-headings">Description</th> 
                        <th className="table-headings">Organisation</th>
                        {/* <th>Key topics</th>  */}
                        <th className="table-headings">Month</th> 
                        <th className="table-headings">Year</th> 
                        </tr> 
                    </thead>

                <tbody>
                    {training.map((training) => ( 
                        <tr key={training.id}> 
                            <td className="table-entry">{training.description}</td> 
                            <td className="table-entry">{training.organisation}</td> 
                            {/* <td className="table-entry">{training.tags}</td>  */}
                            <td className="table-entry">{training.month}</td> 
                            <td className="table-entry">{training.year}</td> 
                        </tr> 
                    ))} 
                </tbody> 
                </Table> 
            </div>

        </section>        
        </div>
    )
}

export default Skills;