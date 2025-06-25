import s from './VideoSection.module.css';
const VideoSection = () => {
    return (
        <section className={s.sect}>
            <h2 className={s.title}>Відео з пухнастиками</h2>
            <iframe
                className={s.video}
                src="https://www.youtube.com/embed/5530I_pYjbo?si=5T5Ve8loF0vDq-lH"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </section>
    );
};

export default VideoSection;
