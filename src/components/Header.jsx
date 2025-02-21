import reactLogo from './../images/react-logo.png';

export default function Header() {
    return (
        <header className='header'>
            <nav>
                <img src={reactLogo} alt="React logo" className="img-logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}