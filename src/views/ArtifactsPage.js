import GlobalHeader from "../components/GlobalHeader";
import { artifactsDatas } from "../database/ArtifactsDatas";
import { useParams } from "react-router-dom";

function ArtifactsPage() {
  let { id } = useParams();
  return (
    <>
      <div className="artifactsPage-main">
        <div className="artifactsPage-header">
          <GlobalHeader></GlobalHeader>
        </div>
        <div className="artifactsPage-content">
          <div className="artifactsPage-content-item">
            <h2>神器資訊：</h2>
          </div>
          <div className="artifactsPage-content-wrap">
            <div>
              <img
                className="artifactsPage-content-wrap-image"
                src={artifactsDatas[id].image1}
              ></img>
            </div>
            <div>
              <img
                className="artifactsPage-content-wrap-image"
                src={artifactsDatas[id].image2}
              ></img>
            </div>
            <div>
              <img
                className="artifactsPage-content-wrap-image"
                src={artifactsDatas[id].image3}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtifactsPage;
