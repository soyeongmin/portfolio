import React from 'react';

const projects = ["Scoop", "Little Dust", "MOIM", "Personal Quiz"];

const Shelf = () => {
    
    return (
    <div>
        <div className='Shelf'>
            {projects.map(e => {
                return <div className='Book' style={{marginTop:e.length*2, }} onClick={()=> alert(`I'm ${e}!`)}> {e}</div>
            })}
        </div>
        <div style={{paddingRight: 20, verticalAlign:'bottom', textAlign:'right'}}>2021 -</div>
      </div>
    )
}

export default Shelf;