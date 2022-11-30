import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

type props = {
    projectName: string;
    hoverAction: (item:string) => void;
}

const Book = (props:props) => {
    const [currentItem, setCurrentItem] = useState<string>('');
    const [itemColor, setItemColor] = useState<string>('');
    const navigate = useNavigate();
    const movePj = () => {
        navigate("/portfolio/project");
    }

const projectHover = () => {
    props.hoverAction(props.projectName);
    setItemColor("rgba(0,0,0,0)");
};

return (
    <div onMouseOver={projectHover}
        onMouseOut={() => setItemColor('#e5e5e5')} 
        onClick={movePj}
        className='Book' 
        style={{marginTop:props.projectName.length*2, padding:props.projectName.length, backgroundColor:`${itemColor}`}} 
    >{}</div>
)
}

export default Book;