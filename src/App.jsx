import Layout from './components/Layout/Layout';
import AsideList from './components/AsideList/AsideList';
import HeroList from './components/HeroList/HeroList';
import SocialMediaList from './components/SocialMediaList/SocialMediaList';
import VideoSection from './components/VideoSection/VideoSection';

function App() {
    return (
        <>
            <Layout>
                <HeroList />
                <AsideList />
                <SocialMediaList />
                <VideoSection />
            </Layout>
        </>
    );
}

export default App;
