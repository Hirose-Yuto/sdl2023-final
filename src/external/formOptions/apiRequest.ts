import {Products} from "../../types/products";

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
    otherContact: string,
    orderAppendix: string,

    products: Products,
    sumDollar: number,
    rate: number,

    isOrderComplete: boolean,
}