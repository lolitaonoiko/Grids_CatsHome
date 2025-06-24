import s from './MainSection.module.css';

const MainSection = ({ children }) => {
    return <main className={s.main}>{children}</main>;
};

export default MainSection;
