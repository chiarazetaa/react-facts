import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root')!) // ! = it won't be null

function MainContent() {
    return (
        <h1>JSX yeah!</h1>
    )
}

root.render(
    <div>
        <MainContent></MainContent>
    </div>
)
