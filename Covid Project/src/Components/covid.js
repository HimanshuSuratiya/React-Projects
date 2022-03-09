import React, { useEffect, useState } from 'react'
import './covid.css';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>



const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const response = await fetch('https://api.covid19india.org/data.json');
            const data = await response.json();
            setData(data.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <h1 className='heading_1'>🔴 LIVE</h1>
            <h2 className='heading_2'>COVID-19 CORONAVIRUS TRACKER</h2>
            <section className='crad_section_1'>
                <div id='card1' className='card'>
                    <div className='div_text'>OUR <span className='span'>COUNTRY</span></div>
                    <div className='div_valueI'>INDIA</div>
                </div>
                <div id='card2' className='card'>
                    <div className='div_text'>TOTAL <span className='span'>RECOVERED</span></div>
                    <div className='div_value'>{data.recovered}</div>
                </div>
                <div id='card3' className='card'>
                    <div className='div_text'>TOTAL <span className='span'>CONFIRMED</span></div>
                    <div className='div_value'>{data.confirmed}</div>
                </div>
            </section>
            <section className='crad_section_2'>
                <div id='card4' className='card'>
                    <div className='div_text'>TOTAL <span className='span'>DEATH</span></div>
                    <div className='div_value'>{data.deaths}</div>
                </div>
                <div id='card5' className='card'>
                    <div className='div_text'>TOTAL <span className='span'>ACTIVE</span></div>
                    <div className='div_value'>{data.active}</div>
                </div>
                <div id='card6' className='card'>
                    <div className='div_text'>LAST <span className='span'>UPDATED</span></div>
                    <div className='divunique_text'>{data.lastupdatedtime}</div>
                </div>
            </section>
        </>
    )
}

export default Covid