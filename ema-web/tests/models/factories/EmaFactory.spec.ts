import EmaFactory from '@/models/factories/EmaFactory.ts';
import Ema from '@/models/Ema';
import EmaContent from '@/models/EmaContent';

const json = `{
    "emas": [
        {
            "id": 1,
            "userId": 1,
            "type": "wish",
            "status": "open",
            "content": {
                "text": "Wish 1"
            }
        },
        {
            "id": 2,
            "userId": 1,
            "type": "goal",
            "status": "open",
            "content": {
                "text": "Goal 1"
            }
        }
    ]
}`;

describe('EmaFactory', () => {
    describe('createListFromJson', () => {
        test('to create an array of Ema when called with json with multiple emas', () => {
            expect(EmaFactory.createListFromJson(JSON.parse(json))).toEqual([
                new Ema(1, 1, 'wish', 'open', new EmaContent('Wish 1')),
                new Ema(2, 1, 'goal', 'open', new EmaContent('Goal 1')),
            ]);
        });

        test('to create an empty array of Ema when called with json with 0 emas', () => {
            expect(EmaFactory.createListFromJson(JSON.parse('{"emas": []}'))).toEqual([]);
        });

        test('to create an empty array of Ema when called with invalid json', () => {
            expect(EmaFactory.createListFromJson(JSON.parse('{"invalid": "invalid"}'))).toEqual([]);
        });
    });
});
