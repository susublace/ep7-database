import { Link } from "react-router-dom";

function GlobalHeader() {
  return (
    <>
      <div className="global-header">
        <Link to={"/"}>
          <div className="global-icon">首頁</div>
        </Link>
        <div className="global-item">
          <Link to={"/epic7/HeroFilterPage"}>
            <div className="global-hero">英雄</div>
          </Link>
          <Link to={"/epic7/ArtifactsFilterPage"}>
            <div className="global-artifacts">神器</div>
          </Link>
          <div className="global-materials">道具</div>
        </div>
      </div>
    </>
  );
}

export default GlobalHeader;
