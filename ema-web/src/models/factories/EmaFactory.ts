import Ema from '@/models/Ema';
import EmaContent from '@/models/EmaContent';
import { EmaListJson, EmaCreationJson } from '@/persistence/EmaApiClient';

export default class EmaFactory {
    public static createListFromJson(json: EmaListJson): Ema[] {
        if (!json.emas || json.emas.length <= 0) {
            return [];
        }
        return json.emas.map((ema) => {
            return new Ema(ema.id, ema.userId, ema.type, ema.status, new EmaContent(ema.content.text));
        });
    }

    public static createEmaFromJson(json: EmaCreationJson): Ema {
        const ema = json.ema;
        return new Ema(ema.id, ema.userId, ema.type, ema.status, new EmaContent(ema.content.text));
    }
}
