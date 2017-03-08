export class Post{
  constructor(
    public id: number,
    public cardImage: string,
    public title: string,
    public author: string,
    public preview: string,
    public pubDate: string,
    public mainPoints: string[],
    public url: string,
    public markdown: string) { }
}
