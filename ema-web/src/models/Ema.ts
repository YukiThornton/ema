import EmaContent from '@/models/EmaContent';

export default class Ema {
    constructor(
        private $id: number,
        private $userId: number,
        private $type: string,
        private $status: string,
        private $content: EmaContent,
    ) {}

    get id() { return this.$id; }
    get userId() { return this.$userId; }
    get type() { return this.$type; }
    get status() { return this.$status; }
    get content() { return this.$content; }
}
