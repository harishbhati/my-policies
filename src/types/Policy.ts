export interface IPolicy {
    policyNumber: string;
    policyStart: string;
    policyEnd: string;
    primaryTravellerFirstname: string;
    primaryTravellerLastName: string;
    primaryTravellerPhoneNumber: string;
    status: string;
    destinations: {
        code: string;
        name: string;
    }[];
    alphaCode: string;
    iSO3CountryOfResidence: string;
    underwriterCode: string;
    groupCode: string;
    type: string;
    excess: number;
    maxTripDuration: number;
    planName: string;
}