import { Home } from "./components/Home"
import { Header } from "./components/Header"

import GlobalStyles from './styles/global'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
    </>
  )
}