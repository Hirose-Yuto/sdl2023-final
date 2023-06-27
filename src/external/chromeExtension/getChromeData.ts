import {
    ChromeDeliverKey,
    chromeDeliverType, ChromeGroupKey,
    chromeGroupType, ChromeOrderKey,
    chromeOrderType,
    ChromeProductKey,
    chromeProductsType
} from "./types";

export const getChromeData = async (key: string) => {
    return (await chrome.storage.sync.get([key]))[key];
}

export const getChromeProducts = async () => {
    return (await chrome.storage.sync.get([ChromeProductKey]))[ChromeProductKey] as chromeProductsType
}

export const getChromeDeliver = async () => {
    return (await chrome.storage.sync.get([ChromeDeliverKey]))[ChromeDeliverKey] as chromeDeliverType
}

export const getChromeGroup = async () => {
    return (await chrome.storage.sync.get([ChromeGroupKey]))[ChromeGroupKey] as chromeGroupType
}

export const getChromeOrder= async () => {
    return (await chrome.storage.sync.get([ChromeOrderKey]))[ChromeOrderKey] as chromeOrderType
}
