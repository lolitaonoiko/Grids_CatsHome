import clsx from 'clsx';
import s from './HeroListItem.module.css';

const HeroListItem = ({ img, img2x, title }) => {
    const imgClassBuild = () => {
        return clsx(s.img, img === 'hero-first.png' && s.firstImg);
    };
    return (
        <a href="#">
            <img className={imgClassBuild()} src={`/images/${img}`} srcSet={`/images/${img2x}`} alt="Фото людини і кота" />
            <div className={s.boxTitle}>
                <h2 className={s.title}>{title}</h2>
            </div>
        </a>
    );
};

export default HeroListItem;
