// CSS is loaded via public folder

const Animated3DSection = () => {
  const dragon1 = '/3d-images/w1.png';
  const dragon2 = '/3d-images/w2.png';
  const dragon3 = '/3d-images/w3.png';
  const dragon4 = '/3d-images/w4.png';
  const dragon5 = '/3d-images/w5.png';
  const dragon6 = '/3d-images/w6.png';
  const dragon7 = '/3d-images/w7.png';
  const dragon8 = '/3d-images/w11.png';
  const dragon9 = '/3d-images/w9.png';
  const dragon10 = '/3d-images/w10.png';
  const modelImg = '/3d-images/hinhtrongsuotRobot.png';
  return (
    <section id="nft-collection" className="banner" style={{
      backgroundColor: '#d2d2d2',
      backgroundImage: `repeating-linear-gradient(
        to right,
        transparent 0 100px,
        #25283b22 100px 101px
      ),
      repeating-linear-gradient(
        to bottom,
        transparent 0 100px,
        #25283b22 100px 101px
      )`,
      position: 'relative',
      minHeight: '100vh'
    }}>
      <div className="slider" style={{ '--quantity': '10' }}>
        <div className="item" style={{ '--position': '1' }}>
          <img src={dragon1} alt="" />
        </div>
        <div className="item" style={{ '--position': '2' }}>
          <img src={dragon2} alt="" />
        </div>
        <div className="item" style={{ '--position': '3' }}>
          <img src={dragon3} alt="" />
        </div>
        <div className="item" style={{ '--position': '4' }}>
          <img src={dragon4} alt="" />
        </div>
        <div className="item" style={{ '--position': '5' }}>
          <img src={dragon5} alt="" />
        </div>
        <div className="item" style={{ '--position': '6' }}>
          <img src={dragon6} alt="" />
        </div>
        <div className="item" style={{ '--position': '7' }}>
          <img src={dragon7} alt="" />
        </div>
        <div className="item" style={{ '--position': '8' }}>
          <img src={dragon8} alt="" />
        </div>
        <div className="item" style={{ '--position': '9' }}>
          <img src={dragon9} alt="" />
        </div>
        <div className="item" style={{ '--position': '10' }}>
          <img src={dragon10} alt="" />
        </div>
      </div>

      <div className="content">
        <h1 data-content="420 FESTIVAL">420</h1>
        <div className="author">
          <h2>DREAMS MARKET</h2>
          <p><b>Cannabis Festival</b></p>
          <p>Join the celebration with music, art, community, and 420 culture.</p>
        </div>
        <div
          className="model"
          style={{ backgroundImage: `url(${modelImg})` }}
        ></div>
      </div>
    </section>
  );
};

export default Animated3DSection;

