import React from 'react'

const FooterAvatar = () => {
    return (
        <div>
            <h2 className="ui header "
                style={{
                    width: '100%',
                    backgroundColor: '#f9f9f9',
                    padding: '5px',
                    position: 'fixed',
                    bottom: '0',
                    left: '0',
                    zIndex:'1'
                }}>
                <img src="./avatar.jpg" alt="Gandhi Aguirre"/>
                <div className="content">
                    Learning React
                 <div className="sub header">Gandhi Aguirre Enciso</div>
                </div>
            </h2>
        </div>
    )

}

export default FooterAvatar;