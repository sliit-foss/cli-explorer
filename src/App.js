import React, { Component } from "react";
import { SideNav, Footer } from "components/layout";
import ExplorerContent from "components/explorerContent";

class App extends Component {
  render() {
    return (
      <div className="flex bg-blue-bg">
        <SideNav />
        <ExplorerContent />
        <Footer />
      </div>
    );
  }
}

export default App;
