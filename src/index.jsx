import { createRoot } from 'react-dom/client'
import reactLogo from './react-logo.png';

const root = createRoot(document.getElementById('root'))

function Header() {
    return (
        <header className='header'>
            <img src={reactLogo} alt="React logo" />
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list-item'>Pricing</li>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Main() {
    return (
        <>
            <h1>Fun facts about react</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </>
    )
}

function Footer() {
    return(
        <footer className='footer'>
            <small>© 2025 chiarazetaa development. All rights reserved.</small>
        </footer>
    )
}

root.render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
)


