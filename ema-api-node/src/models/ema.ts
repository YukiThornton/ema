import EmaContent from "../models/emaContent";

export default class Ema {
    readonly id: number;
    readonly userId: number;
    readonly type: string;
    readonly status: string;
    readonly content: EmaContent

    constructor($id: number, $userId: number, $type: string, $status: string, $content: EmaContent) {
      this.id = $id;
      this.userId = $userId;
      this.type = $type;
      this.status = $status;
      this.content = $content;
    }
}
