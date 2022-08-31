import GlobalHeader from "../components/GlobalHeader";
import { Button, Form, Input } from "antd";
import { useState } from "react";

function SpeedCalculator() {
  const [formRef] = Form.useForm();
  const [resultFirst, setResultFirst] = useState();
  const [resultSecond, setResultSecond] = useState();

  return (
    <>
      <div className="speedCalculator-main">
        <div className="speedCalculator-header">
          <GlobalHeader></GlobalHeader>
        </div>
        <div className="speedCalculator-content">
          簡單說明：速度計算有二種狀況，請依自己遇到的狀況來填寫並進行計算。
        </div>
        <div className="speedCalculator-content">
          第一種情況為：該場次第一個動的角色為自己的角色，或是對方先動接著換自己動時，以上皆建立在沒有拉條降條的情況下。
          <div className="speedCalculator-content-form">
            <Form layout={"horizontal"} form={formRef}>
              <Form.Item label="請輸入自己角色的速度" name={"mySpeed"}>
                <Input placeholder="請輸入自己的速度" />
              </Form.Item>
              <Form.Item label="請輸入對方攻擊條%數" name={"otherPercentage"}>
                <Input addonAfter="%" placeholder="例：130% 輸入130" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  onClick={() => {
                    const { mySpeed, otherPercentage } =
                      formRef.getFieldValue();
                    let total = mySpeed * otherPercentage * 0.01;
                    setResultFirst(total);
                  }}
                >
                  計算
                </Button>
              </Form.Item>
            </Form>
          </div>
          計算出來對方該角色速度為：{resultFirst}
        </div>
        <div className="speedCalculator-content">
          第二種情況為：對方先動，觸發自己第一動的角色拉條而達到100%的並且第二動的角色在沒有拉條降條的情況下用以下的方式計算。（額外說明：如果自己第二動角色也有觸發拉條，底下輸入可改為自己第三動的角色且沒有觸發拉條降條的情況下來做計算。）
          <div className="speedCalculator-content-form">
            <Form layout={"horizontal"} form={formRef}>
              <Form.Item
                label="請輸入自己第二動角色的速度"
                name={"mySecondSpeed"}
              >
                <Input placeholder="請輸入速度" />
              </Form.Item>
              <Form.Item
                label="請輸入自己第二動的攻擊條%數"
                name={"secondPercentage"}
              >
                <Input addonAfter="%" placeholder="例：85% 輸入85" />
              </Form.Item>
              <Form.Item
                label="請輸入對方第一動的攻擊條%數"
                name={"otherFirstPercentage"}
              >
                <Input addonAfter="%" placeholder="例：130% 輸入130" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  onClick={() => {
                    const {
                      mySecondSpeed,
                      secondPercentage,
                      otherFirstPercentage,
                    } = formRef.getFieldValue();
                    let firstTotal = mySecondSpeed / (secondPercentage * 0.01);
                    let secondTotal = firstTotal * otherFirstPercentage * 0.01;
                    setResultSecond(secondTotal.toFixed(1));
                  }}
                >
                  計算
                </Button>
              </Form.Item>
            </Form>
          </div>
          計算出來對方該角色速度為：{resultSecond}
        </div>
      </div>
    </>
  );
}

export default SpeedCalculator;
