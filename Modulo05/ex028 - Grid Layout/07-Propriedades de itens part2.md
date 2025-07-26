
# 🧱 CSS Grid Layout – Conceitos: `span`, `grid-row`, `grid-column` e `grid-area`

## ▶️ `span`

- A palavra-chave `span` é usada para indicar **quantas linhas ou colunas um item deve ocupar** no grid.
- Usado com as propriedades `grid-column` ou `grid-row`.
  
```css
.item {
  grid-column: span 2; /* ocupa 2 colunas */
  grid-row: span 3;    /* ocupa 3 linhas */
}
```

---

## ▶️ `grid-row`

* Atalho para definir `grid-row-start` e `grid-row-end` ao mesmo tempo.
* Define **em que linha do grid o item começa e onde termina verticalmente**.

```css
.item {
  grid-row: 2 / 4; /* começa na linha 2 e termina antes da linha 4 */
}
```

---

## ▶️ `grid-column`

* Atalho para `grid-column-start` e `grid-column-end`.
* Define **em que linha de coluna o item começa e termina horizontalmente**.

```css
.item {
  grid-column: 1 / 3; /* ocupa da linha de coluna 1 até antes da 3 */
}
```

---

## ▶️ `grid-area`

* Propriedade que permite definir **a área total** ocupada pelo item, incluindo início e fim de linhas e colunas.
* Ordem dos valores: `grid-row-start / grid-column-start / grid-row-end / grid-column-end`.

```css
.item {
  grid-area: 1 / 1 / 3 / 4; /* define uma área personalizada */
}
```

---

📌 **Dica**: use essas propriedades em **itens filhos do Grid**, e não no container!

```