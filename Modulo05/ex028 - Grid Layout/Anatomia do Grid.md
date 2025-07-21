# Anotações sobre CSS Grid Layout

## Introdução ao Grid Layout

O CSS Grid Layout é uma técnica poderosa de layout bidimensional que permite alinhar elementos em linhas e colunas com facilidade e precisão.

---

## Grid Container e Grid Items

* **Grid Container**: É o elemento que define um contexto de grid. Para isso, aplica-se `display: grid;` no container pai.

  ```css
  .container {
    display: grid;
  }
  ```

* **Grid Items**: São os filhos diretos do grid container. Cada um desses elementos pode ser posicionado dentro da estrutura de linhas e colunas.

---

## Grid Rows e Grid Columns

* **Grid Row**: São as linhas horizontais dentro do grid.
* **Grid Column**: São as colunas verticais.
* O número de linhas e colunas pode ser definido usando `grid-template-rows` e `grid-template-columns`.

  ```css
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
  ```

---

## Grid Lines

* **Grid Lines**: São as linhas que dividem o grid, tanto na vertical quanto na horizontal.
* Elas são numeradas a partir de 1, começando da esquerda para a direita (colunas) e de cima para baixo (linhas).
* Exemplo: se você tem 2 colunas, você terá 3 linhas verticais (uma antes da primeira coluna, uma entre as colunas e uma depois da última).

---

## Grid Tracks

* **Tracks** são os espaços entre duas Grid Lines.
* **Line Track**: é a faixa entre duas linhas horizontais (definindo a altura de uma linha).
* **Column Track**: é a faixa entre duas linhas verticais (definindo a largura de uma coluna).

---

## Numeração das Grid Lines

* A numeração começa em 1.
* Pode ser usada para posicionar itens com `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`.

  ```css
  .item {
    grid-column: 1 / 3; /* ocupa da linha 1 à 3 (duas colunas) */
    grid-row: 1 / 2;    /* ocupa apenas uma linha */
  }
  ```

---

Esses são os conceitos fundamentais que você viu nessa primeira aula. Conforme avançar, poderá explorar recursos como `grid-area`, `grid-gap`, `template-areas` e `auto-placement`.
