import React, { Component } from "react";
import { SideNav, Footer } from "components/layout";
import ExplorerContent from "components/explorerContent";

class App extends Component {
  render() {
    return (
      <div className="flex bg-blue-bg h-screen">
        <SideNav />
        <ExplorerContent />
        
      </div>
    );
  }
}

export default App;
