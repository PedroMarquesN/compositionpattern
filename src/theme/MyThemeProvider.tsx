import { ThemeProvider } from "styled-components"
import { dark } from "."
import GlobalStyle from "./globalStyle"

export const MyThemeProvider = ({children}:any) => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle /> {children}
    </ThemeProvider>
  )
}