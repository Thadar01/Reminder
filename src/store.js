import { create } from "zustand";

import reminderSlice from "./slice";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useStore = create(
  persist(
    immer((set) => ({
      ...reminderSlice(set),
    })),
    {
      name: "remindertorage", 
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStore;
