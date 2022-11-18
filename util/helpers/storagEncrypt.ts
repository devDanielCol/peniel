import crypto from "crypto-js";
import isNavigator from "./isNavigator";

const secretKey = process.env.REACT_APP_SECRET_KEY || "DEV-KEY";

export const setLocalStorage = (
  key: string,
  value: string | object | Array<object | string | number>
) => {
  if (isNavigator()) {
    const valueStringyfy = JSON.stringify(value);
    const valueEncrypt = crypto.AES.encrypt(
      valueStringyfy,
      secretKey
    ).toString();
    localStorage.setItem(key, valueEncrypt);
  }
};

export function getLocalStorage<Type>(key: string) {
  if (isNavigator()) {
    const data: string | null = localStorage.getItem(key);

    if (data) {
      const valueDecrypt: string = crypto.AES.decrypt(data, secretKey).toString(
        crypto.enc.Utf8
      );
      return JSON.parse(valueDecrypt) as Type;
    }
    return false;
  }
}
