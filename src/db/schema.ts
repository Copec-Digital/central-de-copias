import { sql } from "drizzle-orm";
import {
  datetime,
  float,
  index,
  int,
  mysqlTable,
  mysqlView,
  smallint,
  text,
  tinyint,
  varchar,
} from "drizzle-orm/mysql-core";

export const alunos = mysqlTable("alunos", {
  id: int().autoincrement().notNull(),
  nome: text("Nome").notNull(),
  responsavelFinanceiro: text("ResponsavelFinanceiro").notNull(),
  matricula: text("Matricula").notNull(),
  idInstituicao: int("IDInstituicao").default(0).notNull(),
  mifare: text("Mifare").notNull(),
  removido: tinyint("Removido").default(0).notNull(),
  creditos: float("Creditos", { precision: 10, scale: 2 }).notNull(),
  internet: tinyint("Internet").default(0).notNull(),
});

export const caixa = mysqlTable("caixa", {
  id: int().autoincrement().notNull(),
  idCentroCopias: int("IDCentroCopias").default(0).notNull(),
  dataHoraAbertura: datetime("DataHoraAbertura", { mode: "string" })
    .default("2000-01-01 00:00:00")
    .notNull(),
  valorAbertura: float("ValorAbertura", { precision: 10, scale: 2 }).notNull(),
  aberto: tinyint("Aberto").default(1).notNull(),
  dataHoraFechamento: datetime("DataHoraFechamento", { mode: "string" })
    .default("2000-01-01 00:00:00")
    .notNull(),
  valorFechamento: float("ValorFechamento", {
    precision: 10,
    scale: 2,
  }).notNull(),
  fechamentoManual: tinyint("FechamentoManual").default(0).notNull(),
});

export const caixaMovimento = mysqlTable("caixa_movimento", {
  id: int().autoincrement().notNull(),
  idCaixa: int("IDCaixa").default(0).notNull(),
  tipoMovimento: smallint("TipoMovimento").notNull(),
  dataHora: datetime("DataHora", { mode: "string" })
    .default("2000-01-01 00:00:00")
    .notNull(),
  idFuncionario: int("IDFuncionario").default(0).notNull(),
  valorUnitario: float("ValorUnitario", { precision: 10, scale: 2 }).notNull(),
});

export const centrosCopias = mysqlTable("centros_copias", {
  id: int().autoincrement().notNull(),
  idSite: int("IDSite").default(0).notNull(),
  nome: varchar("Nome", { length: 100 }).default("'").notNull(),
  email: varchar("EMail", { length: 80 }).default("'").notNull(),
  removido: tinyint("Removido").default(0).notNull(),
});

export const departamentos = mysqlTable("departamentos", {
  id: int().autoincrement().notNull(),
  idInstituicao: int("IDInstituicao").default(0).notNull(),
  nome: text("Nome").notNull(),
  codigo: varchar("Codigo", { length: 15 }).default("'").notNull(),
  possuiLimiteOrcamento: tinyint("PossuiLimiteOrcamento").default(0).notNull(),
  podeAlterarValor: tinyint("PodeAlterarValor").default(0).notNull(),
  podeAnonimo: tinyint("PodeAnonimo").default(0),
  valorCota: float("ValorCota", { precision: 10, scale: 2 }).notNull(),
  distribuicao: tinyint("Distribuicao").default(0).notNull(),
  alerta: tinyint("Alerta").default(0).notNull(),
  quandoEstoura: tinyint("QuandoEstoura").default(0).notNull(),
  saldoMes: tinyint("SaldoMes").default(0).notNull(),
  saldoAno: smallint("SaldoAno").notNull(),
  saldoValor: float("SaldoValor", { precision: 10, scale: 2 }).notNull(),
  removido: tinyint("Removido").default(0).notNull(),
  email: text("EMail").notNull(),
  idChefe: int("IDChefe").default(0).notNull(),
});

export const equipamentos = mysqlTable("equipamentos", {
  id: int().autoincrement().notNull(),
  numero: int("Numero").default(0).notNull(),
  fabricante: int("Fabricante").default(0).notNull(),
  modelo: varchar("Modelo", { length: 100 }).default("'").notNull(),
  tipo: tinyint("Tipo").default(0).notNull(),
  idCentroCopias: int("IDCentroCopias").default(0).notNull(),
});

