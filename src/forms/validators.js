export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);

export const validateString = (value) =>
  value && !/^(?=.*?[A-Z])(?=.*?[0-9])/.test(value)
    ? "Password must contain at least one number  and  one  upper case letter"
    : undefined;

export const minValue = (min) => (value) =>
  value && value.length < min ? `Must be at least ${min}` : undefined;
export const minValue6 = minValue(6);
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

export let replaceEmailToURL = (string) => {
  return string.replace("@", "").replace(".", "");
};
