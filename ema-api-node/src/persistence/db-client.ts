import Redis from 'ioredis';
import Ema from '../models/ema';

interface RedisEma {
    readonly id: number;
    readonly 'user-id': number;
    readonly type: string;
    readonly status: string;
    readonly text: string;
}

export class DbClient {

    private redisClient: Redis.Redis;

    constructor() {
        this.redisClient = new Redis(6379, 'redis');
    }

    async saveEma(ema: Ema): Promise<Ema> {
        // TODO: transaction
        const id = (await this.getAllKeys()).map(k => Number(k.substr(3))).reduce((a, b) => Math.max(a, b)) + 1;
        const emaWithId = {...ema, id: id}
        await this.redisClient.hmset(`ema${id}`, this.fromEma(emaWithId))
        return this.getEma(id)
    }

    async getEma(id: number): Promise<Ema> {
        const redisEma = await this.redisClient.hgetall(`ema${id}`);
        return this.toEma(redisEma);
    }

    async getAllKeys(): Promise<string[]> {
        return this.redisClient.keys('ema?*');
    }

    async getAllEmas(): Promise<Ema[]> {
        const keys = await this.getAllKeys();
        if (keys.length === 0) return [];

        const redisEmas = await this.getRedisEmas(keys);
        return redisEmas.map(this.toEma)
    }

    private async getRedisEmas(keys: string[]): Promise<RedisEma[]> {
        const pipe = this.redisClient.pipeline();
        keys.forEach(key => pipe.hgetall(key));
        const results: Array<[Error, RedisEma]> = await pipe.exec();

        results.map(result => result[0]).filter(error => error != null).forEach(console.error)
        return results.map(result => result[1]);
    }

    private toEma(redisEma: RedisEma): Ema {
        return {
            id: Number(redisEma.id),
            'user-id': Number(redisEma['user-id']),
            type: redisEma.type,
            status: redisEma.status,
            content: {
                text: redisEma.text,
            }
        }
    }

    private fromEma(ema: Ema): RedisEma {
        return {
            id: ema.id,
            'user-id': ema['user-id'],
            type: ema.type,
            status: ema.status,
            text: ema.content.text,
        }
    }
}
const client = new DbClient();
export default client;