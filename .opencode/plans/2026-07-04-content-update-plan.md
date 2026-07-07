# Plano de Implementação: Atualização de Conteúdo do Site HyaluBrasil

## Resumo
Atualizar todo o conteúdo do site com as informações reais do Plano de Negócios REV 01, exceto dados de contato e fotos que serão fornecidos posteriormente.

---

## Mudanças por Seção

### 1. METADADOS HTML (Linhas 6-10)

**Arquivo:** `index.html`

| Campo | Atual | Novo |
|-------|-------|------|
| `title` | "Hyalu Brasil \| Importação estratégica para saúde" | "HyaluBrasil \| Hialuronato de Sódio \| Importação e Distribuição B2B" |
| `description` | "Hyalu Brasil: facilitadora estratégica de importações..." | "HyaluBrasil: intermediação estratégica na importação e distribuição de Hialuronato de Sódio para as indústrias brasileiras de saúde e beleza. Fornecedores qualificados, suporte técnico e conformidade regulatória." |

---

### 2. HERO SECTION (Linhas 51-75)

**Mudanças:**

#### 2.1 Headline (Linha 53)
**Atual:** "Intermediação estratégica para insumos cosméticos e produtos da saúde"
**Novo:** "Ponte estratégica entre fabricantes globais e a indústria brasileira de saúde e beleza"

#### 2.2 Parágrafo principal (Linhas 54-58)
**Atual:**
```
A Hyalu Brasil conecta ciência, qualidade e eficiência operacional para representar, importar, distribuir
e comercializar insumos de alto valor agregado, com foco em hialuronato de sódio e soluções para os mercados
cosmético, farmacêutico, nutracêutico e de saúde.
```
**Novo:**
```
A HyaluBrasil soluciona o gargalo de fornecimento de matéria-prima de alta qualidade para as indústrias brasileiras.
Atuamos como representante local de fabricantes internacionais, oferecendo Hialuronato de Sódio com qualidade atestada,
rastreabilidade e disponibilidade imediata — sem lote mínimo e com suporte técnico especializado.
```

#### 2.3 Hero Note (Linhas 63-65)
**Atual:** "Ciência e qualidade, beleza e inovação, saúde e bem-estar em uma atuação B2B consultiva."
**Novo:** "Obtido por fermentação microbiana, sem origem animal. Graus cosmético e farmacêutico disponíveis."

---

### 3. SEÇÃO "SOBRE" (Linhas 77-115)

#### 3.1 Label (Linha 79)
**Atual:** "A Hyalu Brasil"
**Novo:** "Sobre a HyaluBrasil"

#### 3.2 Heading (Linha 80)
**Atual:** "Mais do que importar produtos, criamos pontes estratégicas entre inovação, indústria e mercado."
**Novo:** "Soluucionamos o gargalo de fornecimento de Hialuronato de Sódio no Brasil"

#### 3.3 Parágrafos (Linhas 81-95)
**Novo conteúdo:**
```
Parágrafo 1:
A indústria brasileira de cosméticos e farmacêutica opera sob forte dependência de matérias-primas importadas 
de alto valor agregado, como o Hialuronato de Sódio, amplamente utilizado em aplicações de antienvelhecimento 
e saúde articular. Muitas empresas dependem de um único fornecedor, aumentando a vulnerabilidade operacional 
e reduzindo o poder de negociação.

Parágrafo 2:
A HyaluBrasil atua como intermediadora estratégica entre fabricantes internacionais e indústrias brasileiras, 
facilitando o acesso a matérias-primas de alta qualidade com certificação adequada, condições comerciais 
mais competitivas e suporte técnico local.

Parágrafo 3:
Nosso produto central é o Hialuronato de Sódio em pó, obtido por tecnologia de fermentação microbiana, 
sem origem animal. Disponibilizado em diferentes especificações para atender aos setores cosmético, 
farmacêutico e de dispositivos médicos.
```

#### 3.4 Painel lateral (Linhas 97-114)
**Manter estrutura, mas atualizar textos:**

