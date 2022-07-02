import { Link } from "react-router-dom";

function GlobalHeader() {
  return (
    <>
      <div className="global-header">
        <Link to={"https://susublace.github.io/ep7-database/"}>
          <div className="global-icon">首頁</div>
        </Link>
        <div className="global-item">
          <Link to={"https://susublace.github.io/ep7-database/HeroFilterPage"}>
            <div className="global-hero">英雄</div>
          </Link>
          <Link
            to={"https://susublace.github.io/ep7-database/ArtifactsFilterPage"}
          >
            <div className="global-artifacts">神器</div>
          </Link>
          <div className="global-materials">道具</div>
        </div>
      </div>
    </>
  );
}

export default GlobalHeader;
