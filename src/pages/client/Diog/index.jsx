import { Card, Cards, Wrapper } from "../Specialists/styled-index";

function Diognostika() {
  return (
    <>
      <Wrapper>
        <Cards data-aos="zoom-out">
          {/* <Card > */}
          <div className="center">
                                        <a className="cen" href="#"><span className="cent" data-attr="MRT"></span><span data-attr="Now"></span></a>
                                    </div>
          {/* </Card> */}
          {/* <Card> */}
          <div className="center">
                                        <a className="cen" href="#"><span className="cent" data-attr="RAQAMLI RENGEN"></span><span data-attr="Now"></span></a>
                                    </div>
          {/* </Card> */}
          {/* <Card> */}
          <div className="center">
                                        <a className="cen" href="#"><span className="cent" data-attr="UZI"></span><span data-attr="Now"></span></a>
                                    </div>
          {/* </Card> */}
        </Cards>
      </Wrapper>
    </>
  );
}

export default Diognostika;
