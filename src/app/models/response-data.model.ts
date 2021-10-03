export class ResponseData {
    public count: number;
    public next: string;
    public previous: string;
    public results: Data[] = [];
}

export class Data {
    public name: string;
    public url: string;
}