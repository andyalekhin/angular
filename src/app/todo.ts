export class Todo {
  id: number;
  complete: boolean;
  title: string;
  description: string;
  
  constructor (id: number, complete: boolean, title:string, description: string) {
    this.id = id;
    this.complete = complete;
    this.title = title;
    this.description = description;
  }
}