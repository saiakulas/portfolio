import React, { Component } from 'react'
import './work.css'
import tea from '../../../assets/Screenshot (16).png'
import learn from '../../../assets/Screenshot (17).png'
export class Work extends Component {
  render() {
    return (
    <section id="work">
      <h2 className='worktit'>My Portfolio</h2>
      <span className='workpara'>I did two basic websites using html,css,boostrap,javascript</span>
      <div className='Img'>
        <img src={tea} className="pic1"alt="images"/>
        <br></br>
        <img src={learn} className="pic2" alt="images"/>
      </div>
    </section>
    )
  }
}

export default Work