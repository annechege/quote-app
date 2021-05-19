export class Quote {
  constructor(
      public id: number,
      public name: string,
      public words: string,
      public author: string,
      public datePosted: Date,
      public upvote: number,
      public downvote: number) {
  }
}
