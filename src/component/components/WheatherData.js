
import React from 'react'

export const wheatherData = ({dataList}) => {
    return (
        <>
            {
                (dataList.length > 0)
                    ?
                    (
                        dataList.map((item, index) => {
                            <div className='data'>
                                <div className='location-1'>
                                    location1: {item.name}
                                </div>
                                <p className='temp-1'>
                                    {item.main.temp}
                                </p>
                                <div className='discription-1'>
                                    {item.weather[0].description}
                                </div>
                                <div className='locate-1'>
                                    {dataList.country}
                                </div>
                                <div className='humanity-1'>
                                    {dataList.icon}
                                </div>

                                <div className='wind-1'>
                                    visibility: {dataList.visibility}
                                </div>
                                <div className='guest-1'>
                                    Feel-like {dataList.main}
                                </div>
                            </div>
                        })
                    )
                    :

                    (null)
            }
        </>
    )
}

export default wheatherData;