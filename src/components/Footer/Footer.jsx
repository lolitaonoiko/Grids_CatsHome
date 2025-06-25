import Logo from '../Logo/Logo';

import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerWrap}>
                <Logo />
                <h2 className={s.title}>Котодім</h2>
            </div>
        </footer>
    );
};

export default Footer;
