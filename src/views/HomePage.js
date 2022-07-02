import GlobalHeader from "../components/GlobalHeader";
import heroIcon from "../images/icon/Hero.png";
import artifactsIcon from "../images/icon/Artifacts.png";
import materialsIcon from "../images/icon/Materials.png";
import { useState } from "react";
import { heroSearchData } from "../database/HeroSearchData";
import { artifactsSearchData } from "../database/ArtifactsSearchData";
import { Select } from "antd";
import { Link } from "react-router-dom";

const { Option } = Select;

function HomePage() {
  const hero = heroSearchData;
  const artifacts = artifactsSearchData;
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="homepage-main">
        <GlobalHeader></GlobalHeader>
        <div className="homepage-content">
          <div className="homepage-content-text">您需要找甚麼？</div>
          <div className="homepage-content-serch">
            <div className="homepage-input">
              <Select
                showSearch
                placeholder="搜尋英雄及神器"
                optionFilterProp="children"
                size="large"
                onChange={(_, option) => setSelectedItem(option)}
                filterOption={(input, option) =>
                  option.children.includes(input)
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                {hero.map((heroData) => (
                  <Option
                    value={`HeroPage/${heroData.id}`}
                    key={`HeroPage/${heroData.id}`}
                    image={heroData.image}
                  >
                    {heroData.heroName}
                  </Option>
                ))}
                {artifacts.map((data) => (
                  <Option
                    value={`ArtifactsPage/${data.id}`}
                    key={`ArtifactsPage/${data.id}`}
                    image={data.image}
                  >
                    {data.artifactsName}
                  </Option>
                ))}
              </Select>
            </div>
            {selectedItem && (
              <div className="homepage-select-img">
                <Link to={`/ep7-database/${selectedItem.value}`}>
                  <img src={selectedItem?.image}></img>
                </Link>
                <div className="homepage-select-children">
                  {selectedItem.children}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="homepage-footer">
          <div className="homepage-footer-wrapper">
            <div className="homepage-footer-hero">
              <Link to={"/ep7-database/HeroFilterPage"}>
                <img src={heroIcon}></img>
                <div className="homepage-footer-hero-item">英雄</div>
              </Link>
            </div>
            <div className="homepage-footer-artifacts">
              <Link to={"/ep7-database/ArtifactsFilterPage"}>
                <img src={artifactsIcon}></img>
                <div className="homepage-footer-artifacts-item">神器</div>
              </Link>
            </div>
            <div className="homepage-footer-materials">
              <img src={materialsIcon}></img>
              <div className="homepage-footer-materials-item">道具</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