export const equipamentosContadores = mysqlTable("equipamentos_contadores", {
  id: int().autoincrement().notNull(),
  dataHora: datetime("DataHora", { mode: "string" })
    .default("2000-01-01 00:00:00")
    .notNull(),
  idEquipamento: int("IDEquipamento").default(0).notNull(),
  contadorGeral: int("ContadorGeral").default(0).notNull(),
  contadorPb: int("ContadorPB").default(0).notNull(),
  contadorCor: int("ContadorCor").default(0).notNull(),
  refugadas: int("Refugadas").default(0).notNull(),
  observacoes: varchar("Observacoes", { length: 500 }).default("'").notNull(),
  idFuncionario: int("IDFuncionario").default(0).notNull(),
});

export const estoque = mysqlTable("estoque", {
  id: int().autoincrement().notNull(),
  quantidadeAtual: int("QuantidadeAtual").default(0).notNull(),
  quantidadeMinima: int("QuantidadeMinima").default(0).notNull(),
  idItem: int("IDItem").default(0).notNull(),
  idCentroCopias: int("IDCentroCopias").default(0).notNull(),
});

export const filaImpressao = mysqlTable("fila_impressao", {
  id: int().autoincrement().notNull(),
  tipoEnvio: tinyint("TipoEnvio").default(0).notNull(),
  dataHora: datetime("DataHora", { mode: "string" })
    .default("2000-01-01 00:00:00")
    .notNull(),
  dataHoraPronto: datetime("DataHoraPronto", { mode: "string" })
    .default("2000-01-01 00:00:00")
    .notNull(),
  dataHoraEntrega: datetime("DataHoraEntrega", { mode: "string" })
    .default("2000-01-01 00:00:00")
    .notNull(),
  status: tinyint("Status").default(0).notNull(),
  idVenda: int("IDVenda").default(0).notNull(),
  idSolicitante: int("IDSolicitante").default(0).notNull(),
  idDepartamento: int("IDDepartamento").default(0).notNull(),
  idCentroCopias: int("IDCentroCopias").default(0).notNull(),
  codigoIndex: int("CodigoIndex").default(0).notNull(),
  arquivo: varchar("Arquivo", { length: 250 }).default("'").notNull(),
  origemArquivo: tinyint("OrigemArquivo").default(0).notNull(),
  configuracoes: varchar("Configuracoes", { length: 100 })
    .default("'")
    .notNull(),
  quantidade: int("Quantidade").default(0).notNull(),
  tipoSolicitante: tinyint("TipoSolicitante").default(0).notNull(),
  observacoes: text("Observacoes").notNull(),
});

export const itens = mysqlTable("itens", {
  id: int().autoincrement().notNull(),
  codigo: varchar("Codigo", { length: 25 }).default("'").notNull(),
  descricao: varchar("Descricao", { length: 250 }).notNull(),
  podeSerVendido: tinyint("PodeSerVendido").default(1).notNull(),
  tipo: tinyint("Tipo").default(0).notNull(),
  valorUnitario: float("ValorUnitario", { precision: 10, scale: 2 }).notNull(),
  removido: tinyint("Removido").default(0).notNull(),
  ehServico: tinyint("EhServico").default(0).notNull(),
  tamanhoPapel: tinyint("TamanhoPapel").default(0).notNull(),
  cor: tinyint("Cor").default(0).notNull(),
  substrato: tinyint("Substrato").default(0).notNull(),
  valorCc: float("ValorCC", { precision: 10, scale: 2 }).notNull(),
  valorDepto: float("ValorDepto", { precision: 10, scale: 2 }).notNull(),
  qtdComponente1: int("QtdComponente1").default(0).notNull(),
  qtdComponente2: int("QtdComponente2").default(0).notNull(),
  qtdComponente3: int("QtdComponente3").default(0).notNull(),
  qtdComponente4: int("QtdComponente4").default(0).notNull(),
  qtdComponente5: int("QtdComponente5").default(0).notNull(),
  componente1: varchar("Componente1", { length: 100 }).default("'").notNull(),
  componente2: varchar("Componente2", { length: 100 }).default("'").notNull(),
  componente3: varchar("Componente3", { length: 100 }).default("'").notNull(),
  componente4: varchar("Componente4", { length: 100 }).default("'").notNull(),
  componente5: varchar("Componente5", { length: 100 }).default("'").notNull(),
});

