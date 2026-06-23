import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const highlightVideos = [
    "/videos/smoke1.mp4",
    "/videos/smoke2.mp4",
    "/videos/smoke3.mp4",
    "/videos/smoke5.mp4",
];

const HighlightVideo = ({ src, label }) => (
    <video
        src={src}
        aria-label={label}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
    />
);

const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id="highlights">
            <h2>Enter the Kush Lounge.</h2>
            {/* <h3>Drop your own .mp4 clips into the cannabis highlight wall.</h3> */}

            <div className="masonry">
                <div className="left-column">
                    <div className="highlight-video-card large">
                        <HighlightVideo src={highlightVideos[0]} label="Premium cannabis atmosphere video" />
                        <p>Premium strain visuals with slow smoke, rich color, and 420 energy.</p>
                    </div>
                    <div className="highlight-video-card compact">
                        <HighlightVideo src={highlightVideos[1]} label="Cannabis lounge video" />
                        <p>Fresh drops, limited kush batches, and relaxed community perks.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="highlight-video-card compact apple-gradient">
                        <HighlightVideo src={highlightVideos[2]} label="Cannabis collectibles video" />
                        <p>Build a visual identity around <span>weed culture.</span></p>
                    </div>
                    <div className="highlight-video-card large">
                        <HighlightVideo src={highlightVideos[3]} label="420 lounge video" />
                        <p>Turn every section into a
                            <span className="green-gradient">{' '}420 lounge{' '}</span>
                            with motion-first product storytelling.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights
