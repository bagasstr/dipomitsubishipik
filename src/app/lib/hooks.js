import { create } from "zustand";

const useModalStore = create((set) => ({
  modal: false,
  dataModal: null,
  openModal: (data) => {
    document.body.style.overflow = "hidden";
    set({ modal: true, dataModal: data });
  },
  closeModal: () => {
    document.body.style.overflow = "";
    set({ modal: false, dataModal: null });
  },
}));

export default useModalStore;
