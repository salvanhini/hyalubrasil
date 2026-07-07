const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");

const requiredText = [
  "Sobre a HyaluBrasil",
  "Portfólio de Produtos",
  "Soluções em Importação",
  "Contato",
  "Solicitar Cotação",
  "Hialuronato de Sódio direto do fabricante global para sua indústria",
  "Ver Portfólio",
  "Grau Cosmético",
  "Grau Farmacêutico",
  "Fornecedores Qualificados",
  "Suporte Técnico",
  "Flexibilidade",
  "Operação Local",
  "Direcionamento Institucional",
  "Missão",
  "Visão",
  "Valores",
  "Processo Estratégico",
  "Da demanda técnica ao acesso seguro ao mercado brasileiro",
  "Análise da Demanda",
  "Curadoria Internacional",
  "Documentação e Regulação",
  "Inteligência Logística",
  "Parceria Contínua",
  "Precisa de Hialuronato de Sódio qualificado?",
  "Falar pelo WhatsApp",
  "Política de Privacidade",
  "Termos de Uso",
];

const requiredFields = ['name="nome"', 'name="empresa"', 'name="email"', 'name="mensagem"'];

for (const text of requiredText) {
  if (!html.includes(text)) {
    throw new Error(`Texto obrigatório ausente: ${text}`);
  }
}

for (const field of requiredFields) {
  if (!html.includes(field)) {
    throw new Error(`Campo obrigatório ausente: ${field}`);
  }
}

if (!html.includes("assets/hyalu-brand-background.png")) {
  throw new Error("Imagem hero do projeto não foi referenciada.");
}

if (!html.includes("assets/hyalu-logo-nav-transparent.png")) {
  throw new Error("Logo real da Hyalu Brasil não foi referenciada.");
}

console.log("PASS: conteúdo essencial da página Hyalu Brasil encontrado.");
