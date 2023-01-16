import React, { useState, useTransition } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { Wrapper } from "./styled-index";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Buttons() {
  const [hov, setHov] = useState(false);
  const [aa, setAa] = useState(false);

  const [hov1, setHov1] = useState(false);
  const [aa1, setAa1] = useState(false);

  const [hov2, setHov2] = useState(false);
  const [aa2, setAa2] = useState(false);

  const [isHover1, toggleHover1] = React.useState(false);
  const toggleHoverMenu1 = () => {
    toggleHover1(!isHover1);
  };
  const [isHover2, toggleHover2] = React.useState(false);
  const toggleHoverMenu2 = () => {
    toggleHover2(!isHover2);
  };
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <Wrapper>
      <ul className="records">
        <li className="rec_ali">
          {aa ? (
            <a
              href="#"
              onClick={() => {
                setHov(false);
                setAa(false);
              }}
            >
              {t("Header.3")} <i className="bx bxs-chevron-down"></i>
            </a>
          ) : (
            <a
              href="#"
              onClick={() => {
                setHov(true);
                setAa(true);
              }}
            >
              {t("Header.3")} <i className="bx bxs-chevron-down"></i>
            </a>
          )}
          {hov ? (
            <div className="flexitem">
              <a href="#">
                <Link to="/specialists">{t("Header.10")}</Link>
              </a>
              <a href="#">
                <Link to="/diagnostics">{t("Header.11")}</Link>
              </a>
              <a href="#">
                <Link to="/fizo">{t("Header.9")}</Link>
              </a>
            </div>
          ) : null}
        </li>
        <li  className="rec_ali">
          <a href="#">
            <Link to="doctors">{t("Header.4")}</Link>
          </a>
        </li>
        <li  className="rec_ali">
          <div className="flex-item">
            {aa1 ? (
              <a
                href="#"
                onClick={() => {
                  setHov1(false);
                  setAa1(false);
                }}
              >
                {t("Header.5")} <i className="bx bxs-chevron-down"></i>
              </a>
            ) : (
              <a
                href="#"
                onClick={() => {
                  setHov1(true);
                  setAa1(true);
                }}
              >
                {t("Header.5")} <i className="bx bxs-chevron-down"></i>
              </a>
            )}
            {hov1 ? (
              <div className="flexitem">
                <a href="#">{t("Header.12")}</a>
                <a href="#">
                  <Link to="/diagnostics">{t("Header.13")}</Link>
                </a>
                <a href="#">
                  <Link to="/diagnostics">{t("Header.14")}</Link>
                </a>
                 <a href="#">
                  <Link to="/diagnostics">{t("Header.15")}</Link>
                </a>
              </div>
              
            ) : null}
            
          </div>
        </li>
        <li  className="rec_ali">
          <a href="#">
            <Link to="/news">{t("Header.6")} </Link>
          </a>
        </li>
        <li  className="rec_ali">
          <div className="flex-item">
            <Link to="/hamkor">{t("Header.7")}</Link>
          </div>
        </li>
        <li className="rec_ali" >
          <a href="#">{t("Header.8")} </a>
        </li>
      </ul>
    </Wrapper>
  );
}
