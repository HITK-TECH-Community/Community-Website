import React from 'react'
import './get_involved.css';
// import icon from 

function GetInvolved() {
  const arrayCards = [
    [
      'Report Issues',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, magni.'
    ], [
      'Code Fixes', 'If you came across something that isn\'t working perfectly, feel free to open up an issue for the same'
    ], [
      'Improve Documentation',
      'If you came across something that isn\'t working perfectly, feel free to open up an issue for the same'
    ], [
      'Propose Ideas', 'If you came across something that isn\'t working perfectly, feel free to open up an issue for the same'
    ], [
      'Improve Documentation',
      'If you came across something that isn\'t working perfectly, feel free to open up an issue for the same'
    ], [
      'Improve Documentation',
      'If you came across something that isn\'t working perfectly, feel free to open up an issue for the same'
    ]
  ]
  return (
    <main>
      <div id="hero">
        <div id="heading">
          <h1 id="title">GET INVOLVED!</h1>
        </div>
      </div>
      <div id="allCards">
        {arrayCards.map(element => {
          return (
            <div className="card-item">
              <a href="/">
                <div className="clickable-card">
                  <div
                    className="card-title">
                    {element[0]}
                  </div>
                  <div
                    className="card-content">
                    {element[1]}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </main>
  )
}

export default GetInvolved
