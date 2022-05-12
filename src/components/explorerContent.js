import React, { useState } from "react";
import Select from "react-select";
import { Header } from "components/layout";
import clipboard from "assets/images/clipboard.svg";

import Typist from "react-typist";
import { isMobile } from "react-device-detect";

function ExplorerContent() {
  const [state, setStates] = useState({
    firstOption: null,
    showSecond: false,
    secondOption: null,
    showThird: false,
    thirdOption: null,
    nb: "",
    usage: "",
    copied: false,
  });

  const onFirstChange = (selectedOption) => {
    // if (state.secondOption) {
    //   setStates({
    //     firstOption: selectedOption,
    //     showSecond: true,
    //     secondOption: null,
    //     showThird: false,
    //     nb: '',
    //     usage: ''
    //   });
    // } else if (optionsSecond[selectedOption.value].length === 1) {
    //   setState({ firstOption: selectedOption, showSecond: true });
    //   onSecondChange(optionsSecond[selectedOption.value][0]);
    // } else {
    //   setState({ firstOption: selectedOption, showSecond: true });
    // }
  };

  const onSecondChange = (selectedOption) => {
    // if (selectedOption.usage) {
    //   setState({ nb: '', usage: '' }, () => {
    //     setState({
    //       secondOption: selectedOption,
    //       showThird: false,
    //       nb: selectedOption.nb,
    //       usage: selectedOption.usage,
    //       thirdOption: null
    //     });
    //   });
    // } else if (optionsThird[selectedOption.value].length === 1) {
    //   setState({
    //     secondOption: selectedOption,
    //     showThird: true,
    //     thirdOption: null,
    //     nb: '',
    //     usage: ''
    //   });
    //   onThirdChange(optionsThird[selectedOption.value][0]);
    // } else {
    //   setState({
    //     secondOption: selectedOption,
    //     showThird: true,
    //     thirdOption: null,
    //     nb: '',
    //     usage: ''
    //   });
    // }
  };

  const onThirdChange = (selectedOption) => {
    //   setState({ nb: '', usage: '' }, () => {
    //     setState({
    //       thirdOption: selectedOption,
    //       nb: selectedOption.nb,
    //       usage: selectedOption.usage
    //     });
    //   });
    // };
    // onCopy = () => {
    //   setState({ copied: true }, () => {
    //     if (timeout) {
    //       clearInterval(timeout);
    //     }
    //   timeout = setTimeout(() => {
    //     setState({ copied: false });
    //   }, 1000);
    // });
  };

  const copyUsage = () => {
    // const el = document.createElement('textarea');
    // el.value = state.usage;
    // el.setAttribute('readonly', '');
    // el.style.position = 'absolute';
    // el.style.left = '-9999px';
    // document.body.appendChild(el);
    // const selected = document.getSelection().rangeCount > 0
    //   ? document.getSelection().getRangeAt(0)
    //   : false;
    // el.select();
    // document.execCommand('copy');
    // document.body.removeChild(el);
    // onCopy();
    // if (selected) {
    //   document.getSelection().removeAllRanges();
    //   document.getSelection().addRange(selected);
    // }
  };

  return (
    <div className="w-full">
      <Header />
      <div className=" ml-[6rem] ">
        
        <div>
          <div className="w-full bg-red-600 flex justify-between items-center">
            <div className="w-1/2 bg-yellow-600">
              <h1 className="text-5xl mb-10">
                CLI EXPLORER
              </h1>
              <p className="my-20 w-4/12">
                Find the right commands you need without digging through the
                web.
              </p>

              <div>
                <h4 className="my-8">I want to:</h4>

                <Select
                  placeholder="..."
                  className="my-8 w-8/12"
                  classNamePrefix="options-select"
                  isSearchable={true}
                  onChange={onFirstChange}
                  value={state.firstOption}
                  options={state.optionsFirst}
                />

                {state.showSecond ? (
                  <Select
                    placeholder="..."
                    className="options-select"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={onSecondChange}
                    value={state.secondOption}
                    options={state.optionsSecond[state.firstOption.value]}
                  />
                ) : null}

                {state.showThird ? (
                  <Select
                    placeholder="..."
                    className="options-select"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={onThirdChange}
                    value={state.thirdOption}
                    options={state.optionsThird[state.secondOption.value]}
                  />
                ) : null}
              </div>
            </div>
            <div className="w-1/2">
              <div
                className={`board__group board__group--1 ${
                  isMobile && !state.usage ? " d-none" : ""
                }`}
              >
                <h2 className="board__title  dark-white">Usage</h2>
                <div className="board board--1">
                  <pre>
                    {state.usage.length ? (
                      <Typist cursor={{ show: false }}>{state.usage}</Typist>
                    ) : (
                      <div />
                    )}
                  </pre>
                  {state.usage.length ? (
                    <div className="copy">
                      <span
                        className={`copy__popover ${
                          state.copied ? "show" : ""
                        }`}
                      >
                        command copied
                      </span>
                      <img
                        className="copy__image"
                        onClick={copyUsage}
                        src={clipboard}
                        alt="Clipboard"
                      />
                    </div>
                  ) : null}
                </div>

                {state.nb ? (
                  <div className="board__group board__group--2">
                    <h2 className="board__title  dark-white">Note</h2>
                    <div className="board board--2">
                      <pre>
                        <Typist cursor={{ show: false }}>{state.nb}</Typist>
                      </pre>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ExplorerContent;
