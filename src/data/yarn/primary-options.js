const options = [
    { value: "add", label: "add" },
    { value: "init", label: "init" },
    { value: "install", label: "install" },
    { value: "publish", label: "publish" },
    { value: "remove", label: "remove" },
  ];
  
  export const primaryOptions = options.sort((x, y) => {
    if (x.value < y.value) {
      return -1;
    }
    if (x.value > y.value) {
      return 1;
    }
    return 0;
  });