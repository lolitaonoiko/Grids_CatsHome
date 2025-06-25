import SocialMediaListItem from '../SocialMediaListItem/SocialMediaListItem';
import { socialMediaData } from '../../data/socialMediaData';

import s from './SocialMediaList.module.css';

const SocialMediaList = () => {
    return (
        <section>
            <h2 className={s.title}>Соцмережі</h2>
            <ul className={s.list}>
                {socialMediaData.map(item => (
                    <li className={s.listItem} key={item.id}>
                        <SocialMediaListItem svg={item.svg} color={item.color} subs={item.subscribers} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SocialMediaList;
