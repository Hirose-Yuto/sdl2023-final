import {chromeProductsType} from "../chromeExtension/types";

export type apiRequest = {
    fullName: string,
    phone: string,
    postCodeStart: string,
    postCodeEnd: string,
    address: string,
    saveDeliver: boolean,
    deliverAppendix: string,

    isRobotTeam: string,
    purposeAsPerson: string,
    purposeAsGroup: string,
    teamNumber: string,
    teamName: string,
    saveGroup: boolean,
    groupAppendix: string,

    personInCharge: string,
    inChargeEmail: string,
    orderType: string,
    orderDeadline: string,
    otherContact: string,
    saveOrder: boolean,
    orderAppendix: string,

    products: chromeProductsType,
    sumDollar: number,
    rate: number,

    referencePriceYen: string,
    estimatedShippingFeeYen: string,
}