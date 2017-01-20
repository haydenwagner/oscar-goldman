export class Post{
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public preview: string,
    public pubDate: string,
    public markdown: string) { }
}
