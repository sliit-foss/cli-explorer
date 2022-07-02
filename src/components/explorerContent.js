import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Header } from "components/layout";
import clipboard from "assets/images/clipboard.svg";
import { optionsFirst, optionsSecond, optionsThird } from "../data";
import Typist from "react-typist";
import { isMobile } from "react-device-detect";

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

function ExplorerContent() {
  const [state, setStates] = useState(data);

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
    <div className="w-full">
      <Header />
      <div className=" mx-[6rem] ">
        <div>
          <div className="w-full flex justify-between items-center">
            <div className="w-5/12">
              <h1 className="text-5xl mb-10">CLI EXPLORER</h1>
              <p className="my-20 w-4/12">
                Find the right commands you need without digging through the
                web.
              </p>

              <div>
                <h4 className="my-8">I want to:</h4>

                <Select
                  placeholder="..."
                  className="my-8 w-10/12"
                  classNamePrefix="options-select"
                  isSearchable={true}
                  onChange={onFirstChange}
                  value={state.firstOption}
                  options={optionsFirst}
                />

                {state.showSecond ? (
                  <Select
                    placeholder="..."
                    className="my-8 w-10/12"
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
                    className="my-8 w-10/12"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={onThirdChange}
                    value={state.thirdOption}
                    options={optionsThird[state.secondOption.value]}
                  />
                ) : null}
              </div>
            </div>
            <div className="w-7/12">
              <div
                className={`board__group board__group--1 ${
                  isMobile && !state.usage ? " d-none" : ""
                }`}
              >
                <h2 className="mb-8 font-bold text-3xl">Usage</h2>

                <div className="relative bg-blue-primary text-white min-h-36 w-full rounded-md flex items-center justify-between pl-8 pr-8 mb-8">
                  <div className="absolute w-4 bg-[#033888] left-0 h-full rounded-l-md"></div>
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
                    <h2 className="board__title  dark-white mb-8 font-bold text-3xl">
                      Note
                    </h2>
                    <div className="relative bg-blue-primary text-white min-h-36 w-full rounded-md flex items-center justify-between pl-8 pr-4">
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
}

export default ExplorerContent;
