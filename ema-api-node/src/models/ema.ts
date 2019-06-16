import EmaContent from "../models/emaContent";

export default interface Ema {
    readonly id: number;
    readonly 'user-id': number;
    readonly type: string;
    readonly status: string;
    readonly content: EmaContent
}
