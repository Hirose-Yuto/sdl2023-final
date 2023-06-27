import {
    ChromeDeliverKey,
    chromeDeliverType, ChromeGroupKey,
    chromeGroupType, ChromeOrderKey,
    chromeOrderType,
    ChromeProductKey,
    chromeProductType
} from "./types";

export const saveChromeData = async (key: string, data: any) => {
    await chrome.storage.sync.set({[key]: data});
}
export const clearChromeData = async (key: string) => {
    await chrome.storage.sync.set({[key]: {}});
}

export const saveChromeProduct = async (data: chromeProductType) => {
    await chrome.storage.sync.set({[ChromeProductKey]: data});
}
export const clearChromeProduct = async () => {
    await chrome.storage.sync.set({[ChromeProductKey]: {}});
}

export const saveChromeDeliver = async (data: chromeDeliverType) => {
    await chrome.storage.sync.set({[ChromeDeliverKey]: data});
}
export const clearChromeDeliver = async () => {
    await chrome.storage.sync.set({[ChromeDeliverKey]: {}});
}

export const saveChromeGroup = async (data: chromeGroupType) => {
    await chrome.storage.sync.set({[ChromeGroupKey]: data});
}
export const clearChromeGroup = async () => {
    await chrome.storage.sync.set({[ChromeGroupKey]: {}});
}

export const saveChromeOrder = async (data: chromeOrderType) => {
    await chrome.storage.sync.set({[ChromeOrderKey]: data});
}
export const clearChromeOrder = async () => {
    await chrome.storage.sync.set({[ChromeOrderKey]: {}});
}
