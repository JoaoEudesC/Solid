import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin: boolean = false;
  email: string;
  created_at: Date;
  updated_at: Date;
  
  constructor(name: string, email: string) {
    this.id = uuidV4();
    this.name = name;
    this.email = email;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}


describe('User Model', () => {
  it('Should be able to create an user with all props', () => {
    const user = new User('John Doe', 'john.doe@example.com');

    expect(user.id).toBeDefined();
    expect(typeof user.id).toBe('string');

    expect(user.name).toBe('John Doe');

    expect(user.admin).toBe(false);

    expect(user.email).toBe('john.doe@example.com');

    expect(user.created_at).toBeDefined();
    expect(user.created_at).toBeInstanceOf(Date);

    expect(user.updated_at).toBeDefined();
    expect(user.updated_at).toBeInstanceOf(Date);
  });
});

export { User };
