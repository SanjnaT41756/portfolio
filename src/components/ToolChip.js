import React from 'react';
import '../styles/theme.css';
import '../styles/ToolChip.css';

const ToolChip = ({ chipList }) => {
    return (
        <div className='block-group'>
            {chipList.map((word, index) => (
                <div key={index} className="chip">
                   {/* <p className="paragraph"> */}
                        <p className="small-content">{word}</p>
                    {/* </p> */}
                </div>
            ))}
        </div>
    );
};

export default ToolChip;