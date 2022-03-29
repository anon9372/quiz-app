import React, {useEffect, useState} from 'react'

const End = () => {
  return (
        <div className='card'>
            <div className='card-content'>
                <div className='content'>

                    <h3>Your Result</h3>
                    <p>8 out of 10</p>
                    <p><strong>80%</strong></p>
                    <p><strong>Your time:</strong>15s</p>
                    <button className='button is-info mr-2'>Check your answers</button>
                    <button className='button is-success'>Try again</button>
                </div>

            </div>

        </div>
  )
}

export default End