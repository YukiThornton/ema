import Ema from '@/models/Ema';
import EmaContent from '@/models/EmaContent';

export interface EmasResponse {
    emas: [{
        id: number;
        'user-id': number;
        type: string;
        status: string;
        content: {
            text: string;
        };
    }];
}

export default class EmaFactory {
    public static createListFromJson(jsonResponse: EmasResponse): Ema[] {
        if (!jsonResponse.emas || jsonResponse.emas.length <= 0) {
            return [];
        }
        return jsonResponse.emas.map((ema) => {
            return new Ema(ema.id, ema['user-id'], ema.type, ema.status, new EmaContent(ema.content.text));
        });
    }
}
