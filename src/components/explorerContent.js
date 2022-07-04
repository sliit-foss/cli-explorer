import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Header } from "components/layout";
import clipboard from "assets/images/clipboard.svg";
import Typist from "react-typist";
import { isMobile } from "react-device-detect";
import { Footer } from "components/layout";

let data = {
  firstOption: null,
  showSecond: false,
  secondOption: null,
  showThird: false,
  thirdOption: null,
  nb: "",
  usage: "",
  copied: false,
};

const ExplorerContent = ({ selectedItem }) => {
  const [state, setStates] = useState(data);
  const {
    optionsFirst,
    optionsSecond,
    optionsThird,
  } = require(`../data/${selectedItem.toLowerCase()}/index.js`);
  const onFirstChange = (selectedOption) => {
    if (state.secondOption) {
      data = {
        firstOption: selectedOption,
        showSecond: true,
        secondOption: null,
        showThird: false,
        nb: "",
        usage: "",
      };
      setStates(data);
    } else if (optionsSecond[selectedOption.value].length === 1) {
      data = { ...data, firstOption: selectedOption, showSecond: true };
      setStates(data);
      onSecondChange(optionsSecond[selectedOption.value][0]);
    } else {
      data = {
        ...data,
        firstOption: selectedOption,
        showSecond: true,
      };
      setStates(data);
    }
  };

  const onSecondChange = (selectedOption) => {
    if (selectedOption.usage) {
      data = {
        ...data,
        secondOption: selectedOption,
        showThird: false,
        nb: selectedOption.nb,
        usage: selectedOption.usage,
        thirdOption: null,
      };
      setStates(data);
      // console.log(JSON.stringify(state) + "  drfergrer");
    } else if (optionsThird[selectedOption.value].length === 1) {
      data = {
        ...data,
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        nb: "",
        usage: "",
      };
      setStates(data);
      onThirdChange(optionsThird[selectedOption.value][0]);
      console.log(state.showThird);
    } else {
      data = {
        ...state,
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        nb: "",
        usage: "",
      };
      setStates(data);
    }
  };

  const onThirdChange = (selectedOption) => {
    data = {
      ...data,
      thirdOption: selectedOption,
      nb: selectedOption.nb,
      usage: selectedOption.usage,
    };
    setStates(data);
  };

  const onCopy = () => {
    // setStates({
    //   ...data,
    //   copied: true
    // });
    // if (timeout) {
    //     clearInterval(timeout);
    // }
    // timeout = setTimeout(() => {
    //   setStates({
    //     ...data,
    //     copied: false
    //   });
    // }, 1000);
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
    <div className="w-full ml-[6rem] sm:pl-11 xl:mt-[20rem] mt-[7rem] lg:mt-[15rem] ">
      <Header />
      <div>
        <div className="">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-9/12 ml-8 lg:pl-16">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl ml-4 mt-7 mb-10 font-bold">
                CLI EXPLORER
              </h1>
              <p className="ml-4 my-20 w-9/12 text-2xl sm:text-3xl xl:text-4xl">
                Find the right commands you need without digging through the
                web.
              </p>

              <div>
                <h4 className="ml-4 my- sm:text-2xl xl:text-3xl">I want to:</h4>

                <Select
                  placeholder="..."
                  className="my-8 w-9/12 ml-4"
                  classNamePrefix="options-select"
                  isSearchable={true}
                  onChange={onFirstChange}
                  value={state.firstOption}
                  options={optionsFirst}
                />

                {state.showSecond ? (
                  <Select
                    placeholder="..."
                    className="my-8 ml-4 w-9/12"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={onSecondChange}
                    value={state.secondOption}
                    options={optionsSecond[state.firstOption.value]}
                  />
                ) : null}

                {state.showThird ? (
                  <Select
                    placeholder="..."
                    className="my-8 w-9/12 ml-4 "
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={onThirdChange}
                    value={state.thirdOption}
                    options={optionsThird[state.secondOption.value]}
                  />
                ) : null}
              </div>
            </div>
            <div className="w-full ml-0 lg:mt-20 lg:mr-4">
              <div
                className={`board__group board__group--1 ${
                  isMobile && !state.usage ? " d-none" : ""
                } pl-8 pr-8`}
              >
                <h2 className="mb-8 font-bold text-3xl lg:text-4xl">Usage</h2>

                <div className="relative bg-blue-primary text-white min-h-36 lg:h-40 w-11/12 rounded-md flex items-center justify-between pl-8 pr-8 mb-8">
                  <div className="absolute w-4 bg-red-700 left-0 h-full rounded-l-md"></div>
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
                    <h2 className="board__title  dark-white mb-8 font-bold text-3xl lg:text-4xl">
                      Note
                    </h2>
                    <div className="relative bg-blue-primary text-white min-h-36 lg:max-h-80 w-11/12 rounded-md flex items-center justify-between pl-8 pr-4 mb-24">
                      <div className="absolute w-4 bg-[#033888] left-0 h-full rounded-l-md"></div>
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
};

export default ExplorerContent;
