import { create } from "zustand/react"

interface FileStore {
  file: File | null
  setFile: (file: File) => void
  clearFile: () => void
}

export const useFileStore = create<FileStore>((set) => ({
  file: null,
  setFile: (file) => set({ file }),
  clearFile: () => set({ file: null }),
}))
