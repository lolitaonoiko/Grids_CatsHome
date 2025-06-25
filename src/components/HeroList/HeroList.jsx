import HeroListItem from '../HeroListItem/HeroListItem';
import { heroData } from '../../data/heroData';

import s from './HeroList.module.css';

const HeroList = () => {
    return (
        <ul className={s.list}>
            {heroData.map(item => (
                <li key={item.id} className={s.listItem}>
                    <HeroListItem img={item.img} img2x={item.img2x} title={item.title} />
                </li>
            ))}
        </ul>
    );
};

export default HeroList;