| Card | Texto Atual | Novo Texto |
|------|-------------|------------|
| Ciência e qualidade | "Curadoria de insumos com foco em documentação técnica, procedência e consistência." | "Fornecedores internacionais qualificados com certificação e rastreabilidade integral" |
| Beleza e inovação | "Atuação conectada a demandas de cosméticos, dermocosméticos e novos ativos." | "Grau cosmético (SH-MDE) para cremes, séruns e formulações antissinais" |
| Saúde e bem-estar | "Portfólio orientado a aplicações de saúde, formulação e performance." | "Graus farmacêuticos (SH-MDN e SH-MDI) para oftálmica e injetáveis" |
| Intermediação estratégica | "Representação, importação, distribuição e comércio com visão de parceria." | "Suporte técnico-regulatório, flexibilidade comercial e operação local" |

---

### 4. SEÇÃO "ESSÊNCIA INSTITUCIONAL" (Linhas 117-145)

#### 4.1 Heading (Linha 120)
**Atual:** "Uma atuação construída sobre qualidade, inovação e parceria B2B"
**Novo:** "Missão, Visão e Valores que guiam nossa atuação no mercado"

#### 4.2 Missão (Linhas 123-129)
**Novo:**
```
Fornecer insumos biotecnológicos de excelência para as indústrias brasileiras de saúde e beleza, 
conectando a capacidade produtiva global com a demanda nacional através de processos eficientes, 
conformidade regulatória rigorosa e parcerias duradouras.
```

#### 4.3 Visão (Linhas 130-136)
**Novo:**
```
Ser reconhecida em três anos como a principal e mais confiável distribuidora independente de 
Hialuronato de Sódio no Brasil, destacando-se pela agilidade no fornecimento e suporte técnico 
especializado aos clientes B2B.
```

#### 4.4 Valores (Linhas 137-143)
**Novo:**
```
Ética e transparência, com responsabilidade técnica, foco em segurança regulatória e compromisso 
com qualidade certificada.
```

---

### 5. SEÇÃO "PORTFÓLIO" (Linhas 186-233)

#### 5.1 Heading da seção (Linhas 188-194)
**Novo heading:**
```
<span class="section-label">Produtos e Soluções</span>
<h2>Hialuronato de Sódio em diferentes especificações para cada aplicação</h2>
<p>
  Nosso portfólio é composto por Hialuronato de Sódio de grau cosmético e farmacêutico, 
  obtido por fermentação microbiana sem origem animal, com rastreabilidade e qualidade atestada.
</p>
```

#### 5.2 Card 1: Grau Cosmético (Linhas 197-207)
**Novo:**
```html
<article class="product-card">
  <div class="card-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24"><!-- ícone de gota/fluido --></svg>
  </div>
  <h3>Grau Cosmético (SH-MDE)</h3>
  <p>
    Disponível em variações de alto e baixo peso molecular, indicado para formulações de cremes, 
    séruns e outros produtos cosméticos. Benefícios: hidratação profunda da pele e contribuição 
    para efeitos antissinais.
  </p>
  <span class="card-tag">Cosméticos • Dermocosméticos • Cuidados com a Pele</span>
  <a href="#contato">Solicitar Amostra</a>
</article>
```

#### 5.3 Card 2: Grau Farmacêutico Oftálmico (Linhas 209-219)
**Novo:**
```html
<article class="product-card">
  <div class="card-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24"><!-- ícone de olho/laboratório --></svg>
  </div>
  <h3>Grau Farmacêutico Oftálmico (SH-MDN)</h3>
  <p>
    Caracterizado por alta pureza, destinado a aplicações oftálmicas. Produto que se diferencia 
    pela segurança, rastreabilidade e adequação a aplicações que exigem controle rigoroso de qualidade.
  </p>
  <span class="card-tag">Oftálmica • Dispositivos Médicos • Laboratórios</span>
  <a href="#contato">Solicitar Amostra</a>
</article>
```

#### 5.4 Card 3: Grau Farmacêutico Injetável (Linhas 221-232)
**Novo:**
```html
<article class="product-card">
  <div class="card-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24"><!-- ícone de seringa/injeção --></svg>
  </div>
  <h3>Grau Farmacêutico Injetável (SH-MDI)</h3>
  <p>
    Com elevado nível de pureza, indicado para aplicações como preenchedores dérmicos e tratamentos 
    de viscossuplementação articular. Segurança, rastreabilidade integral e alto desempenho.
  </p>
  <span class="card-tag">Preenchedores • Viscossuplementação • Procedimentos Estéticos</span>
  <a href="#contato">Solicitar Amostra</a>
</article>
```

