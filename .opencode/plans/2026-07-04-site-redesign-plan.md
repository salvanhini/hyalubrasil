# Plano de Redesign: Hyalu Brasil

## Objetivo
Transformar o site em uma experiência visual premium com estilo **Soft UI Evolution**, animações ricas e responsividade fluida.

---

## 1. DESIGN SYSTEM ATUALIZADO

### Paleta de Cores (Soft UI Evolution)
```css
:root {
  /* Cores primárias - mantendo a essência roxo/navy mas suavizada */
  --primary: #7c3aed;        /* Roxo vibrante (mais vivo que #3a1684) */
  --primary-light: #a78bfa;  /* Roxo claro para accents */
  --primary-dark: #5b21b6;   /* Roxo escuro para contraste */
  
  /* Neutros - mais suaves e elegantes */
  --surface-1: #ffffff;      /* Branco puro */
  --surface-2: #fafafe;      /* Branco com leve tom roxo */
  --surface-3: #f5f3ff;      /* Fundo suave roxo */
  
  /* Texto - hierarquia clara */
  --text-primary: #1e1b4b;   /* Almost navy - contraste alto */
  --text-secondary: #6b7280; /* Cinza elegante */
  --text-muted: #9ca3af;     /* Cinza claro */
  
  /* Bordas e divisões */
  --border-light: #e9e5f5;   /* Borda suave roxa */
  --border-focus: #7c3aed;   /* Foco visível */
  
  /* Sombras Soft UI */
  --shadow-xs: 0 1px 2px rgba(124, 58, 237, 0.04);
  --shadow-sm: 0 2px 8px rgba(124, 58, 237, 0.06);
  --shadow-md: 0 4px 16px rgba(124, 58, 237, 0.08);
  --shadow-lg: 0 8px 32px rgba(124, 58, 237, 0.10);
  --shadow-xl: 0 16px 48px rgba(124, 58, 237, 0.12);
  
  /* Gradientes */
  --gradient-primary: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
  --gradient-surface: linear-gradient(180deg, #ffffff 0%, #fafafe 100%);
  --gradient-accent: linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%);
}
```

### Tipografia (Google Fonts)
- **Headings**: Lora (serif elegante para títulos)
- **Body**: Raleway (sans-serif moderno e legível)
- Importação: `@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');`

### Espaçamento (Sistema 8pt)
- `space-xs: 4px`
- `space-sm: 8px`
- `space-md: 16px`
- `space-lg: 24px`
- `space-xl: 32px`
- `space-2xl: 48px`
- `space-3xl: 64px`
- `space-4xl: 96px`

---

## 2. MELHORIAS POR SEÇÃO

### 2.1 Header (Navegação)
**Atual**: Grid simples com backdrop-filter
**Novo**:
- Logo maior e mais legível
- Links com underline animado suave (não instantâneo)
- Botão CTA com efeito de brilho sutil no hover
- Menu mobile com slide-in lateral + overlay escuro
- Header collapse mais suave com sombra progressiva

### 2.2 Hero Section
**Atual**: Grid 2 colunas com animações básicas
**Novo**:
- **Headline**: Tipografia Lora com gradiente sutil no texto
- **Parallax leve**: Imagem do hero move 10% mais lento que o scroll
- **Floating elements**: Moléculas hexagonais com movimento orgânico (spring physics)
- **CTA buttons**: Efeito ripple no clique, sombra dinâmica no hover
- **Prova bar**: Cards com glass morphism refinado e animação stagger

### 2.3 Sobre (About)
**Atual**: Grid 2 colunas, painel com backdrop-filter
**Novo**:
- **Texto**: Lora para o heading, Raleway para parágrafos
- **Cards do painel**: Efeito de profundidade com sombras em camadas
- **Hover**: Lift suave (translateY -4px) + sombra expandida
- **Ícones**: SVG animados no hover (rotação leve ou scale)

### 2.4 Essência Institucional
**Atual**: Grid 3 colunas simples
**Novo**:
- **Cards**: Bordas com gradiente sutil
- **Top accent**: Barra colorida animada (largura 0 → 100% no scroll)
- **Ícones**: Micro-animação de entrada (fade + slide)
- **Background**: Pattern hexagonal sutil e animado

### 2.5 Processo (Timeline)
**Atual**: Grid 5 colunas com linha conectora
**Novo**:
- **Timeline animada**: Linha que se desenha conforme scroll
- **Step indicators**: Bolinhas com pulse animado
- **Cards**: Efeito de profundidade com sombras offset
- **Números**: Tipografia Lora grande e semi-transparente
- **Conectores**: Linhas tracejadas animadas

### 2.6 Portfólio (Produtos)
**Atual**: Grid 3 colunas com hover básico
**Novo**:
- **Cards**: Efeito de "glass morphism" com blur mais forte
- **Ícones SVG**: Animação de desenho no hover (stroke-dashoffset)
- **Hover**: Scale 1.02 + sombra expandida + borda gradiente
- **Overlay**: Gradiente que revela "Ver Detalhes" no hover
- **Stagger animation**: Cards aparecem com delay escalonado

