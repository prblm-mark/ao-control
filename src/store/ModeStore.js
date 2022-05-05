import { defineStore } from 'pinia'

export const useModeStore = defineStore('ModeStore', {
    state: () => {
        return {
            darkMode: false,
        }
    },
})
