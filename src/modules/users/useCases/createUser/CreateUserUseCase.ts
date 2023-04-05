import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, name }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("Email address already in use");
    }

    const user = await this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
