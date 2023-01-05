import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import preparing from "../preparing.svg";
import projectList from "../projects.json";

interface ProjectProps {
  name: string;
  duration: string;
  category: string;
  tags: string[];
}

const ProjectView = () => {
  let { id } = useParams<string>();
  const [projectInfo, setProjectInfo] = useState<ProjectProps>();

  useEffect(() => {
    setProjectInfo(
      projectList[projectList.map((p) => p.name).indexOf(id as string)]
    );
  }, []);

  return (
    <Container>
      <InfoBox>
        {projectInfo && (
          <>
            <div style={{ paddingBottom: 12 }}>{projectInfo.name}</div>
            <InfoList>
              <Subtitle>Duration</Subtitle>
              <div style={{ fontSize: 14, fontWeight: 100 }}>
                {projectInfo.duration}
              </div>
            </InfoList>
            <InfoList>
              <Subtitle>Contribution</Subtitle>
              <div style={{ fontSize: 14, fontWeight: 100 }}>contribution</div>
            </InfoList>
            <InfoList>
              <Subtitle>Category</Subtitle>
              <div style={{ fontSize: 14, fontWeight: 100 }}>
                {projectInfo.category}
              </div>
            </InfoList>
            <TagBox>
              {projectInfo.tags.map((t) => {
                return <Tag>{t}</Tag>;
              })}
            </TagBox>
            {/* <div style={{display:'flex', flexDirection:'row', gap: 8, alignItems:'center', paddingTop:50}}>
                    <div style={{fontSize:14, fontWeight:100}}>Scoop is a helper for students and instructors in online. 
                    Dummy sentences are here. 
                    Dummy sentences are here. 
                    Dummy sentences are here. 
                    Dummy sentences are here. </div>
                </div> */}
          </>
        )}
      </InfoBox>
      <ImageBox>
        <img style={{ textAlign: "center" }} width="50%" src={preparing} />
        <img style={{ textAlign: "center" }} width="50%" src={preparing} />
        <img style={{ textAlign: "center" }} width="50%" src={preparing} />
        <img style={{ textAlign: "center" }} width="50%" src={preparing} />
      </ImageBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 699px) {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  position: fixed;
  right: 0;
  width: 270px;
  height: 100%;
  display: inline-block;
  padding: 100px 20px 0px 20px;
  box-sizing: border-box;
  background-color: #221f1c;
  font-size: 24px;
  font-weight: 300;
  @media (max-width: 699px) {
    display: inline-block;
    position: relative;
    text-align: left;
    padding-top: 60px;
    background-color: #221f1c;
    width: 100%;
    height: 100%;
    font-size: 24px;
    font-weight: 300;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding-top: 6px;
`;

const Subtitle = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #c2c2c2;
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding-top: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 100;
  background-color: #323232;
  border-radius: 4px;
  padding: 4px 6px 4px 6px;
`;

const ImageBox = styled.div`
  display: flex;
  padding-top: 100px;
  width: calc(100% - 280px);
  flex-direction: column;
  align-items: center;
  @media (max-width: 699px) {
    width: auto;
    padding: 32px 20px 32px 20px;
  }
`;

export default ProjectView;
