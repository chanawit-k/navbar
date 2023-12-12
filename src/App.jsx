import { useEffect, useState } from 'react'
import { links, social } from './data'
import Navbar from './Navbar'
const App = () => {
  const [Links, setShowLinks] = useState(links)
  return <Navbar Links={Links} social={social} />
}
export default App
