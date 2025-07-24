
# Novas Propriedades do Grid Layout (Complemento)

## grid-auto-rows

Define o tamanho das **linhas criadas automaticamente** pelo Grid, ou seja, linhas que não foram explicitamente definidas com `grid-template-rows`.

```css
.container {
  grid-auto-rows: 100px;
}
```

- Cria linhas automáticas com altura de 100px.

---

## grid-auto-columns

Define o tamanho das **colunas criadas automaticamente** pelo Grid, similar ao comportamento do `grid-auto-rows`.

```css
.container {
  grid-auto-columns: 200px;
}
```

- Colunas adicionais criadas terão largura de 200px.

---

## place-items

É um **atalho** para aplicar `align-items` e `justify-items` ao mesmo tempo no **Grid Container**.

```css
.container {
  place-items: center;
}
```

- Centraliza todos os itens tanto horizontalmente quanto verticalmente.

---

## place-content

É um **atalho** para aplicar `align-content` e `justify-content` simultaneamente.

```css
.container {
  place-content: space-between;
}
```

- Distribui as trilhas no container com espaçamento entre elas.

---

## grid-template

Atalho que combina `grid-template-rows`, `grid-template-columns` e `grid-template-areas` em uma única declaração.

```css
.container {
  grid-template: 
    "header header" 100px
    "sidebar main" 1fr
    "footer footer" 50px
    / 150px 1fr;
}
```

- Define as **áreas nomeadas**, as dimensões das linhas e colunas de forma compacta.
