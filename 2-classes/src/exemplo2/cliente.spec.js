describe("Cliente", function() {
  var Cliente = require('./cliente');
  
  it("has a name", function() {
    let maria = new Cliente('Maria da Silva')
    expect(maria.getNome()).toEqual('Maria da Silva');
  });

  describe("#getIdade", function() {
    // Falar do problema de se rodar este teste no ano que vem?
    
    var Cliente = require('./cliente');
    var fakeDateService = {
      now: function() {
        return new Date('2020-02-02');
      }
    }

    it("retorna idade em anos por padrão", function() {
      let maria = new Cliente('Maria da Silva', new Date("2010-01-26"))
      expect(maria.getIdade('anos', fakeDateService)).toEqual(10);
      
    });
  
    it("retorna idade em dias caso necessário", function() {
      let maria = new Cliente('Maria da Silva', new Date("2010-01-26"))
      expect(maria.getIdade('dias', fakeDateService)).toEqual(3659);
    });
  
  });
  
});
