import { Estado } from './cadastro/estado.model';
import { Cidade } from './cadastro/cidade.model';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {
  getEstados(){
    return[
      new Estado(1, "Acre"),
      new Estado(2, "Alagoas"),
      new Estado(3, "Amapá"),
      new Estado(4, "Amazonas"),
      new Estado(5, "Bahia"),
      new Estado(6, "Ceará"),
      new Estado(7, "Distrito Federal"),
      new Estado(8, "Espírito Santo"),
      new Estado(9, "Goiás"),
      new Estado(10, "Maranhão"),
      new Estado(11, "Mato Grosso"),
      new Estado(12, "Mato Grosso do Sul"),
      new Estado(13, "Minas Gerais"),
      new Estado(14, "Pará"),
      new Estado(15, "Paraíba"),
      new Estado(16, "Pernambuco"),
      new Estado(17, "Piauí"),
      new Estado(18, "Rio de Janeiro"),
      new Estado(19, "Rio Grande do Norte"),
      new Estado(20, "Rio Grande do Sul"),
      new Estado(21, "Rondônia"),
      new Estado(22, "Roraíma"),
      new Estado(23, "Santa Catarina"),
      new Estado(24, "São Paulo"),
      new Estado(25, "Sergipe"),
      new Estado(26, "Tocantins")
    ]
  }

  getCidades(){
    return[
      new Cidade(1, "Abaiara", 6),
      new Cidade(2, "Acarape", 6),
      new Cidade(3, "Acaraú", 6),
      new Cidade(4, "Acopiara", 6),
      new Cidade(5, "Aiuaba", 6),
      new Cidade(6, "Alcantras", 6),
      new Cidade(7, "Altaneira", 6),
      new Cidade(8, "Alto Santo", 6),
      new Cidade(9, "Amontada", 6),
      new Cidade(10, "Antonina do Norte", 6),
      new Cidade(11, "Apuiares", 6),
      new Cidade(12, "Aquiraz", 6),
      new Cidade(13, "Aracati", 6),
      new Cidade(14, "Aracoiaba", 6),
      new Cidade(15, "Ararenda", 6),
      new Cidade(16, "Araripe", 6),
      new Cidade(17, "Aratuba", 6),
      new Cidade(18, "Arneiroz", 6),
      new Cidade(19, "Assare", 6),
      new Cidade(20, "Aurora", 6),
      new Cidade(21, "Baixio", 6),
      new Cidade(22, "Banabuiu", 6),
      new Cidade(23, "Barbalha", 6),
      new Cidade(24, "Barreira", 6),
      new Cidade(25, "Barro", 6),
      new Cidade(26, "Barroquinha", 6),
      new Cidade(27, "Baturite", 6),
      new Cidade(28, "Bela Cruz", 6),
      new Cidade(29, "Boa Viagem", 6),
      new Cidade(30, "Brejo Santo", 6),
      new Cidade(31, "Camocim", 6),
      new Cidade(32, "Campos Sales", 6),
      new Cidade(33, "Canindé", 6),
      new Cidade(34, "Capistrano", 6),
      new Cidade(35, "Caridade", 6),
      new Cidade(36, "Cariré", 6),
      new Cidade(37, "Caririaçu", 6),
      new Cidade(38, "Cariús", 6),
      new Cidade(39, "Carnaubal", 6)
    ]
  }
  constructor() { }

}
