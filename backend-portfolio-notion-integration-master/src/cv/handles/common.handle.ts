import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type HandleDataDefault = BlockObjectResponse;

export interface Handle<HandleData = HandleDataDefault> {
  setNext(resolver: Handle<HandleData>): Handle<HandleData>;

  resolve(data: HandleData): Promise<void>;
}

export abstract class CommonHandle<HandleData = HandleDataDefault>
  implements Handle<HandleData>
{
  private nextHandle: Handle<HandleData>;

  setNext(resolver: Handle<HandleData>): Handle<HandleData> {
    this.nextHandle = resolver;

    return resolver;
  }

  async resolve(data: HandleData) {
    if (this.nextHandle) {
      return this.nextHandle.resolve(data);
    }

    return null;
  }
}
