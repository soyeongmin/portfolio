import { useState } from "react";
import styled from "@emotion/styled";
import Book from "./Book";
import projectList from "../projects.json";

const Shelf = () => {
  const [name, setName] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [itemColor, setItemColor] = useState<string>("");

  const showProjectName = (selectedName: string) => {
    setName(selectedName);
    setDuration(
      projectList[projectList.map((p) => p.name).indexOf(selectedName)].duration
    );
  };

  return (
    <Box>
      <ShelfContainer>
        {projectList.map((p, idx) => {
          return <Book key={idx} hoverAction={showProjectName} name={p.name} />;
        })}
      </ShelfContainer>
      <LabelBox>
        <div style={{ fontSize: 15, fontWeight: 200 }}>{name}</div>
        <DurationMark>{duration}</DurationMark>
      </LabelBox>
    </Box>
  );
};

const Box = styled.div`
  position: absolute;
  top: 150px;
  width: 100vw;
`;

const ShelfContainer = styled.div`
  height: 200px;
  margin: 24px auto 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  border: 1px solid #e5e5e5;
  border-style: none none solid;
  background: linear-gradient(to bottom, #221f1c, #3c3b3a);
  @media (max-width: 768px) {
    overflow-x: scroll;
    border: 0.5px solid;
    border-style: none none solid;
    gap: 6px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const LabelBox = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const DurationMark = styled.div`
  padding: 4px 0 0 0;
  font-size: 14px;
  font-weight: 100;
  color: #cdcdcd;
`;

export default Shelf;
