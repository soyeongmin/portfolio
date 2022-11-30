import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Gnb = () => {
    const navigate = useNavigate();
    const moveHome = () => {
        navigate("/portfolio");
    }
    return (
        <div className='Gnb'>
            <Link to="/portfolio">
                <div className='Home_text'>Soyeong Min</div>
            </Link>
            <div className='BtnGroup'>
              <button onClick={() => alert("I'm resume")}>resume</button>
              <button onClick={() => alert("Wait a month")}>contact</button>
            </div>
        </div>
    )
}

export default Gnb;