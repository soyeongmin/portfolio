import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Gnb = () => {
  const navigate = useNavigate();
  const moveHome = () => {
    navigate("/portfolio");
  };
  return (
    <NavTab>
      <LogoText onClick={moveHome}>Soyeong Min</LogoText>
      <MenuGroup>
        <button
          onClick={() =>
            window.open(
              "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:bdedef33-e520-3620-afa6-46330773e2b7"
            )
          }
        >
          resume
        </button>
        <button onClick={() => alert("Wait a month")}>contact</button>
      </MenuGroup>
    </NavTab>
  );
};

const NavTab = styled.div`
  position: fixed;
  width: 100%;
  padding: 20px 30px 20px 30px;
  z-index: 10;
  display: inline-block;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  :hover {
    color: linear-gradient(to right, #ffcb51, #ff7151);
  }
  @media (max-width: 768px) {
    padding: 16px 20px 16px 20px;
  }
`;

const LogoText = styled.div`
  display: inline;
  font-size: 16px;
  color: #e5e5e5;
  text-decoration-line: rgba(104, 26, 26, 0);
  cursor: pointer;
  :hover {
    color: rgb(127, 157, 255);
    text-decoration-line: rgba(104, 26, 26, 0);
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const MenuGroup = styled.div`
  display: flex;
  gap: 20px;
  float: right;
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export default Gnb;
