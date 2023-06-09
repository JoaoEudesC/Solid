import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";
import { v4 as uuid } from 'uuid';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User(name , email)
    Object.assign(user , {
      id:uuid(),
      name,
      email,
      admin:false,
      created_at: new Date(),
      updated_at: new Date()
    });
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  turnAdmin({id}: User): User {
    const user = this.findById(id);
    if (!user) {
      throw new Error('User not found');
    }

    user.admin = true;
    user.updated_at = new Date();

    return user;
  }

  

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
