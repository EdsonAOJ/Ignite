# Cadastro de carro
**RF**
Deve ser possivel cadastrar um novo carro

**RN**
Não deve ser possivel cadastrar um carro com uma placa já existente.
Não deve ser possivel alterar a placa de um carro já cadaastrado
O carro deve ser cadastrado com dispolibilidade por padão
O usuario respovasel pelo cadastrado deve ser um usuario administrador



# Listagem de carros
**RF**
Deve ser possivel listar todos os carros disponiveis 
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**RN**
O usuario não precisa estar logado no sistema 



# Cadastro de especificação no carro
**RF**
Deve ser possivel cadastar uma especificação para um carro
Deve ser possivel listar todas as especificações
Deve ser possivel listar todos os carros


**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro
O usuario respovasel pelo cadastrado deve ser um usuario administrador



# Cadastro de imagens do carro
**RF**
Deve ser possivel cadastrar a imagem do carro
Deve ser possivel listar todos os carros

**RNF**
Ultilizar o multer para upload dos arquivos


**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro
O usuario respovasel pelo cadastrado deve ser um usuario administrador



# Alugel de carro
**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 1 dia/ 24 horas
Não deve ser possivel cadastrar um novo aliguem caso já exista um aberto para o mesmo usuario
Não deve ser possivel cadastrar um novo aliguem caso já exista um aberto para o mesmo carro




