export const isURLValid = (input) => {
  const urlRegex =
    /^[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?/;

  return urlRegex.test(input);
};

export const isEmailValid = (input) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;

  return emailRegex.test(input);
};

export const isPhonenoValid = (input) => {
  const phonenoRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/;

  return phonenoRegex.test(input);
};