class funcionario{
    constructor(nome, salario){
        if(new.target === funcionario){
            throw new Error("Não é possível a classe funcionário diretamente.")
        }
    this.nome = nome;
    this.salario = salario; 
    }

    descreverAtividades(){
        throw new Error("Método 'descreverAtividades() deve ser implementado.'")
    }

    CalcularBonus(){
        throw new Error("Método 'CalcularBonus() deve ser implementado.")
    }

}

class Atendente extends funcionario{
  constructor(nome, salario, turno){ 
    super(nome,salario); // construtor da classe base
    this.turno = turno;
  }

  descreverAtividades(){
    console.log(`${this.nome} está atendendo clientes no horário da ${this.turno}`)
  }

  CalcularBonus(){
    return this.salario * 0.12; //Bonus de 12% no salário
  }

}
// Classe 'gerente' que herda de 'funcionario'
class gerente extends funcionario {
    constructor(nome, salario, departamento){
        super(nome, salario);
        this.departamento = departamento;  // Adiciona a propriedade 'departamento'
    }

    descreverAtividades(){
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}`)
    }

    CalcularBonus(){
        return this.salario * 0.25; //bonus de 25% no salário
    }

}

const funcionarios = []; 
// Adiciona instâncias de 'Atendente' e 'Gerente' 
funcionarios.push(new Atendente('Joana', 1700, 'Manhã'));
funcionarios.push(new gerente ('Lucas', 3000, 'Vendas'))

funcionarios.forEach(funcionario => {
    funcionario.descreverAtividades();
    console.log(`Bonus: ${funcionario.CalcularBonus()}`);
    console.log('-------------------');
});