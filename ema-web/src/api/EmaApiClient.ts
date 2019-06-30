export interface EmaJson {
    id: number;
    userId: number;
    type: string;
    status: string;
    content: {
        text: string;
    };
}

export interface EmaListJson {
    emas: EmaJson[];
}

export default class EmaApiClient {
    public static async getAllEmas(): Promise<EmaListJson> {
        const response = await this.get('/emas');
        if (!response.ok) {
            throw new Error(`getAllEmas returns ${response.status}`);
        }
        return (await response.json()) as EmaListJson;
}

    public static async createEma(userId: number, contentText: string): Promise<boolean> {
        const body = {
            userId: userId,
            type: 'wish',
            status: 'open',
            content: {
              text: contentText,
            },
        };
        const response = await this.post('/emas', body);
        if (response.status === 400) {
          throw new Error((await response.json()).cause);
        } else if (response.status !== 201) {
          throw new Error(`createEma returns ${response.status}`);
        }
        return true;
    }

    public static async deleteEma(id: number): Promise<boolean> {
      const response = await this.delete(`/emas/${id}`);
      if (response.status === 500) {
        throw new Error(`Failed to delete ema (id:${id})`)
      }
      return true;
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

    private static async delete(path: string) {
      return await fetch(this.createUrl(path), {
            method: 'DELETE'
      });
  }

  private static createUrl(path: string) {
        return `${process.env.VUE_APP_API_URL}${path}`;
    }
}
