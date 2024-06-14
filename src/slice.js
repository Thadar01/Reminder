import { isToday } from "date-fns";

const reminderSlice = (set) => ({
  list: [],
  historylist: [],
  addList: (list) =>
    set((state) => ({
      list: [...state.list, list],
    })),
  deleteList: (id) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== id),
    })),
  addHistoryList: (historylist) =>
    set((state) => ({
      historylist: [...state.historylist, historylist],
    })),
  deleteHistory: (id) =>
    set((state) => ({
      historylist: state.historylist.filter((item) => item.id !== id),
    })),
});

export default reminderSlice;
