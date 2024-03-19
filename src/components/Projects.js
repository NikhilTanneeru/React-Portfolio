import React from 'react'
import ProjectCard from './ProjectCard'
import '../css/Certifications.css'

export default function Projects(props) {
  return (
    <div className="container certbox-m">
        <center><h3 className="heading py-3">Projects</h3></center>
        <div class='container cont'>
        <ProjectCard title={'PayRoll Management System'} imgName='PayRoll.png' desc='Java, JavaFx, Apache Poi, Spreadsheet as Database, Scene Builder'/>
                <ProjectCard title={'Infix to Postfix Converter'}  imgName='InfixPostfix.png' desc='HTML, CSS, JavaScript'/>
                <ProjectCard title={'Random Password Generator'}  imgName='PayRoll.png' desc='Python, Libraries such as Random'/>
                <ProjectCard title={'Online Apraisal'}  imgName='PayRoll.png' desc='JavaScript, React, Node, CSS, Bootstrap, MongoDB'/>
        </div>
    </div>
  )
}
