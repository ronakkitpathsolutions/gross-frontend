export const isFunction = (fn) => typeof fn === "function";

export const passMultipleFilesIntoFormData = (formData, fileArray, key) => {
  [...fileArray].forEach((file) => {
    formData.append(key, file);
  });
};

let timerId = null;
export const debounced = (callback, wait) => {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    callback();
  }, wait);
};

export const classNames = (...params) =>
  [...params].filter((val) => !!val).join(" ");