export const itensVendidos = mysqlTable("itens_vendidos", {
  id: int().autoincrement().notNull(),
  idVenda: int("IDVenda").default(0).notNull(),
  idItem: int("IDItem").default(0).notNull(),
  quantidade: int("Quantidade").default(0).notNull(),
  valorUnitario: float("ValorUnitario", { precision: 10, scale: 2 }).notNull(),
  componente1: varchar("Componente1", { length: 15 }).default("'").notNull(),
  componente2: varchar("Componente2", { length: 15 }).default("'").notNull(),
  componente3: varchar("Componente3", { length: 15 }).default("'").notNull(),
  componente4: varchar("Componente4", { length: 15 }).default("'").notNull(),
  componente5: varchar("Componente5", { length: 15 }).default("'").notNull(),
});

export const itensVendidosOld = mysqlTable("itens_vendidos_old", {
  id: int().autoincrement().notNull(),
  idVenda: int("IDVenda").default(0).notNull(),
  idItem: int("IDItem").default(0).notNull(),
  quantidade: int("Quantidade").default(0).notNull(),
  valorUnitario: float("ValorUnitario", { precision: 10, scale: 2 }).notNull(),
  componente1: varchar("Componente1", { length: 15 }).default("'").notNull(),
  componente2: varchar("Componente2", { length: 15 }).default("'").notNull(),
  componente3: varchar("Componente3", { length: 15 }).default("'").notNull(),
  componente4: varchar("Componente4", { length: 15 }).default("'").notNull(),
  componente5: varchar("Componente5", { length: 15 }).default("'").notNull(),
});

export const ordensServico = mysqlTable("ordens_servico", {
  id: int().autoincrement().notNull(),
  idCentroCopias: int("IDCentroCopias").default(0).notNull(),
  dataHoraAbertura: datetime("DataHoraAbertura", { mode: "string" })
    .default("2000-01-01 00:00:00")
    .notNull(),
  idEquipamento: int("IDEquipamento").default(0).notNull(),
  problema: text("Problema").notNull(),
  idFuncionario: int("IDFuncionario").default(0).notNull(),
  tipoEquipamento: smallint("TipoEquipamento").notNull(),
  equipamento: varchar("Equipamento", { length: 250 }).default("'").notNull(),
  ativa: tinyint("Ativa").default(1).notNull(),
  dataHoraFechamento: datetime("DataHoraFechamento", { mode: "string" })
    .default("2000-01-01 00:00:00")
    .notNull(),
});

export const professores = mysqlTable("professores", {
  id: int().autoincrement().notNull(),
  idInstituicao: int("IDInstituicao").default(0).notNull(),
  email: text("EMail").notNull(),
  senha: varchar("Senha", { length: 32 }).default("'").notNull(),
  nome: text("Nome").notNull(),
  matricula: text("Matricula").notNull(),
  mifare: varchar("Mifare", { length: 12 }).default("'").notNull(),
  removido: tinyint("Removido").default(0).notNull(),
});

export const professoresDepartamentos = mysqlTable(
  "professores_departamentos",
  {
    id: int().autoincrement().notNull(),
    idProfessor: int("IDProfessor").default(0).notNull(),
    idDepartamento: int("IDDepartamento").notNull(),
    necessitaPreAutorizar: tinyint("NecessitaPreAutorizar")
      .default(0)
      .notNull(),
    cotaOriginal: float("CotaOriginal", { precision: 10, scale: 2 }).notNull(),
    saldoMes: tinyint("SaldoMes").default(0).notNull(),
    saldoAno: smallint("SaldoAno").notNull(),
    saldoValor: float("SaldoValor", { precision: 10, scale: 2 }).notNull(),
  },
);

export const usoSuprimentos = mysqlTable("uso_suprimentos", {
  id: int().autoincrement().notNull(),
  idItem: int("IDItem").default(0).notNull(),
  dataHora: datetime("DataHora", { mode: "string" })
    .default("2000-01-01 00:00:00")
    .notNull(),
  quantidade: smallint("Quantidade").notNull(),
  idEquipamento: int("IDEquipamento").default(0).notNull(),
  contador: int("Contador").default(0).notNull(),
});

