export type GaitameRateAPIResponse = {
    quotes: GaitameRateType[]
}

type GaitameRateType = {
    ask: string
    bid: string
    currencyPairCode: string
    high: string
    low: string
    open: string
}