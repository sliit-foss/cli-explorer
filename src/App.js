import React, { Component } from "react";
import { SideNav, Footer } from "components/layout";
import ExplorerContent from "components/explorerContent";

class App extends Component {
  render() {
    return (
      <div className="bg-blue-bg h-screen">
        <SideNav />
        <div className="flex flex-col justify-between h-full bg-blue-bg">
          <ExplorerContent />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
