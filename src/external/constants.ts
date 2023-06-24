import {GaitameRateAPIResponse} from "../types/gaitame_rate_api";

export const calculateShippingFee = (sum: number) => {
    // <300で$90
    // 0.37x - 21
    // 800>で$275
    if (sum <= 300) return 90
    if (sum >= 800) return 275
    return 0.37 * sum - 21
}

export const getUSDRateByAPI = async () => {
    const res = await fetch('https://www.gaitameonline.com/rateaj/getrate')
    const response = (await res.json()) as GaitameRateAPIResponse
    return parseFloat(response.quotes.find((r) => r.currencyPairCode === "USDJPY")?.high ?? "0")
}

export const DomesticShippingFee: number = 1500

export const OrderAPIURL = ''
