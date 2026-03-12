import { useEffect, useRef } from 'react'
import { initMuPDFWebViewer } from 'mupdf-webviewer'
import './App.css'

function App() {
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    const urlParams = new URLSearchParams(window.location.search)
    const pdfPath = urlParams.get('pdf') || 'sample.pdf'

    initMuPDFWebViewer('#viewer', `${location.origin}/${pdfPath}`)
  }, [])

  return (
    <div id="viewer"></div>
  )
}

export default App
