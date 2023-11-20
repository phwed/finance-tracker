import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

// storage.delete("auth");
// console.log(JSON.stringify(storage.getAllKeys(), null, 2));

export const zustandStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};
