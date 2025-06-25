import s from './AsideListItem.module.css';

const AsideListItem = ({ img, img2x, title, desc }) => {
    return (
        <a href="#" className={s.link}>
            <img className={s.img} src={`/images/${img}`} srcSet={`/images/${img2x}`} alt="Фото кота" />
            <div>
                <h2 className={s.title}>{title}</h2>
                <p className={s.desc}>{desc}</p>
            </div>
        </a>
    );
};

export default AsideListItem;
