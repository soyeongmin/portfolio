import React from 'react';
import preparing from '../preparing.svg'

const Project = () => {
    return (
        <div className='PjLayout'>
            <div className='PjInfo'>
                <div style={{paddingBottom: 12}}>Scoop</div>
                <div style={{display:'flex', flexDirection:'row', gap: 8, alignItems:'center', paddingTop:6}}>
                    <div className='PjSubtitle'>Duration</div>
                    <div style={{fontSize:14, fontWeight:100}}>2022.07 - 2022.08</div>
                </div>
                <div style={{display:'flex', flexDirection:'row', gap: 8, alignItems:'center', paddingTop:6}}>
                    <div className='PjSubtitle'>Contribution</div>
                    <div style={{fontSize:14, fontWeight:100}}>70%의 기여도</div>
                </div>
                <div style={{display:'flex', flexDirection:'row', gap: 8, alignItems:'center', paddingTop:6}}>
                    <div className='PjSubtitle'>Category</div>
                    <div style={{fontSize:14, fontWeight:100}}>Product Design</div>
                </div>
                <div style={{display:'flex', flexDirection:'row', gap: 8, alignItems:'center', paddingTop:10, flexWrap:'wrap'}}>
                    <div style={{fontSize:14, fontWeight:100, backgroundColor:'#323232', borderRadius:4, padding:'4px 6px 4px 6px'}}>Application</div>
                    <div style={{fontSize:14, fontWeight:100, backgroundColor:'#323232', borderRadius:4, padding:'4px 6px 4px 6px'}}>Online Learning</div>
                    <div style={{fontSize:14, fontWeight:100, backgroundColor:'#323232', borderRadius:4, padding:'4px 6px 4px 6px'}}>UXUI</div>
                    <div style={{fontSize:14, fontWeight:100, backgroundColor:'#323232', borderRadius:4, padding:'4px 6px 4px 6px'}}>Tangible Product</div>
                    <div style={{fontSize:14, fontWeight:100, backgroundColor:'#323232', borderRadius:4, padding:'4px 6px 4px 6px'}}>Education</div>
                </div>
                {/* <div style={{display:'flex', flexDirection:'row', gap: 8, alignItems:'center', paddingTop:50}}>
                    <div style={{fontSize:14, fontWeight:100}}>Scoop is a helper for students and instructors in online. 
                    Dummy sentences are here. 
                    Dummy sentences are here. 
                    Dummy sentences are here. 
                    Dummy sentences are here. </div>
                </div> */}
            </div>
            <div className='PjImages'>
                <img style={{textAlign:'center'}} width='50%' src={preparing} />
                <img style={{textAlign:'center'}} width='50%' src={preparing} />
                <img style={{textAlign:'center'}} width='50%' src={preparing} />
                <img style={{textAlign:'center'}} width='50%' src={preparing} />
            </div>
        </div>
    )
}

export default Project;