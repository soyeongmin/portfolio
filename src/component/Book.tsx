import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Book = (props: { name: string; hoverAction: (item: string) => void }) => {
  const [currentItem, setCurrentItem] = useState<string>("");
  const [itemColor, setItemColor] = useState<string>("");
  const navigate = useNavigate();
  const goToProjectView = () => {
    navigate("/portfolio/project/" + `${props.name}`);
  };

  const projectHover = () => {
    props.hoverAction(props.name);
    setItemColor("rgba(0,0,0,0)");
  };

  return (
    <BookItem
      onMouseOver={projectHover}
      onMouseOut={() => setItemColor("#e5e5e5")}
      onClick={goToProjectView}
      style={{
        marginTop: props.name.length * 2,
        padding: props.name.length,
      }}
    >
      {}
    </BookItem>
  );
};

const BookItem = styled.div`
  position: relative;
  display: block;
  background-color: #e5e5e5;
  writing-mode: vertical-lr;
  color: #e5e5e5;
  text-align: justify;
  font-family: poppins;
  font-weight: 600;
  &:hover {
    background: linear-gradient(to bottom, #ffcb51, #ff7151, #ffcb51);
    background-position: top;
    background-size: 100% 1100%;
    cursor: pointer;
    animation: animate 1.5s linear infinite;
    transform: rotate(5deg);
    transition-duration: 0.5s;
  }
  @keyframes animate {
    0% {
      background-position: top;
    }
    100% {
      background-position: bottom;
    }
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Book;
