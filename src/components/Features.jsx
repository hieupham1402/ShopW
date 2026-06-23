const cannabisFeatures = [
    {
        label: "Premium Strains",
        value: "Top-shelf kush, curated for flavor, aroma, and smooth sessions.",
    },
    {
        label: "420 Culture",
        value: "A visual world built around smoke, neon green energy, and relaxed community.",
    },
    {
        label: "Fresh Drops",
        value: "Rotating collections, limited batches, and new cannabis-inspired visuals.",
    },
];

const Features = () => {
    return (
        <section id="features" className="weed-feature-section">
            <div className="weed-feature-copy">
                <p className="weed-kicker">Kush experience</p>
                <h2>Experience Cannabis Culture in Full 420 Mode.</h2>
                <p>
                    A darker, cleaner Kush Lounge chapter with premium weed visuals,
                    neon cannabis accents, and a futuristic mecha mascot built for the brand.
                </p>
            </div>

            <div className="weed-feature-stage">
                <div className="weed-glow" />
                <img
                    className="weed-model"
                    src="/3d-images/hinhtrongsuotRobot.png"
                    alt="Cannabis themed mecha mascot"
                />

                <div className="weed-feature-cards">
                    {cannabisFeatures.map((feature) => (
                        <article key={feature.label}>
                            <span>{feature.label}</span>
                            <p>{feature.value}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
