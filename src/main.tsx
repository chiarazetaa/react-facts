import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root')!) // ! = it won't be null
root.render(
    createElement('h1', null, 'Hello from React')
)
