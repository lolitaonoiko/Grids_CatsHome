import Layout from './components/Layout/Layout';
import AsideList from './components/AsideList/AsideList';
import HeroList from './components/HeroList/HeroList';
import SocialMediaList from './components/SocialMediaList/SocialMediaList';
import VideoSection from './components/VideoSection/VideoSection';

import './App.css';

function App() {
    return (
        <>
            <Layout>
                <HeroList />
                <section className="section">
                    <AsideList />
                    <SocialMediaList />
                    <VideoSection />
                </section>
            </Layout>
        </>
    );
}

export default App;
