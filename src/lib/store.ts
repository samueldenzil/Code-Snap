import { FontTypes, ThemeTypes } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PreferenceState {
  code: string;
  title: string;
  theme: ThemeTypes;
  darkMode: boolean;
  showBackground: boolean;
  language: string;
  autoDetectLanguage: boolean;
  fontSize: number;
  fontStyle: FontTypes;
  padding: number;
}

export const usePreferenceStore = create<PreferenceState>()(
  persist(
    (_) => ({
      code: "",
      title: "Untitled",
      theme: "sublime",
      darkMode: true,
      showBackground: true,
      language: "plaintext",
      autoDetectLanguage: true,
      fontSize: 14,
      fontStyle: "jetBrainsMono",
      padding: 64,
    }),
    {
      name: "user-preferences",
    }
  )
);
