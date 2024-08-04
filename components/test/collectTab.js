import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import collectStyles from '@/styles/collect.module.css';

// icon
import { TbHeartMinus } from 'react-icons/tb';

export default function ControllTab() {
  const [key, setKey] = useState('camp');

  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className={collectStyles.tabsStyle}
      id="collectTabs"
    >
      <Tab
        eventKey="camp"
        title={<span className={collectStyles.customTab}>營地</span>}
        className={collectStyles.tabStyle}
      >
        <div className={collectStyles.campContent}>
          <Card className={collectStyles.CardStyle}>
            <Card.Img
              variant="top"
              src="/pic/2.jpg"
              className={collectStyles.CardImg}
            />
            <Card.Body className={collectStyles.CardBodyStyle}>
              <div className={collectStyles.CardHStyle}>
                <div>
                  <div>緣溪行森林營地</div>
                  <div className={collectStyles.CardTitleStyle}>
                    <div className={collectStyles.CardTitle1Style}>標籤</div>
                    <div className={collectStyles.CardTitle2Style}>中部</div>
                  </div>
                </div>
              </div>
              <button variant="primary" className={collectStyles.CardBtn}>
                <TbHeartMinus className={collectStyles.CardIcon} />
              </button>
            </Card.Body>
          </Card>
          <Card className={collectStyles.CardStyle}>
            <Card.Img
              variant="top"
              src="/pic/2.jpg"
              className={collectStyles.CardImg}
            />
            <Card.Body className={collectStyles.CardBodyStyle}>
              <div className={collectStyles.CardHStyle}>
                <div>
                  <div>緣溪行森林營地</div>
                  <div className={collectStyles.CardTitleStyle}>
                    <div className={collectStyles.CardTitle1Style}>標籤</div>
                    <div className={collectStyles.CardTitle2Style}>中部</div>
                  </div>
                </div>
              </div>
              <button variant="primary" className={collectStyles.CardBtn}>
                <TbHeartMinus className={collectStyles.CardIcon} />
              </button>
            </Card.Body>
          </Card>
          <Card className={collectStyles.CardStyle}>
            <Card.Img
              variant="top"
              src="/pic/2.jpg"
              className={collectStyles.CardImg}
            />
            <Card.Body className={collectStyles.CardBodyStyle}>
              <div className={collectStyles.CardHStyle}>
                <div>
                  <div>緣溪行森林營地</div>
                  <div className={collectStyles.CardTitleStyle}>
                    <div className={collectStyles.CardTitle1Style}>標籤</div>
                    <div className={collectStyles.CardTitle2Style}>中部</div>
                  </div>
                </div>
              </div>
              <button variant="primary" className={collectStyles.CardBtn}>
                <TbHeartMinus className={collectStyles.CardIcon} />
              </button>
            </Card.Body>
          </Card>
          <Card className={collectStyles.CardStyle}>
            <Card.Img
              variant="top"
              src="/pic/2.jpg"
              className={collectStyles.CardImg}
            />
            <Card.Body className={collectStyles.CardBodyStyle}>
              <div className={collectStyles.CardHStyle}>
                <div>
                  <div>緣溪行森林營地</div>
                  <div className={collectStyles.CardTitleStyle}>
                    <div className={collectStyles.CardTitle1Style}>標籤</div>
                    <div className={collectStyles.CardTitle2Style}>中部</div>
                  </div>
                </div>
              </div>
              <button variant="primary" className={collectStyles.CardBtn}>
                <TbHeartMinus className={collectStyles.CardIcon} />
              </button>
            </Card.Body>
          </Card>
          <Card className={collectStyles.CardStyle}>
            <Card.Img
              variant="top"
              src="/pic/2.jpg"
              className={collectStyles.CardImg}
            />
            <Card.Body className={collectStyles.CardBodyStyle}>
              <div className={collectStyles.CardHStyle}>
                <div>
                  <div>緣溪行森林營地</div>
                  <div className={collectStyles.CardTitleStyle}>
                    <div className={collectStyles.CardTitle1Style}>標籤</div>
                    <div className={collectStyles.CardTitle2Style}>中部</div>
                  </div>
                </div>
              </div>
              <button variant="primary" className={collectStyles.CardBtn}>
                <TbHeartMinus className={collectStyles.CardIcon} />
              </button>
            </Card.Body>
          </Card>
        </div>
      </Tab>

      <Tab
        eventKey="profile"
        title={<span className={collectStyles.customTab}>露營用品</span>}
        className={collectStyles.tabStyle}
      >
        <div className={collectStyles.campContent}>
          <Card className={collectStyles.CardStyle}>
            <Card.Img
              variant="top"
              src="/pic/product.webp"
              className={collectStyles.CardImg}
            />
            <Card.Body className={collectStyles.CardBody2Style}>
              <div>
                <div className={collectStyles.CardH2Style}>
                  CAMPFIRE戰焰露營椅【極黑】
                </div>
                <div className={collectStyles.CardTitleStyle}>
                  <div className={collectStyles.CardTitle1Style}>CAMPFIRE</div>
                  <div className={collectStyles.CardTitle3Style}>露營椅</div>
                </div>
              </div>
              <button variant="primary" className={collectStyles.CardBtn}>
                <TbHeartMinus className={collectStyles.CardIcon2} />
              </button>
            </Card.Body>
          </Card>
          <Card className={collectStyles.CardStyle}>
            <Card.Img
              variant="top"
              src="/pic/product.webp"
              className={collectStyles.CardImg}
            />
            <Card.Body className={collectStyles.CardBody2Style}>
              <div>
                <div className={collectStyles.CardH2Style}>
                  CAMPFIRE戰焰露營椅【極黑】
                </div>
                <div className={collectStyles.CardTitleStyle}>
                  <div className={collectStyles.CardTitle1Style}>CAMPFIRE</div>
                  <div className={collectStyles.CardTitle3Style}>露營椅</div>
                </div>
              </div>
              <button variant="primary" className={collectStyles.CardBtn}>
                <TbHeartMinus className={collectStyles.CardIcon2} />
              </button>
            </Card.Body>
          </Card>
          <Card className={collectStyles.CardStyle}>
            <Card.Img
              variant="top"
              src="/pic/product.webp"
              className={collectStyles.CardImg}
            />
            <Card.Body className={collectStyles.CardBody2Style}>
              <div>
                <div className={collectStyles.CardH2Style}>
                  CAMPFIRE戰焰露營椅【極黑】
                </div>
                <div className={collectStyles.CardTitleStyle}>
                  <div className={collectStyles.CardTitle1Style}>CAMPFIRE</div>
                  <div className={collectStyles.CardTitle3Style}>露營椅</div>
                </div>
              </div>
              <button variant="primary" className={collectStyles.CardBtn}>
                <TbHeartMinus className={collectStyles.CardIcon2} />
              </button>
            </Card.Body>
          </Card>
          <Card className={collectStyles.CardStyle}>
            <Card.Img
              variant="top"
              src="/pic/product.webp"
              className={collectStyles.CardImg}
            />
            <Card.Body className={collectStyles.CardBody2Style}>
              <div>
                <div className={collectStyles.CardH2Style}>
                  CAMPFIRE戰焰露營椅【極黑】
                </div>
                <div className={collectStyles.CardTitleStyle}>
                  <div className={collectStyles.CardTitle1Style}>CAMPFIRE</div>
                  <div className={collectStyles.CardTitle3Style}>露營椅</div>
                </div>
              </div>
              <button variant="primary" className={collectStyles.CardBtn}>
                <TbHeartMinus className={collectStyles.CardIcon2} />
              </button>
            </Card.Body>
          </Card>
          <Card className={collectStyles.CardStyle}>
            <Card.Img
              variant="top"
              src="/pic/product.webp"
              className={collectStyles.CardImg}
            />
            <Card.Body className={collectStyles.CardBody2Style}>
              <div>
                <div className={collectStyles.CardH2Style}>
                  CAMPFIRE戰焰露營椅【極黑】
                </div>
                <div className={collectStyles.CardTitleStyle}>
                  <div className={collectStyles.CardTitle1Style}>CAMPFIRE</div>
                  <div className={collectStyles.CardTitle3Style}>露營椅</div>
                </div>
              </div>
              <button variant="primary" className={collectStyles.CardBtn}>
                <TbHeartMinus className={collectStyles.CardIcon2} />
              </button>
            </Card.Body>
          </Card>
        </div>
      </Tab>
    </Tabs>
  );
}
