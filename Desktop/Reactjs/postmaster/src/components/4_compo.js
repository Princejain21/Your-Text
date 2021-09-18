import React, { useState } from 'react'
export default function About(props) {
    const enable = () => {
        if (data.color === 'white') {
            setStyle({ color: "black", backgroundColor: 'white',border:'2px solid black' })
            setSome('dark')
        } else {
            setStyle({ color: "white", backgroundColor: 'black' ,border:'2px solid white'})
            setSome('light')
        }
    }
    const [data, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border:'2px solid',
        borderColor:'black'
    });
    const [text, setSome] = useState('dark');
    return (
        <>
            <div className="container" style={data}>
           
                <div>
                <h2 className="head">about my website:</h2><hr/>
                <p><strong>
                    hello guys, this is prince jain from Agra.<br />
                    here i made for you to analyse with your text very easily.
                </strong>
                </p>
                </div>
                <div>
                    <h2>Details:</h2>
                    <hr />
                    <strong>  <p> Name:Prince jain <br /> contact_no: 8171369835 <br />Address: jaitpur kalan Agra UP<br />
                        email: princejain817111@gmail.com   </p></strong>
                </div>
                <div>
                    <h1><center><strong>Thank You</strong></center></h1>

                </div>

                <div className="container ">
                    <button className="btn btn-primary " id='bata' onClick={enable}> enable {text} mode</button>
                </div>
            </div>

        </>
    )

}
