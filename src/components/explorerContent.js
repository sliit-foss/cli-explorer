import React, { useState } from "react";
import Select from "react-select";
import { Header } from "components/layout";
import clipboard from "assets/images/clipboard.svg";
import Typist from "react-typist";
import { isMobile } from "react-device-detect";

const ExplorerContent = ({ selectedItem }) => {

  const [data, setData] = useState({
    firstOption: null,
    showSecond: false,
    secondOption: null,
    showThird: false,
    thirdOption: null,
    nb: "",
    usage: "",
    copied: false,
  });

  const {
    optionsFirst,
    optionsSecond,
    optionsThird,
  } = require(`../data/${selectedItem.toLowerCase()}/index.js`);

  const onFirstChange = (selectedOption) => {
    if (data.secondOption) {
      setData({
        ...data,
        firstOption: selectedOption,
        showSecond: true,
        secondOption: null,
        showThird: false,
        nb: "",
        usage: "",
      });
    } else if (optionsSecond[selectedOption.value].length === 1) {
      setData({ ...data, firstOption: selectedOption, showSecond: true });
      onSecondChange(optionsSecond[selectedOption.value][0]);
    } else {
      setData({
        ...data,
        firstOption: selectedOption,
        showSecond: true,
      });
    }
  };

  const onSecondChange = (selectedOption) => {
    setData({ ...data, nb: null, usage: null });
    if (selectedOption.usage) {
      setData({
        ...data,
        secondOption: selectedOption,
        showThird: false,
        nb: selectedOption.nb,
        usage: selectedOption.usage,
        thirdOption: null,
      })
    } else if (optionsThird[selectedOption.value].length === 1) {
      setData({
        ...data,
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        nb: "",
        usage: "",
      });
      onThirdChange(optionsThird[selectedOption.value][0]);
    } else {
      setData({
        ...data,
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        nb: "",
        usage: "",
      });
    }
  };

  const onThirdChange = (selectedOption) => {
    setData({
      ...data,
      thirdOption: selectedOption,
      nb: selectedOption.nb,
      usage: selectedOption.usage,
    });
  };

  const onCopy = () => {
    // setData({
    //   ...data,
    //   copied: true
    // });
    // if (timeout) {
    //     clearInterval(timeout);
    // }
    // timeout = setTimeout(() => {
    //   setData({
    //     ...data,
    //     copied: false
    //   });
    // }, 1000);
  };

  const copyUsage = () => {
    // const el = document.createElement('textarea');
    // el.value = data.usage;
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


  const styles = {

    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: state.data.color,
      fontSize: state.selectProps.myFontSize
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize
    })
  };



  return (
    <div className="w-full ml-[6rem] sm:pl-11 xl:mt-[18rem] mt-[7rem] lg:mt-[15rem]">
      <Header />
      <div>
        <div className="">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-9/12 ml-8 lg:pl-16">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl ml-4 mt-7 mb-10 font-bold dark:text-[#EAFBFF]">
                CLI EXPLORER
              </h1>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl ml-4 mt-10 mb-10 font-bold dark:text-[#EAFBFF]">
                {selectedItem.toUpperCase()}
              </h1>
              <p className="ml-4 my-20 w-9/12 text-2xl sm:text-3xl xl:text-4xl dark:text-[#EAFBFF]">
                Find the right commands you need without digging through the
                web.
              </p>

              <div>
                <h4 className="ml-4 my- sm:text-2xl xl:text-3xl dark:text-[#EAFBFF]">I want to:</h4>

                <Select
                  placeholder="..."
                  className="my-8 w-9/12 ml-4"
                  classNamePrefix="options-select"
                  isSearchable={true}
                  onChange={onFirstChange}
                  value={data.firstOption}
                  options={optionsFirst}
                  styles={styles}
                />

                {data.showSecond ? (
                  <Select
                    placeholder="..."
                    className="my-8 ml-4 w-9/12"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={onSecondChange}
                    value={data.secondOption}
                    options={optionsSecond[data.firstOption.value]}
                    styles={styles}
                  />
                ) : null}

                {data.showThird ? (
                  <Select
                    placeholder="..."
                    className="my-8 w-9/12 ml-4 "
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={onThirdChange}
                    value={data.thirdOption}
                    options={optionsThird[data.secondOption.value]}
                    styles={styles}
                  />
                ) : null}
              </div>
            </div>
            <div className="w-full ml-0 lg:mt-20 lg:mr-4 xl:mr-[3rem] xl:mb-28" key={data.usage}>
              <div
                className={`board__group board__group--1 ${isMobile && !data.usage ? " d-none" : ""
                  } pl-8 pr-8`}
              >
                <h2 className="mb-8 font-bold text-3xl lg:text-4xl dark:text-[#EAFBFF]">Usage</h2>

                <div className="relative bg-blue-primary text-white dark:bg-[#9bb0b54f] min-h-36 lg:h-40 w-11/12 rounded-md flex items-center justify-between pl-8 pr-8 mb-8">
                  <div className="absolute w-4 bg-red-700 left-0 h-full rounded-l-md"></div>
                  <pre>
                    {data.usage.length ? (
                      <Typist cursor={{ show: false }}>{data.usage}</Typist>
                    ) : (
                      <div />
                    )}
                  </pre>
                  {data.usage.length ? (
                    <div className="copy">
                      <span
                        className={`copy__popover ${data.copied ? "show" : ""
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

                {data.nb ? (
                  <div className="board__group board__group--2" key={data.nb}>
                    <h2 className="board__title  dark-white mb-8 font-bold text-3xl lg:text-4xl dark:text-[#EAFBFF]">
                      Note
                    </h2>
                    <div className="relative bg-blue-primary text-white dark:bg-[#9bb0b54f] min-h-36 lg:max-h-80 w-11/12 rounded-md flex items-center justify-between pl-8 pr-4 mb-24">
                      <div className="absolute w-4 bg-[#033888] left-0 h-full rounded-l-md"></div>
                      <pre>
                        <Typist cursor={{ show: false }}>{data.nb}</Typist>
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
