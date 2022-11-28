import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import ScrollHorizontal from 'react-scroll-horizontal';


interface props {
    year: string,
    projects: string[],
}

const Shelf = (props:props) => {
    const navigate = useNavigate();
    const movePj = () => {
        navigate("/portfolio/project");
    }

    return (
        <div>
            <div className='Shelf'>
                {props.projects.map((e, idx) => {
                    return <div key={idx} className='Book' style={{marginTop:e.length*2, }} onClick={movePj}> {e}</div>
                })}
            </div>
            <div className='YearMark'>{props.year}</div>
        </div>
    )
}

export default Shelf;