import React, { useState, useTransition } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { Wrapper } from "./styled-index";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Buttons() {
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
      <ul>
        <li className="lidrop">
          <a href="#" className="open">
            {t("Header.3")} <i className="bx bxs-chevron-down"></i>
          </a>
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
        </li>
        <li>
          <a href="#">
            <Link to="doctors">{t("Header.4")}</Link>
          </a>
        </li>
        <li className="open2">
          <a href="#" className="open3">
            {t("Header.5")}
            <i className="bx bxs-chevron-down"></i>
          </a>
          <div className="flexitem1">
            <a href="#">{t("Header.10")}</a>
            <a href="#">
              <Link to="/diagnostics">{t("Header.11")}</Link>
            </a>
          </div>
        </li>
        <li>
          <a href="#">
            <Link to="/news">{t("Header.6")} </Link>
          </a>
        </li>
        <li>
          <div className="flex-item">
            <Link to="/hamkor">{t("Header.7")}</Link>
          </div>
        </li>
        <li>
          <a href="#">{t("Header.8")} </a>
        </li>
      </ul>
    </Wrapper>
  );
}
