import clsx from 'clsx';
import s from './SocialMediaListItem.module.css';

const SocialMediaListItem = ({ svg, color, subs }) => {
    const mediaBuildClass = () => {
        return clsx(
            s.backMedia,
            color === 'navy' && s.navy,
            color === 'pink' && s.pink,
            color === 'scarlet' && s.scarlet,
            color === 'turquoise' && s.turq,
            color === 'yellow' && s.yellow,
            color === 'lilac' && s.lilac
        );
    };

    return (
        <div className={mediaBuildClass()}>
            <a href="#" className={s.link}>
                <svg width="32" height="32">
                    <use href={`/icons/sprite.svg#icon-${svg}`}></use>
                </svg>
                <p className={s.text}>{subs}</p>
            </a>
        </div>
    );
};

export default SocialMediaListItem;
