import React, { Component } from 'react'
import Nav from './components/Nav/nav'
import Intro from './components/Nav/intro/intro'
import Skill from './components/Nav/skills/skill'
import Work from './components/Nav/works/work'
import Contact from './components/Nav/contact/conatct'
import Footer from './components/Nav/footer/footer'
import './App.css'
export class App extends Component {
  render() {
    return (
      <div><Nav/>
      <Intro/>
      <Skill/>
      <Work/>
      <Contact/>
      <Footer/>
      </div>
    )
  }
}

export default App
