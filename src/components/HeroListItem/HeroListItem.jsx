import s from './HeroListItem.module.css';

const HeroListItem = ({ img, img2x, title }) => {
    return (
        <a href="#">
            <img className={s.img} src={`/images/${img}`} srcSet={`/public/images/${img2x}`} alt="Фото людини і кота" />
            <div className={s.boxTitle}>
                <h2 className={s.title}>{title}</h2>
            </div>
        </a>
    );
};

export default HeroListItem;
