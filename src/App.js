import React, { Component } from "react";
import { SideNav, Footer, Header } from "components/layout";
import ExplorerContent from "components/explorerContent";

class App extends Component {
  render() {
    return (
      <div className="App flex bg-blue-bg">
        <SideNav />
        <Header />
        <ExplorerContent />
        <Footer />
      </div>
    );
  }
}

export default App;
