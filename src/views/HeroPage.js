import GlobalHeader from "../components/GlobalHeader";
import { heroDatas } from "../database/HeroDatas";
import { useParams } from "react-router-dom";

function HeroPage() {
  let { id } = useParams();
  return (
    <>
      <div className="heropage-main">
        <div className="heropage-header">
          <GlobalHeader></GlobalHeader>
        </div>
        <div className="heropage-content">
          <div className="heropage-content-items">
            <h2>英雄資訊（皆為六星滿等滿覺醒的素質）</h2>
            <ul>
              <li className="heropage-content-items-wrap">
                <div className="heropage-content-items-type">攻擊力</div>
                <div>{heroDatas[id].ATK}</div>
              </li>
              <li className="heropage-content-items-wrap">
                <div className="heropage-content-items-type">HP</div>
                <div>{heroDatas[id].HP}</div>
              </li>
              <li className="heropage-content-items-wrap">
                <div className="heropage-content-items-type">速度</div>
                <div>{heroDatas[id].speed}</div>
              </li>
              <li className="heropage-content-items-wrap">
                <div className="heropage-content-items-type">防禦</div>
                <div>{heroDatas[id].DEF}</div>
              </li>
              <li className="heropage-content-items-wrap">
                <div className="heropage-content-items-type">爆擊率</div>
                <div>{heroDatas[id].CriticalHitChance}%</div>
              </li>
              <li className="heropage-content-items-wrap">
                <div className="heropage-content-items-type">爆擊傷害</div>
                <div>{heroDatas[id].CriticalHitDamage}%</div>
              </li>
              <li className="heropage-content-items-wrap">
                <div className="heropage-content-items-type">夾攻率</div>
                <div>{heroDatas[id].DualAttackChance}%</div>
              </li>
              <li className="heropage-content-items-wrap">
                <div className="heropage-content-items-type">效果命中</div>
                <div>{heroDatas[id].Effectiveness}%</div>
              </li>
              <li className="heropage-content-items-wrap">
                <div className="heropage-content-items-type">效果抵抗</div>
                <div>{heroDatas[id].EffectResistance}%</div>
              </li>
            </ul>
          </div>
          <div className="heropage-content-items-herosec">
            <span>
              <img
                className="heropage-content-image"
                src={heroDatas[id].image}
              ></img>
            </span>
            <h3>{heroDatas[id].heroName}</h3>
          </div>
        </div>
        <div className="heropage-footer">
          <div className="heropage-footer-items">
            <h4>技能資訊：</h4>
          </div>
          <div className="heropage-footer-wrap">
            <div>
              <p>技能一</p>
              <img
                className="heropage-footer-image"
                src={heroDatas[id].skill1}
              ></img>
            </div>
            <div>
              <p>技能二</p>
              <img
                className="heropage-footer-image"
                src={heroDatas[id].skill2}
              ></img>
            </div>
            <div>
              <p>技能三</p>
              <img
                className="heropage-footer-image"
                src={heroDatas[id].skill3}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
