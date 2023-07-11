import React, { Component, createContext} from 'react'

export const  ThemeContext = createContext()
export default class ThemeContextProvider extends Component {
    state={
        isLightTheme:true,
        isLight:{ syntax:'#555', ui:'#ddd', bg:'#eee'},
        isDark:{ syntax:'#ddd', ui:'#333', bg:'#eee'}
    }
  render() {
    return (
      <>
          <ThemeContext.Provider value={{...this.state}}>
            {this.props.children}
          </ThemeContext.Provider>
      </>
    )
  }
}
