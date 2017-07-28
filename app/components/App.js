import React from 'react'
import TitleBar from '../components/Titlebar'
import LogoArea from '../components/LogoArea'
import Player from '../components/Player'

export default class App extends React.Component {
  render() {
    return (
      <div className="app-main" style={{textAlign: 'center'}}>
        <TitleBar />
      <div className="logo-area">
        <LogoArea />
      </div>
        <Player />
        <h1 style={{color: 'white'}}>app debug</h1>
      </div>);
  }
}
