import { app } from ".";

app.listen(3333, () => console.log("Server is running!"));



//Repare que aqui eu utilizei a organização do meu primeiro projeto em javascript , em que eu exporto o modulo do app do express para outro arquivo e inicio o servidor em outro arquivo
//ex: exportei o app do index.js para o arquivo server.ts e em seguida consegui utilizar passando o server.ts como caminho do nosso respawn e passei a porta aqui, essa é uma boa maneira de fazer com que o codigo seja utilizado de forma correta

