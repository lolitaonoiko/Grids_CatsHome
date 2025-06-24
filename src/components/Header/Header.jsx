import Logo from '../Logo/Logo';

import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <Logo />
            <h1 className={s.title}>Котодім</h1>
        </header>
    );
};

export default Header;
