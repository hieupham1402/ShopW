import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>SMOKE WEED</h1>
                <p>Premium Kush visuals, slow smoke, and 420 lounge energy</p>
            </div>

            <video
                ref={videoRef}
                src="/videos/smokeWeed10.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
        </section>
    )
}
export default Hero
