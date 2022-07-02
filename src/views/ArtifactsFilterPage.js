import GlobalHeader from "../components/GlobalHeader";
import { artifactsSearchData } from "../database/ArtifactsSearchData";
import { useEffect, useState } from "react";
import { Checkbox, Divider, Popover } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CheckboxGroup = Checkbox.Group;

const ArtifactsDatas = ({ options, type, text, setMultipleChecked }) => {
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

  const artifactsCheckbox = (
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
      <Popover placement="topLeft" content={artifactsCheckbox} trigger="click">
        <a>
          {text}
          <DownOutlined />
        </a>
      </Popover>
    </>
  );
};

function ArtifactsFilterPage() {
  const [renderList, setRenderList] = useState(null);
  const [multipleChecked, setMultipleChecked] = useState({});

  useEffect(() => {
    const list = multiFilter(artifactsSearchData, multipleChecked);
    setRenderList(list);
  }, [multipleChecked]);

  function multiFilter(artifactsArray, filters) {
    const firstFilter = artifactsArray?.filter((artifacts) => {
      return (
        filters?.stars?.includes(artifacts.stars) &&
        filters?.profession?.includes(artifacts.profession)
      );
    });

    return firstFilter;
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
        { label: "全職業", value: "all" },
        { label: "戰士", value: "Warrior" },
        { label: "騎士", value: "Knight" },
        { label: "魔導士", value: "Mage" },
        { label: "盜賊", value: "Thief" },
        { label: "射手", value: "Ranger" },
        { label: "精靈師", value: "Soul Weaver" },
      ],
    },
  ];

  return (
    <>
      <div className="ArtifactsFilterPage-main">
        <div className="ArtifactsFilterPage-header">
          <GlobalHeader></GlobalHeader>
        </div>
        <div className="ArtifactsFilterPage-content">
          <div className="ArtifactsFilterPage-content-artifactdata">
            {dropDownType.map((data) => (
              <div
                className="ArtifactsFilterPage-content-artifactdata-item"
                key={data.type}
              >
                <ArtifactsDatas
                  options={data.options}
                  type={data.type}
                  text={data.text}
                  setMultipleChecked={setMultipleChecked}
                ></ArtifactsDatas>
              </div>
            ))}
          </div>
          <div className="ArtifactsFilterPage-content-wrap">
            {renderList?.map((artifacts) => (
              <div
                className="ArtifactsFilterPage-content-wrap-item"
                key={artifacts.id}
              >
                <Link to={`/ep7-database/ArtifactsPage/${artifacts.id}`}>
                  <img className="Artifacts-image" src={artifacts.image}></img>
                </Link>
                <div>{artifacts.artifactsName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtifactsFilterPage;
