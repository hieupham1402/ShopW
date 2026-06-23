import { useEffect } from "react";

const useViewportVideo = (videoRef, { threshold = 0.2, rootMargin = "120px" } = {}) => {
    useEffect(() => {
        const video = videoRef.current;
        if (!video || typeof IntersectionObserver === "undefined") return;

        const playVideo = () => {
            const playPromise = video.play();
            if (playPromise?.catch) playPromise.catch(() => {});
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    playVideo();
                } else {
                    video.pause();
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(video);

        return () => observer.disconnect();
    }, [videoRef, threshold, rootMargin]);
};

export default useViewportVideo;
