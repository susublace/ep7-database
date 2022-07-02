import GlobalHeader from "../components/GlobalHeader";
import { heroSearchData } from "../database/HeroSearchData";
import { useEffect, useState } from "react";
import { Checkbox, Divider, Popover } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CheckboxGroup = Checkbox.Group;

const HeroDatas = ({ options, type, text, setMultipleChecked }) => {
  const [checkedList, setCheckedList] = useState(
    options.map((option) => option.value)
  );
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    setMultipleChecked((prev) => {
      return {
        ...prev,
        [type]: checkedList,
      };
    });
  }, [checkedList]);
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options.length);
    setCheckAll(list.length === options.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? options.map((o) => o.value) : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const heroCheckbox = (
    <div style={{ width: "250px" }}>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        全部
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={options}
        value={checkedList}
        onChange={onChange}
      />
    </div>
  );

  return (
    <>
      <Popover placement="topLeft" content={heroCheckbox} trigger="click">
        <a>
          {text}
          <DownOutlined />
        </a>
      </Popover>
    </>
  );
};

function HeroFilterPage() {
  const [renderList, setRenderList] = useState(null);
  const [multipleChecked, setMultipleChecked] = useState({});

  useEffect(() => {
    const list = multiFilter(heroSearchData, multipleChecked);
    setRenderList(list);
  }, [multipleChecked]);

  function multiFilter(heroArray, filters) {
    const firstFilter = heroArray?.filter((hero) => {
      return (
        filters?.stars?.includes(hero.stars) &&
        filters?.profession?.includes(hero.profession) &&
        filters?.attributes?.includes(hero.attributes)
      );
    });
    console.log(firstFilter);

    let filterSpecialEffect = [];
    firstFilter.filter((hero) => {
      for (const se of hero.specialEffect) {
        if (filters?.specialEffect?.includes(se)) {
          filterSpecialEffect.push(hero);
        }
      }
    });
    filterSpecialEffect = filterSpecialEffect.filter((hero, index, arr) => {
      return arr.indexOf(hero) === index;
    });

    let filterSpecialBuff = [];
    filterSpecialEffect.filter((hero) => {
      for (const sb of hero.specialBuff) {
        if (filters?.specialBuff?.includes(sb)) {
          filterSpecialBuff.push(hero);
        }
      }
    });
    filterSpecialBuff = filterSpecialBuff.filter((hero, index, arr) => {
      return arr.indexOf(hero) === index;
    });

    let filterBuff = [];
    filterSpecialBuff.filter((hero) => {
      for (const buff of hero.buff) {
        if (filters?.buff?.includes(buff)) {
          filterBuff.push(hero);
        }
      }
    });
    filterBuff = filterBuff.filter((hero, index, arr) => {
      return arr.indexOf(hero) === index;
    });

    let filterDebuff = [];
    filterBuff.filter((hero) => {
      for (const debuff of hero.debuff) {
        if (filters?.debuff?.includes(debuff)) {
          filterDebuff.push(hero);
        }
      }
    });
    filterDebuff = filterDebuff.filter((hero, index, arr) => {
      return arr.indexOf(hero) === index;
    });

    return filterDebuff;
  }

  const dropDownType = [
    {
      text: "稀有度",
      type: "stars",
      options: [
        { label: "三星", value: 3 },
        { label: "四星", value: 4 },
        { label: "五星", value: 5 },
      ],
    },
    {
      text: "英雄職業",
      type: "profession",
      options: [
        { label: "戰士", value: "Warrior" },
        { label: "騎士", value: "Knight" },
        { label: "魔導士", value: "Mage" },
        { label: "盜賊", value: "Thief" },
        { label: "射手", value: "Ranger" },
        { label: "精靈師", value: "Soul Weaver" },
      ],
    },
    {
      text: "屬性",
      type: "attributes",
      options: [
        { label: "火", value: "fire" },
        { label: "水", value: "water" },
        { label: "木", value: "earth" },
        { label: "光", value: "light" },
        { label: "暗", value: "dark" },
      ],
    },
  ];

  const heroBuffType = [
    {
      text: "buff",
      type: "buff",
      options: [
        { label: "攻擊力增加", value: "攻擊力增加" },
        { label: "攻擊力大幅增加", value: "攻擊力大幅增加" },
        { label: "迴避增加", value: "迴避增加" },
        { label: "持續恢復", value: "持續恢復" },
        { label: "免疫", value: "免疫" },
        { label: "反射", value: "反射" },
        { label: "不死", value: "不死" },
        { label: "隱身", value: "隱身" },
        { label: "甦醒", value: "甦醒" },
        { label: "防禦力增加", value: "防禦力增加" },
        { label: "速度提升", value: "速度提升" },
        { label: "暴擊率增加", value: "暴擊率增加" },
        { label: "暴擊抗性增加", value: "暴擊抗性增加" },
        { label: "技能傷害無效", value: "技能傷害無效" },
        { label: "防護罩", value: "防護罩" },
        { label: "效果抗性增加", value: "效果抗性增加" },
        { label: "效果命中增加", value: "效果命中增加" },
        { label: "無敵", value: "無敵" },
        { label: "反擊", value: "反擊" },
        { label: "暴擊傷害增加", value: "暴擊傷害增加" },
        { label: "護衛", value: "護衛" },
        { label: "無buff", value: "無buff" },
      ],
    },
    {
      text: "debuff",
      type: "debuff",
      options: [
        { label: "攻擊力減少", value: "攻擊力減少" },
        { label: "防禦力減少", value: "防禦力減少" },
        { label: "速度下降", value: "速度下降" },
        { label: "暈眩", value: "暈眩" },
        { label: "睡眠", value: "睡眠" },
        { label: "命中率減少", value: "命中率減少" },
        { label: "吸血之手", value: "吸血之手" },
        { label: "中毒", value: "中毒" },
        { label: "挑釁", value: "挑釁" },
        { label: "標靶", value: "標靶" },
        { label: "無法恢復", value: "無法恢復" },
        { label: "沉默", value: "沉默" },
        { label: "無法獲得強化效果", value: "無法獲得強化效果" },
        { label: "魔法釘", value: "魔法釘" },
        { label: "燒傷", value: "燒傷" },
        { label: "出血", value: "出血" },
        { label: "炸彈", value: "炸彈" },
        { label: "詛咒", value: "詛咒" },
        { label: "束縛", value: "束縛" },
        { label: "指定挑釁", value: "指定挑釁" },
        { label: "封印", value: "封印" },
        { label: "無debuff", value: "無debuff" },
      ],
    },
    {
      text: "特殊buff",
      type: "specialBuff",
      options: [
        { label: "狂氣", value: "狂氣" },
        { label: "魄力", value: "魄力" },
        { label: "歌姬", value: "歌姬" },
        { label: "惹人愛", value: "惹人愛" },
        { label: "激怒", value: "激怒" },
        { label: "心眼", value: "心眼" },
        { label: "妄想", value: "妄想" },
        { label: "鬼化", value: "鬼化" },
        { label: "降神", value: "降神" },
        { label: "識破", value: "識破" },
        { label: "龍眼", value: "龍眼" },
        { label: "共享弱點", value: "共享弱點" },
        { label: "喀戎之鎖", value: "喀戎之鎖" },
        { label: "無特殊buff", value: "無特殊buff" },
      ],
    },
    {
      text: "特殊效果",
      type: "specialEffect",
      options: [
        { label: "夾攻", value: "夾攻" },
        { label: "貫穿", value: "貫穿" },
        { label: "追加回合", value: "追加回合" },
        { label: "滅亡", value: "滅亡" },
        { label: "激爆", value: "激爆" },
        { label: "減少靈魂", value: "減少靈魂" },
        { label: "無法獲得靈魂", value: "無法獲得靈魂" },
        { label: "傷口", value: "傷口" },
        { label: "竊取強化效果", value: "竊取強化效果" },
        { label: "解除強化效果", value: "解除強化效果" },
        { label: "解除弱化效果", value: "解除弱化效果" },
        { label: "復活", value: "復活" },
        { label: "速攻值減少", value: "速攻值減少" },
        { label: "速攻值增加", value: "速攻值增加" },
        { label: "重置技能時間", value: "重置技能時間" },
        { label: "資源減少", value: "資源減少" },
        { label: "無法反擊", value: "無法反擊" },
        { label: "無特殊效果", value: "無特殊效果" },
      ],
    },
  ];

  return (
    <>
      <div className="herofilterpage-main">
        <div className="herofilterpage-header">
          <GlobalHeader></GlobalHeader>
        </div>
        <div className="herofilterpage-content">
          <div className="herofilterpage-content-herodata">
            {dropDownType.map((data) => (
              <div
                className="herofilterpage-content-herodata-item"
                key={data.type}
              >
                <HeroDatas
                  options={data.options}
                  type={data.type}
                  text={data.text}
                  setMultipleChecked={setMultipleChecked}
                ></HeroDatas>
              </div>
            ))}
          </div>
          <div className="herofilterpage-content-herobuff">
            {heroBuffType.map((data) => (
              <div
                className="herofilterpage-content-herobuff-item"
                key={data.type}
              >
                <HeroDatas
                  options={data.options}
                  type={data.type}
                  text={data.text}
                  setMultipleChecked={setMultipleChecked}
                ></HeroDatas>
              </div>
            ))}
          </div>
          <div className="herofilterpage-content-wrap">
            {renderList?.map((hero) => (
              <div className="herofilterpage-content-wrap-item" key={hero.id}>
                <Link
                  to={`https://susublace.github.io/ep7-database/HeroPage/${hero.id}`}
                >
                  <img className="hero-image" src={hero.image}></img>
                </Link>
                <div>{hero.heroName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroFilterPage;
