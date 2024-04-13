import React, { Component } from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import pic from '../../../assets/sai.jpeg'
export class Intro extends Component {
  render() {
    return (
      <section id="intro">
               <div className='introcon'>
                  <span className='hello'>Hello,</span>
                  <span className='int'>I'm <span class="na">sai</span>a good developer with good skills in web devlopment</span>
                  <p>good programmer with goodskills iam very excited  good alwys</p>
                  <Link><button class="btn">Hire</button></Link>
               </div>
               <img src={pic} alt="sai" className='bg'/>
      </section>
    )
  }
}

export default Intro