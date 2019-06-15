export interface EmaJson {
    id: number;
    'user-id': number;
    type: string;
    status: string;
    content: {
        text: string;
    };
}

export interface EmaListJson {
    emas: EmaJson[];
}

export interface EmaCreationJson {
    result: string;
    ema: EmaJson;
}

const localEmaCreationResult: EmaCreationJson = {
    result: 'ok',
    ema: {
        'id': 99,
        'user-id': 1,
        'type': 'wish',
        'status': 'open',
        'content': {
            text: 'localEmaCreationResult',
        },
    },
};

const localEmaList: EmaListJson = {
    emas: [
        {
            'id': 1,
            'user-id': 1,
            'type': 'wish',
            'status': 'open',
            'content': {
                text: `（また徳義心が聴こ末ませないないのでませはそれましですて、）あいにく買うた縁を、
                文部省の事業まで突き抜けが向いに従って、自力のお断りは一部の後ばかりなるしはずを受けるですで参考め見せるていなというご例外な事う。
                私も勢い地位を書いでように引き摺り込んて来ますのありばそれで突然熊本一般なりたた。`,
            },
        },
        {
            'id': 2,
            'user-id': 1,
            'type': 'goal',
            'status': 'open',
            'content': {
                text: `Cras elementum at nulla sit amet lobortis. Praesent diam ligula, ultrices sed rutrum eu
                , iaculis id turpis. Phasellus interdum gravida odio, ut dapibus ante sodales quis. Nam vel suscipit leo
                . In odio quam, placerat sit amet lectus non, aliquam dignissim lectus. Vestibulum vehicula
                , magna bibendum consectetur ullamcorper, nibh ligula convallis dolor,`,
            },
        },
        {
            'id': 3,
            'user-id': 1,
            'type': 'wish',
            'status': 'open',
            'content': {
                text: `Cras elementum tortor eu elementum commodo. Nam eget tellus purus. Donec id sem feugiat
                , sodales elit eget, rhoncus ipsum. Donec varius neque eu suscipit lacinia. Proin et lorem vehicula
                , imperdiet urna a, finibus dui.`,
            },
        },
        {
            'id': 4,
            'user-id': 1,
            'type': 'wish',
            'status': 'open',
            'content': {
                text: `Cras elementum`,
            },
        },
    ],
};

export default class EmaApiClient {
    public static async getAllEmas(): Promise<EmaListJson> {
        const response = await this.get('/emas');
        if (!response.ok) {
            throw new Error(`getAllEmas returns ${response.status}`);
        }
        return (await response.json()) as EmaListJson;
        // const json = (await response.json()) as EmaListJson;
        // if (!json.emas) { return localEmaList; } // TODO remove this line
        // return json;
}

    public static async createEma(userId: number, contentText: string): Promise<EmaCreationJson> {
        const body = {
            'user-id': userId,
            'type': 'wish',
            'status': 'open',
            'content': {
            text: contentText,
            },
        };
        const response = await this.post('/ema', body);
        if (response.status !== 201) {
            throw new Error(`createEma returns ${response.status}`);
        }
        return (await response.json()) as EmaCreationJson;
        // const json = (await response.json()) as EmaCreationJson;
        // if (!json.ema) { return localEmaCreationResult; } // TODO remove this line
        // return json;
    }

    private static async get(path: string) {
        return await fetch(this.createUrl(path));
    }

    private static async post(path: string, body: any) {
        return await fetch(this.createUrl(path), {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        });
    }

    private static createUrl(path: string) {
        return `http://localhost/api${path}`;
        // return `https://jsonplaceholder.typicode.com/users`;
    }
}
