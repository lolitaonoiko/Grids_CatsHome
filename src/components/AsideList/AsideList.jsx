import AsideListItem from '../AsideListItem/AsideListItem';
import { asideData } from '../../data/asideData';

import s from './AsideList.module.css';

const AsideList = () => {
    return (
        <ul className={s.list}>
            {asideData.map(item => (
                <li key={item.id}>
                    <AsideListItem img={item.img} img2x={item.img2x} desc={item.description} title={item.title} />
                </li>
            ))}
        </ul>
    );
};

export default AsideList;
