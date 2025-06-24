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
            <a href="#">
                <svg width="32" height="32">
                    <use href={`/icons/sprite.svg#icon-${svg}`}></use>
                </svg>
                <p>{subs}</p>
            </a>
        </div>
    );
};

export default SocialMediaListItem;
