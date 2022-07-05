let timer: ReturnType<typeof setTimeout>;

export const debounceGenerator = (func: any, wait?: number) => {
  return (...args: any[]) => {
    if (!wait) {
      func(args);
    } else {
      clearTimeout(timer);

      timer = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    }
  };
};
