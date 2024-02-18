import { atom } from 'recoil';

export const validAtom = atom({
    key: "validAtom",
    default: {
        username: false,
        roll: true,
        password: true
    }
})