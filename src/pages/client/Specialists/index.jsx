import { useNavigate } from "react-router-dom";
import { Wrapper, Cards, Card } from "./styled-index";

function Specialists() {
  const navigate = useNavigate();
  const HendelClick = () => {
    navigate("/specialist");
  };
  return (
    <Wrapper>
      <Cards data-aos="zoom-out">

        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
      </Cards>
      <Cards data-aos="zoom-out">
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
      </Cards>
      <Cards data-aos="zoom-out">
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
      </Cards>
      <Cards data-aos="zoom-out">
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
      </Cards>
      <Cards data-aos="zoom-out">
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick} className="center">
            <a className="cen" href="#"><span className="cent" data-attr="Terepert"></span><span data-attr="Now"></span></a>
          </div>
        </div>
      </Cards>
    </Wrapper>
  );
}

export default Specialists;
