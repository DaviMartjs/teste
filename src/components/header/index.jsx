import './style.css'

export function Header() {
    return (
        <>
        <header className='header'>
                <div id="icon"><img src="./ibridge.png" alt="" /></div>
                <nav>
                    <ul className="buttons">
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                  </ul>
                </nav>
                <button id="button">Button</button>
        </header>
        </>
    )
}
export default Header