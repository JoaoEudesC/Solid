##### **\*\***\*\*\*\***\*\*** - Utilzação do principio solid da arquitetura SOLID , baseado no clean arquitetura do uncle bob, suas implementações e como mais ou menos funciona passo a passo abaixo:

1 - Crio o meu banco de dados na pasta model , que é no caso o nosso schema, mas como neste caso a gente ainda não esta utilizando banco de dados ele é uma class sendo implementado e colocado em um objeto

2 - Crio uma pasta useCases e para cada funcionalidade nova criada na minha aplicação(Regra de negocio) eu crio uma nova pasta com o nome da funcionalidade ex:CreateUser, serve para qualquer funcionalidade

3 - dentro desta pasta eu vou criar tres arquivos(index.ts, CreateUserController.ts e CreateUserUseCase.ts ) este é um exemplo, mas pode ser qualquer funcionalidade

4 - Dentro da pasta repositories, possui uma pasta UsersRepository.ts onde será importado o model do nosso banco de dados escrito as funções com base no que queremos, por exemplo: create , findById , findByEmail.

5 - Temos dentro da pasta repositories uma pasta de interfaces que vai receber o schema do model para criar um interface para tipar o que será passado nas funções

6 - o arquivo index.ts dentro do usecases de cada funcionalidade vai receber a função respectiva dele do implementations, a pasta repositories e implementations funciona como se fosse um service

7 - O useCase vai receber esta função e em seguida e executar e passar para ser enviado na requisição pelo arquivo controller(Funciona como se fosse o service para que o controller so possua a funcionalidade de enviar a requisição)

8 - Criamos o arquivo de rotas, e neste arquivo de rotas vamos enviar a função respectiva para a rota criada , para a requisição ser feita

9 - é uma arquitetura que da mais voltas , mas funciona bem.
