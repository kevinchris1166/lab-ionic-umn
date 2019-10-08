export class Album {
    constructor(
        public id: string,
        public name: string,
        public artist: string,
        public imgUrl: string,
        public songs: Songs[],
    ) {}
}

export class Songs {
    constructor(
        public id: string,
        public title: string,
        public minute: number,
        public second: number,
    ) {}
}