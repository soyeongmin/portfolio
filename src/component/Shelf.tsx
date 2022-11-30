import React, { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Book from './Book';


interface props {
    year: string,
    projects: string[][],
}

const Shelf = (props:props) => {
    const [pj, setPj] = useState<string>('');
    const [duration, setDuration] = useState<string>('');
    const [itemColor, setItemColor] = useState<string>('');
    const showProjectName = (item:string) => {
        setPj(item);
        setDuration(props.projects[props.projects.map(e => e[0]).indexOf(item)][1]);
        // console.log(props.projects.indexOf(item));
    }

    return (
        <div style={{position:'absolute', top:150, width:'100vw'}}>
            <div className='Shelf'>
                {props.projects.map((e, idx) => {
                    return <Book key={idx} hoverAction={showProjectName} projectName={e[0]}/>
                })}
            </div>
            <div style={{display:'flex', padding:8, justifyContent:'center', alignItems: 'center', gap:12}}>
                <div style={{fontSize:15, fontWeight:200}}>{pj}</div>
                <div className='YearMark'>{duration}</div>
            </div>
        </div>
    )
}

export default Shelf;