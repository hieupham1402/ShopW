import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/Rolling.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/hieupm2-Photoroom.png" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-lg">
                        <h2>Kush Lounge in Motion</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Powered by {" "}
                                <span className="text-white">
                                    slow smoke, premium strain visuals
                                </span>
                                , Kush Lounge delivers
                            </p>
                            <p>
                                A dark, cinematic cannabis world with looping video, bold green accents, and relaxed 420 atmosphere.
                            </p>
                            <p>
                                Every scene is tuned around kush culture: curated drops, smoke-heavy motion, premium product energy, and a community-first lounge feeling.
                            </p>
                            <p className="text-primary">Explore the Kush Lounge experience</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Curated</p>
                            <h3>420</h3>
                            <p>visual mood and session energy</p>
                        </div>
                        <div className="space-y-2">
                            <p>Fresh</p>
                            <h3>12+</h3>
                            <p>weekly kush drops and edits</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase
