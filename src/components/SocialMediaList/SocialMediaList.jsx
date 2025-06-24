import SocialMediaListItem from '../SocialMediaListItem/SocialMediaListItem';
import { socialMediaData } from '../../data/socialMediaData';

const SocialMediaList = () => {
    return (
        <ul>
            {socialMediaData.map(item => (
                <li key={item.id}>
                    <SocialMediaListItem svg={item.svg} color={item.color} subs={item.subscribers} />
                </li>
            ))}
        </ul>
    );
};

export default SocialMediaList;
