export class Post{
  constructor(
    public id: string,
    public cardImage: string,
    public title: string,
    public author: string,
    public preview: string,
    public pubDate: string,
    public mainPoints: string,
    public markdown: string) { }
}
