import React, { Component } from 'react';

import { optionsFirst, optionsSecond, optionsThird } from 'data';


import ExplorerContent from 'components/explorerContent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleToggle = (evt) => {
    const { id } = evt.target;

    this.setState(
      prevState => ({ [id]: !prevState[id] }),
      () => {
        localStorage.setItem(id, this.state[id]);
      }
    );
  };

  onFirstChange = (selectedOption) => {
    if (this.state.secondOption) {
      this.setState({
        firstOption: selectedOption,
        showSecond: true,
        secondOption: null,
        showThird: false,
        nb: '',
        usage: ''
      });
    } else if (optionsSecond[selectedOption.value].length === 1) {
      this.setState({ firstOption: selectedOption, showSecond: true });
      this.onSecondChange(optionsSecond[selectedOption.value][0]);
    } else {
      this.setState({ firstOption: selectedOption, showSecond: true });
    }
  };

  onSecondChange = (selectedOption) => {
    if (selectedOption.usage) {
      this.setState({ nb: '', usage: '' }, () => {
        this.setState({
          secondOption: selectedOption,
          showThird: false,
          nb: selectedOption.nb,
          usage: selectedOption.usage,
          thirdOption: null
        });
      });
    } else if (optionsThird[selectedOption.value].length === 1) {
      this.setState({
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        nb: '',
        usage: ''
      });
      this.onThirdChange(optionsThird[selectedOption.value][0]);
    } else {
      this.setState({
        secondOption: selectedOption,
        showThird: true,
        thirdOption: null,
        nb: '',
        usage: ''
      });
    }
  };

  onThirdChange = (selectedOption) => {
    this.setState({ nb: '', usage: '' }, () => {
      this.setState({
        thirdOption: selectedOption,
        nb: selectedOption.nb,
        usage: selectedOption.usage
      });
    });
  };

  onCopy = () => {
    this.setState({ copied: true }, () => {
      if (this.timeout) {
        clearInterval(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.setState({ copied: false });
      }, 1000);
    });
  };

  copyUsage = () => {
    const el = document.createElement('textarea');
    el.value = this.state.usage;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.onCopy();

    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

  render() {
    // const {
    //   firstOption,
    //   secondOption,
    //   thirdOption,
    //   showSecond,
    //   showThird,
    //   fastType,
    //   nb,
    //   usage,
    //   copied
    // } = this.state;
    // const avgTypingDelay = fastType ? 0 : 50;

    return (
      <ExplorerContent/>
    );
  }
}

export default App;
