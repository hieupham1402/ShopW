import { useCallback, useEffect, useRef, useState } from "react";

const highlightShots = [
  { label: "Kush Mode", badge: "HDR 4K" },
  { label: "Smoke Room", badge: "Unlocked" },
  { label: "Strain Overlay", badge: "Live feed" },
];

const telemetry = [
  { label: "Session depth", value: "18 min" },
  { label: "Fresh drops", value: "12+ weekly" },
  { label: "420 mood", value: "High" },
];

const CarLandingSection = () => {
  const iframeRef = useRef(null);
  const frameHostRef = useRef(null);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);

  useEffect(() => {
    const frameHost = frameHostRef.current;
    if (!frameHost || shouldLoadIframe) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoadIframe(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px", threshold: 0.01 }
    );

    observer.observe(frameHost);

    return () => observer.disconnect();
  }, [shouldLoadIframe]);

  const sendMessage = useCallback((type) => {
    const iframeWindow = iframeRef.current?.contentWindow;
    if (!iframeWindow) return;

    iframeWindow.postMessage({ type }, window.location.origin);
  }, []);

  const handleCarouselFocus = useCallback(() => {
    setShouldLoadIframe(true);
    sendMessage("FOCUS_CAROUSEL");
  }, [sendMessage]);

  const handleOpenStandalone = useCallback(() => {
    window.open("/car-landing.html", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <section className="immersive-stage" id="drive">
      <div className="immersive-stage__grid">
        <div className="immersive-stage__copy">
          <span className="eyebrow-chip">
            <span className="dot" />
            Immersive preview
          </span>
          <h2>Kush Lounge rendered in hyperreal smoke.</h2>
          <p>
            Explore a cannabis-focused visual lounge with cinematic lighting,
            slow smoke, neon green accents, and premium strain energy. Toggle
            between hero shots, inspect the kush carousel, and let the whole
            scene breathe in a relaxed 420 rhythm.
          </p>

          <div className="immersive-stage__chips">
            {highlightShots.map(({ label, badge }) => (
              <span key={label}>
                {label}
                <small>{badge}</small>
              </span>
            ))}
          </div>

          <ul className="immersive-stage__list">
            <li>Multi-camera smoke shots tuned for desktop and mobile.</li>
            <li>Animated overlays highlight strains, drops, and lounge moments.</li>
            <li>Dark palette calibrated with kush green accents and soft fog.</li>
          </ul>

          <div className="immersive-stage__actions">
            <button className="connect-wallet-btn" type="button" onClick={handleCarouselFocus}>
              <span>View strain carousel</span>
            </button>
            <button className="ghost-button" type="button" onClick={handleOpenStandalone}>
           CLICK HERE TO HIGH
            </button>
          </div>
        </div>

        <div className="immersive-stage__media">
          <div className="immersive-stage__glow" />
          <div className="immersive-stage__frame" ref={frameHostRef}>
            {shouldLoadIframe && (
              <iframe
                ref={iframeRef}
                src="/car-landing.html"
                title="Kush Lounge immersive preview"
                scrolling="no"
                loading="lazy"
              />
            )}
          </div>
          <div className="immersive-stage__metrics">
            {telemetry.map(({ label, value }) => (
              <article key={label}>
                <p>{value}</p>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarLandingSection;

