import React, { Component } from 'react'
import {MenuItems} from './MenuItems'
import './Navbar.css';
import logo from '../../assets/logo-UV.png'
import '../../estilos.css'

class Navbar extends Component{

    state = {clicked:false}
    handleClick = () =>{
      this.setState({clicked:!this.state.clicked})
    }
   
    
    render(){
        return(
            <nav className="NavbarItems" id='inicio'>
              <div className="Navbar-logo">
              <h1 className='nombreLogo' >
                <a href="/"><img src={logo} style={{width:'60px'}} alt="Logo de la empresa mundo digital" /></a>
              </h1>
              </div>
                
                <div className="menu-icon" onClick={this.handleClick}>
                  <i  tabIndex='0' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  {MenuItems.map((item, index)=>{
                      return(
                        <li key={index} onClick={this.handleClick}>
                          <a className={item.cName} href={item.url}> 
                            {item.title}
                          </a>                        
                        </li>
                      )
                    })
                  } 
                </ul>
            </nav>
        )
    }
}

export default Navbar