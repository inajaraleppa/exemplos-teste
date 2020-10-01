class Cliente {
  nome;
  dataDeNascimento;

  constructor(nome, dataDeNascimento) {
    this.nome = nome;
    this.dataDeNascimento = dataDeNascimento;
  }

  getNome() {
    return this.nome;
  }

  getIdade(formato = 'anos') {
    let diferencaEmDias = (Date.now() - this.dataDeNascimento)/(1000*60*60*24)
    
    if (formato == 'anos') {
      return Math.floor(diferencaEmDias/365);
    }

    if (formato == 'dias') {
      return Math.floor(diferencaEmDias);
    }
  }

}

module.exports = Cliente;