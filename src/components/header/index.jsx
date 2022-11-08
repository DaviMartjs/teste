import './style.css'
import ibridge from './ibridge.png'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export function Header() {
    return (
        <>
        <header className='header'>
                <div id="icondiv"><img id="icon" src={ibridge} alt="" /></div>
                <nav>
                    <ul className="buttons">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                  </ul>
                </nav>
                <div id='avatar'><Avatar shape="square" size="small" icon={<UserOutlined/>}/></div>
            </header>
            <hr />
        </>
    )
}
export default Header