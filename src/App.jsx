import { useEffect, useRef } from 'react'
import { initMuPDFWebViewer } from 'mupdf-webviewer'
import './App.css'

function App() {
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true
    initMuPDFWebViewer('#viewer', `${location.origin}/sample.pdf`)
  }, [])

  return (
    <div id="viewer"></div>
  )
}

export default App
