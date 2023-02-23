import "./main.css";

function MainText() {
  return (
    <div className="main-text-back">
      <section className="main-text">
        <div class="heading">
          <h1>GEL-NIMBUS 25</h1>
          <h2>What’s new?</h2>
        </div>
        <p>
          The new GEL-NIMBUS™ 25 shoe is more comfortable than ever before. Its
          updated PureGEL™ technology and lightweight FF BLAST™ PLUS ECO
          cushioning deliver extra softness with every step, and a new stretchy
          knit tongue and collar construction provide a more adaptive fit.
        </p>
        <div className="main-button">
          <a href="https://www.asics.com/in/en-in/nimbus25-collection">
            <span>SHOP COLLECTION</span>
          </a>
        </div>
      </section>
    </div>
  );
}

function Main() {
  return (
    <div>
      <div className="main-img">
        <a href="https://www.asics.com/in/en-in/nimbus25-collection">
          <img
            src="https://cms-static.asics.com/media-libraries/88814/file.jpg?20230201075927"
            alt="Gel-Numbus-25"
          />
        </a>
      </div>
      <MainText />
    </div>
  );
}

export default Main;