export const vendas = mysqlTable(
  "vendas",
  {
    id: int().autoincrement().notNull(),
    idCaixaMovimento: int("IDCaixaMovimento").default(0).notNull(),
    idCaixaMovimentoC: int("IDCaixaMovimentoC").default(0).notNull(),
    idComprador: int("IDComprador").default(0).notNull(),
    tipoComprador: smallint("TipoComprador").notNull(),
    idCentroCopias: int("IDCentroCopias").default(0).notNull(),
    idFuncionario: int("IDFuncionario").default(0).notNull(),
    idDepartamento: int("IDDepartamento").notNull(),
    dataHora: datetime("DataHora", { mode: "string" })
      .default("2000-01-01 00:00:00")
      .notNull(),
    formaPagamento: smallint("FormaPagamento").notNull(),
    nsu: int("NSU").notNull(),
    pix: varchar("PIX", { length: 100 }).default("'").notNull(),
    faturado: tinyint("Faturado").default(0).notNull(),
    status: tinyint("Status").default(0).notNull(),
    motivo: varchar("Motivo", { length: 100 }).default("'").notNull(),
    idAutorizante: int("IDAutorizante").default(0).notNull(),
    dataHoraAutorizacao: datetime("DataHoraAutorizacao", { mode: "string" })
      .default("2000-01-01 00:00:00")
      .notNull(),
    entregue: tinyint("Entregue").default(0).notNull(),
  },
  (table) => [index("Complemento").on(table.idCaixaMovimentoC)],
);
export const loginInternet = mysqlView("login_internet", {
  id: int().default(0).notNull(),
  login: varchar("Login", { length: 15 }).default("'").notNull(),
  senha: varchar("Senha", { length: 32 }).default("'").notNull(),
  idInstituicao: int("IDInstituicao").default(0).notNull(),
  iddca: int("IDDCA").default(0).notNull(),
  tabela: tinyint("Tabela").default(0).notNull(),
  atualizado: tinyint("Atualizado").default(0).notNull(),
  primeiroLogin: tinyint("PrimeiroLogin").default(1).notNull(),
})
  .algorithm("undefined")
  .sqlSecurity("definer")
  .as(
    sql`select \`copec_centrocopias\`.\`login_internet\`.\`id\` AS \`id\`,\`copec_centrocopias\`.\`login_internet\`.\`Login\` AS \`Login\`,\`copec_centrocopias\`.\`login_internet\`.\`Senha\` AS \`Senha\`,\`copec_centrocopias\`.\`login_internet\`.\`IDInstituicao\` AS \`IDInstituicao\`,\`copec_centrocopias\`.\`login_internet\`.\`IDDCA\` AS \`IDDCA\`,\`copec_centrocopias\`.\`login_internet\`.\`Tabela\` AS \`Tabela\`,\`copec_centrocopias\`.\`login_internet\`.\`Atualizado\` AS \`Atualizado\`,\`copec_centrocopias\`.\`login_internet\`.\`PrimeiroLogin\` AS \`PrimeiroLogin\` from \`copec_centrocopias\`.\`login_internet\``,
  );

export const instituicoes = mysqlView("instituicoes", {
  id: int().default(0).notNull(),
  razaoSocial: varchar("RazaoSocial", { length: 100 }).default("'").notNull(),
  nomeFantasia: varchar("NomeFantasia", { length: 100 }).default("'").notNull(),
  endereco: varchar("Endereco", { length: 100 }).default("'").notNull(),
  numero: int("Numero").default(0).notNull(),
  complemento: varchar("Complemento", { length: 80 }).default("'").notNull(),
  bairro: varchar("Bairro", { length: 50 }).default("'").notNull(),
  cep: varchar("CEP", { length: 9 }).default("'").notNull(),
  cidade: varchar("Cidade", { length: 50 }).default("'Joinville'").notNull(),
  uf: varchar("UF", { length: 2 }).default("'SC'").notNull(),
  cnpj: varchar("CNPJ", { length: 18 }).default("'").notNull(),
  ie: varchar("IE", { length: 25 }).default("'").notNull(),
  telefone: varchar("Telefone", { length: 25 }).default("'").notNull(),
  numSites: smallint("NumSites").default(1).notNull(),
  removido: tinyint("Removido").default(0).notNull(),
  bancoDeDados: varchar("BancoDeDados", { length: 50 }).notNull(),
  ignoraRelacionamentoPd: tinyint("IgnoraRelacionamentoPD")
    .default(0)
    .notNull(),
})
  .algorithm("undefined")
  .sqlSecurity("definer")
  .as(
    sql`select \`copec_centrocopias\`.\`instituicoes\`.\`id\` AS \`id\`,\`copec_centrocopias\`.\`instituicoes\`.\`RazaoSocial\` AS \`RazaoSocial\`,\`copec_centrocopias\`.\`instituicoes\`.\`NomeFantasia\` AS \`NomeFantasia\`,\`copec_centrocopias\`.\`instituicoes\`.\`Endereco\` AS \`Endereco\`,\`copec_centrocopias\`.\`instituicoes\`.\`Numero\` AS \`Numero\`,\`copec_centrocopias\`.\`instituicoes\`.\`Complemento\` AS \`Complemento\`,\`copec_centrocopias\`.\`instituicoes\`.\`Bairro\` AS \`Bairro\`,\`copec_centrocopias\`.\`instituicoes\`.\`CEP\` AS \`CEP\`,\`copec_centrocopias\`.\`instituicoes\`.\`Cidade\` AS \`Cidade\`,\`copec_centrocopias\`.\`instituicoes\`.\`UF\` AS \`UF\`,\`copec_centrocopias\`.\`instituicoes\`.\`CNPJ\` AS \`CNPJ\`,\`copec_centrocopias\`.\`instituicoes\`.\`IE\` AS \`IE\`,\`copec_centrocopias\`.\`instituicoes\`.\`Telefone\` AS \`Telefone\`,\`copec_centrocopias\`.\`instituicoes\`.\`NumSites\` AS \`NumSites\`,\`copec_centrocopias\`.\`instituicoes\`.\`Logo\` AS \`Logo\`,\`copec_centrocopias\`.\`instituicoes\`.\`Removido\` AS \`Removido\`,\`copec_centrocopias\`.\`instituicoes\`.\`BancoDeDados\` AS \`BancoDeDados\`,\`copec_centrocopias\`.\`instituicoes\`.\`IgnoraRelacionamentoPD\` AS \`IgnoraRelacionamentoPD\` from \`copec_centrocopias\`.\`instituicoes\``,
  );

