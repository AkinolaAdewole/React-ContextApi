import React, { Component, createContext} from 'react'
import AuthContextProvider, { AuthContext } from './AuthContextProvider';

export const  ThemeContext = createContext()
export default class ThemeContextProvider extends Component {
    state={
        isLightTheme:true,
        light:{ syntax:'#555', ui:'#ddd', bg:'#eee'},
        dark:{ syntax:'#ddd', ui:'#333', bg:'#eee'}
    }

    // Update(change) context data
    toggleTheme=()=>{
        this.setState({isLightTheme :!this.state.isLightTheme});
    }


  render() {
    return (
      <>
      {/* To create consuming multiple context */}
          <ThemeContext.Provider value={{...this.state, toggleTheme:this.toggleTheme}}>
            {this.props.children}
          </ThemeContext.Provider>
      </>
    )
  }
}
