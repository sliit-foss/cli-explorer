import lexicograhicalSort from "utils/lexicograhical-sort";
const options = [
    { value: "add", label: "add" },
    { value: "init", label: "init" },
    { value: "install", label: "install" },
    { value: "publish", label: "publish" },
    { value: "remove", label: "remove" },
  ];
  
  export const primaryOptions = options.sort(lexicograhicalSort);