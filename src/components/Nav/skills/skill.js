import React, { Component } from 'react'
import './skill.css'
export class Skill extends Component {
  render() {
    return (
      <section id="skills">
        <span className='title'>What I do</span>
        <span className='para'>I am currently working on web devlopment</span>
        <div className="skill">
            <div className='skillbar'>
                <img src="https://www.kindpng.com/picc/m/159-1595848_python-logo-png-transparent-background-python-logo-png.png" className='skillimg' alt="hi"/>
                <div className='h'>
                     <h2>python programming basics</h2>
                     <p>good in writting basic python programs</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src="https://wallpapercave.com/wp/wp2742531.png" className='skillimg' alt="hi"/>
                <div className='h'>
                     <h2>html,css and javascript</h2>
                     <p>build two simple websites using html,css and javascript</p>
                </div>
                </div>
                <div className='skillbar'>
                <img src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain" className='skillimg' alt="hi"/>
                <div className='h'>
                     <h2>react basics</h2>
                     <p>learn some basics of react and did a simple project</p>
                </div>
                </div>
        </div>
      </section>
    )
  }
}

export default Skill