import { createRoot } from 'react-dom/client'
import reactLogo from './react-logo.png';

const root = createRoot(document.getElementById('root'))

function Main() {
    return (
        <main>
            <img src={reactLogo} alt="React logo" />
            <h1>Fun facts about react</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

root.render(
    <Main />
)


