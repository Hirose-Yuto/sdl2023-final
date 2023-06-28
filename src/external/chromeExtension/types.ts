export type chromeProductsType = chromeProductType[]

export const ChromeProductKey = "products"
export type chromeProductType = {
    name: string
    sku: string
    price: string
    total_price: string
    quantity: number
}

export const ChromeDeliverKey = "deliver"
export type chromeDeliverType = {
    fullName: string,
    phone: string,
    postCodeStart: string,
    postCodeEnd: string,
    address: string,
    saveDeliver: boolean,
    deliverAppendix: string,
}

export const ChromeGroupKey = "group"
export type chromeGroupType = {
    isRobotTeam: string,
    purposeAsPerson: string,
    purposeAsGroup: string,
    teamNumber: string,
    teamName: string,
    saveGroup: boolean,
    groupAppendix: string,
}

export const ChromeOrderKey = "order"
export type chromeOrderType = {
    personInCharge: string,
    inChargeEmail: string,
    orderType: string,
    orderDeadline: string,
    otherContact: string,
    saveOrder: boolean,
    orderAppendix: string,
}