---

### 6. SEÇÃO "DIFERENCIAIS" (Linhas 235-266)

#### 6.1 Heading (Linhas 237-241)
**Novo:**
```
<span class="section-label">Diferenciais</span>
<h2 id="diferenciais-title">Por que escolher a HyaluBrasil?</h2>
<p>
  Atuamos como ponte estratégica entre fabricantes globais e empresas brasileiras, 
  superando barreiras regulatórias, operacionais e culturais.
</p>
```

#### 6.2 Diferenciais (Linhas 244-265)
**Novo conteúdo:**

| # | Título | Descrição |
|---|--------|-----------|
| 01 | **Fornecedores Qualificados** | Acesso a fabricantes globais certificados, incluindo Focus Chem, com rastreabilidade integral e documentação técnica completa. |
| 02 | **Suporte Técnico-Regulatório** | Conhecimento especializado da equipe fundadora, com conformidade ANVISA e assessoria de empresas de comércio exterior. |
| 03 | **Flexibilidade Comercial** | Sem lote mínimo de aquisição. Produto nacionalizado com disponibilidade imediata e transporte aéreo para maior agilidade. |
| 04 | **Operação Local** | Proximidade com o cliente brasileiro, suporte em português e resolução ágil de problemas. |

---

### 7. SEÇÃO "CONTATO" (Linhas 268-301)

**Manter como está por enquanto** (pendente dados reais do usuário)

Apenas atualizar o texto de apoio:

#### 7.1 Parágrafo (Linhas 273-275)
**Novo:**
```
Fale com a equipe estratégica da HyaluBrasil e descubra como podemos apoiar sua empresa no acesso 
a Hialuronato de Sódio qualificado, com segurança, agilidade e visão de longo prazo.
```

---

### 8. FOOTER (Linhas 304-330)

#### 8.1 Descrição da marca (Linha 308)
**Atual:** "Intermediação estratégica para insumos de cosméticos e produtos da saúde."
**Novo:** "Intermediação estratégica na importação e distribuição de Hialuronato de Sódio B2B."

#### 8.2 Endereço (Linha 312)
**Manter placeholder:** "[Inserir endereço corporativo]"

#### 8.3 Links sociais (Linhas 324-325)
**Manter placeholders:** URLs genéricas até usuário fornecer

---

## CSS Necessário

### Nova classe: `.card-tag`
Para tags de categoria nos cards de produto:
```css
.card-tag {
  display: inline-block;
  margin-top: 12px;
  padding: 6px 12px;
  background: rgba(124, 58, 237, 0.08);
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 600;
  border-radius: 20px;
  letter-spacing: 0.02em;
}
```

---

## Ordem de Implementação

1. ✏️ Metadados HTML (title, description)
2. ✏️ Hero Section (headline, parágrafo, note)
3. ✏️ Seção "Sobre" (label, heading, parágrafos, painel)
4. ✏️ Seção "Essência" (heading, missão, visão, valores)
5. ✏️ Seção "Portfólio" (heading, 3 cards de produto)
6. ✏️ Seção "Diferenciais" (heading, 4 diferenciais)
7. ✏️ Seção "Contato" (parágrafo de apoio)
8. ✏️ Footer (descrição)
9. ➕ CSS: classe `.card-tag`

---

## Validação

Após implementação:
- [ ] Rodar smoke test: `node tests/site-smoke.test.js`
- [ ] Verificar HTML válido
- [ ] Testar responsividade
- [ ] Conferir que textos conferem com plano de negócios

---

## Pendente (não implementar agora)

- [ ] Número de WhatsApp (substituir `5500000000000`)
- [ ] Endereço corporativo (substituir placeholder)
- [ ] LinkedIn e Instagram (substituir URLs genéricas)
- [ ] E-mail de contato
- [ ] Fotos dos fundadores (Thais Cerqueira e Alessandra Dametto)
- [ ] Seção de Liderança (aguardar fotos)

---

**Status:** Pronto para implementação
**Próximo passo:** Executar mudanças no `index.html` e `styles.css`