export const instituicoesSites = mysqlView("instituicoes_sites", {
  id: int().default(0).notNull(),
  idInstituicao: int("IDInstituicao").default(0).notNull(),
  nome: varchar("Nome", { length: 100 }).default("'").notNull(),
  endereco: varchar("Endereco", { length: 100 }).default("'").notNull(),
  numero: int("Numero").default(0).notNull(),
  complemento: varchar("Complemento", { length: 80 }).default("'").notNull(),
  bairro: varchar("Bairro", { length: 50 }).default("'").notNull(),
  cep: varchar("CEP", { length: 9 }).default("'").notNull(),
  cidade: varchar("Cidade", { length: 50 }).default("'Joinville'").notNull(),
  uf: varchar("UF", { length: 2 }).default("'SC'").notNull(),
  telefone: varchar("Telefone", { length: 25 }).default("'").notNull(),
  removido: tinyint("Removido").default(0).notNull(),
})
  .algorithm("undefined")
  .sqlSecurity("definer")
  .as(
    sql`select \`copec_centrocopias\`.\`instituicoes_sites\`.\`id\` AS \`id\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`IDInstituicao\` AS \`IDInstituicao\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`Nome\` AS \`Nome\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`Endereco\` AS \`Endereco\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`Numero\` AS \`Numero\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`Complemento\` AS \`Complemento\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`Bairro\` AS \`Bairro\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`CEP\` AS \`CEP\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`Cidade\` AS \`Cidade\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`UF\` AS \`UF\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`Telefone\` AS \`Telefone\`,\`copec_centrocopias\`.\`instituicoes_sites\`.\`Removido\` AS \`Removido\` from \`copec_centrocopias\`.\`instituicoes_sites\``,
  );

export const funcionarios = mysqlView("funcionarios", {
  id: int().default(0).notNull(),
  nome: varchar("Nome", { length: 60 }).default("'").notNull(),
  matricula: varchar("Matricula", { length: 15 }).default("'").notNull(),
  senha: varchar("Senha", { length: 32 }).default("'").notNull(),
  nivel: tinyint("Nivel").default(0).notNull(),
  removido: tinyint("Removido").default(0).notNull(),
})
  .algorithm("undefined")
  .sqlSecurity("definer")
  .as(
    sql`select \`copec_centrocopias\`.\`funcionarios\`.\`id\` AS \`id\`,\`copec_centrocopias\`.\`funcionarios\`.\`Nome\` AS \`Nome\`,\`copec_centrocopias\`.\`funcionarios\`.\`Matricula\` AS \`Matricula\`,\`copec_centrocopias\`.\`funcionarios\`.\`Senha\` AS \`Senha\`,\`copec_centrocopias\`.\`funcionarios\`.\`Nivel\` AS \`Nivel\`,\`copec_centrocopias\`.\`funcionarios\`.\`Removido\` AS \`Removido\` from \`copec_centrocopias\`.\`funcionarios\``,
  );
