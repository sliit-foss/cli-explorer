import React, { useState } from 'react';


function Console() {

    const [usage,setUsage] = useState('');
    const [copied,setCopied] = useState();
    const [nb,setNb] = useState('');

    return (
        <div className="col-7 boards">
                <div
                  className={`board__group board__group--1 ${isMobile && !usage ? ' d-none' : ''}`}
                >
                  <h2 className="board__title  dark-white">Usage</h2>
                  <div className="board board--1">
                    <pre>
                      {usage.length ? (
                        <Typist avgTypingDelay={avgTypingDelay} cursor={{ show: false }}>
                          {usage}
                        </Typist>
                      ) : (
                        <div />
                      )}
                    </pre>
                    {usage.length ? (
                      <div className="copy">
                        <span className={`copy__popover ${copied ? 'show' : ''}`}>
                          command copied
                        </span>
                        <img
                          className="copy__image"
                          onClick={this.copyUsage}
                          src={clipboard}
                          alt="Clipboard"
                        />
                      </div>
                    ) : null}
                  </div>

                  {nb ? (
                    <div className="board__group board__group--2">
                      <h2 className="board__title  dark-white">Note</h2>
                      <div className="board board--2">
                        <pre>
                          <Typist avgTypingDelay={avgTypingDelay} cursor={{ show: false }}>
                            {nb}
                          </Typist>
                        </pre>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
    );
}