### 2.7 Diferenciais
**Atual**: Fundo escuro navy com grid 4 colunas
**Novo**:
- **Background**: Gradiente animado (slow color shift)
- **Cards**: Bordas com glow sutil
- **Números**: Efeito de contagem animada (01 → 02 → 03)
- **Hover**: Border glow + lift
- **Partículas**: Micro-pontos flutuantes no fundo

### 2.8 Contato
**Atual**: Grid 2 colunas, formulário com backdrop-filter
**Novo**:
- **Formulário**: Inputs com border animado no focus
- **Labels**: Float labels com transição suave
- **Botão submit**: Loading state com spinner
- **WhatsApp**: Efeito de pulse no ícone
- **Success state**: Animação de confetti ou checkmark

### 2.9 Footer
**Atual**: Grid 4 colunas, fundo escuro
**Novo**:
- **Logo**: Filtro de brilho animado
- **Links**: Underline animado no hover
- **Grid**: Mais espaço entre colunas
- **Copyright**: Separador com gradiente

---

## 3. ANIMAÇÕES DETALHADAS

### 3.1 Scroll Reveal (Melhorado)
```javascript
// Atual: fadeUp básico
// Novo: Varias opções baseado na posição
- fadeUp: translateY(20px) → 0 + opacity 0 → 1
- fadeLeft: translateX(-20px) → 0
- fadeRight: translateX(20px) → 0
- scaleIn: scale(0.95) → 1
- rotateIn: rotate(-2deg) → 0
```

### 3.2 Hover Effects (Cards)
```css
/* Efeito de profundidade */
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.15);
}

/* Efeito de borda gradiente */
.card::before {
  background: linear-gradient(135deg, transparent, rgba(124, 58, 237, 0.1));
  opacity: 0 → 1;
}
```

### 3.3 Micro-Interactions
- **Botões**: Scale 0.98 no clique → 1.0 no release
- **Links**: Underline width animado (0% → 100%)
- **Ícones**: Rotate 5° no hover
- **Inputs**: Border color transition + glow

### 3.4 Parallax Leve
- Hero image: `transform: translateY(calc(scrollY * 0.1))`
- Molecules: Movimento independente do scroll
- Background patterns: Velocidade reduzida

### 3.5 Loading States
- **Skeleton loading**: Placeholder animado para imagens
- **Button loading**: Spinner + texto "Enviando..."
- **Page transition**: Fade out → fade in

---

## 4. RESPONSIVIDADE APRIMORADA

### Breakpoints Atualizados
```css
/* Mobile first */
@media (min-width: 375px) { /* Small phone */ }
@media (min-width: 640px) { /* Large phone */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
@media (min-width: 1440px) { /* Full HD */ }
```

### Melhorias Mobile
- **Touch targets**: Mínimo 44x44px
- **Swipe gestures**: Navegação entre cards com swipe
- **Bottom navigation**: Fixa no mobile (alternativa ao hamburger)
- **Font scaling**: Clamp mais agressivo para mobile
- **Imagens**: srcset para diferentes densidades

### Melhorias Tablet
- **Grid adaptativo**: 2 colunas → 1 coluna suavemente
- **Sidebar**: Colapsável em tablet portrait
- **Hover states**: Transformados para touch (tap)

---

## 5. ACESSIBILIDADE

### Pré-entrega
- [ ] Contraste mínimo 4.5:1 para texto
- [ ] Focus rings visíveis (2-4px)
- [ ] Alt text em todas as imagens
- [ ] aria-labels em botões sem texto
- [ ] Tab order lógico
- [ ] prefers-reduced-motion respeitado
- [ ] Font size mínimo 16px em mobile

---

## 6. IMPLEMENTAÇÃO

### Ordem de Execução
1. **Fase 1**: Atualizar CSS variables e tipografia
2. **Fase 2**: Refinar header e hero
3. **Fase 3**: Melhorar cards e grid layouts
4. **Fase 4**: Adicionar animações JS
5. **Fase 5**: Ajustar responsividade
6. **Fase 6**: Testes de acessibilidade

### Arquivos para Modificar
- `styles.css` - Todas as mudanças visuais
- `script.js` - Animações e interatividade
- `index.html` - Estrutura semântica (se necessário)

### Não Modificar
- Conteúdo textual (mantido como está)
- Estrutura de seções (mantida)
- Funcionalidade do formulário (mantida)

---

## 7. MÉTRICAS DE SUCESSO

### Visual
- Site parece "premium" e "profissional"
- Animações são suaves (60fps)
- Cores são harmoniosas e acessíveis

### Performance
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Cumulative Layout Shift < 0.1

### Usabilidade
- Touch targets >= 44px
- Font legível em todos os tamanhos
- Navegação intuitiva

---

## 8. RISCOS E MITIGAÇÕES

| Risco | Mitigação |
|-------|-----------|
| Animações causam lag | Usar transform/opacity (GPU accelerated) |
| Cores não passam contraste | Testar com ferramentas (WebAIM) |
| Mobile fica pesado | Lazy load de imagens, code splitting |
| prefers-reduced-motion | Sempre respeitar media query |

---

**Status**: Aprovado para implementação
**Próximo passo**: Iniciar Fase 1 (CSS variables + tipografia)
