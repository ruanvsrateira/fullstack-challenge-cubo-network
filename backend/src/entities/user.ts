export class User {
  public id?: number;

  public name!: string;
  public lastName!: string;
  public participation!: string;

  constructor(props: Omit<User, "id">) {
    Object.assign(this, props);
  }
}
