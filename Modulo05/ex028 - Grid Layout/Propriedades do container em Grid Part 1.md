# Anotações sobre Grid Layout (CSS Grid)

## ✨ Introdução ao Grid Layout

O **Grid Layout** é uma ferramenta poderosa do CSS para criação de layouts em duas dimensões (linhas e colunas), permitindo distribuir espaços e alinhar elementos de forma simples e flexível.

---

## 🔹 Conceitos Fundamentais

### Grid Container

O **Grid Container** é o elemento pai onde o grid é definido.
Para ativar o grid:

```css
display: grid;
```

### Grid Itens

Os **Grid Itens** são os elementos filhos diretos do Grid Container. Eles serão posicionados automaticamente ou manualmente dentro do layout.

---

## 🔢 Grid Lines e Grid Tracks

### Grid Lines

As **linhas do grid** são as linhas verticais e horizontais que dividem as colunas e linhas:

* As linhas **verticais** separam colunas.
* As linhas **horizontais** separam linhas.

A numeração começa em `1` da esquerda para a direita (colunas) e de cima para baixo (linhas).

### Grid Tracks

Os **tracks** são espaços entre duas grid lines:

* **Column Tracks**: Espaços verticais (colunas).
* **Row Tracks**: Espaços horizontais (linhas).

---

## 📊 Propriedades do Container Grid

### 1. `display`

Ativa o layout grid:

```css
display: grid;
```

### 2. `grid-template-columns`

Define o número e o tamanho das colunas:

```css
grid-template-columns: auto auto auto;
```

Exemplo: cria 3 colunas com largura automática.

### 3. `grid-template-rows`

Define o número e o tamanho das linhas:

```css
grid-template-rows: 100px 100px 100px;
```

Exemplo: cria 3 linhas com altura fixa de 100px.

### 4. `grid-gap`

Define espaçamento entre colunas e linhas:

```css
grid-gap: 20px;
```

Obs: Pode ser substituído por `row-gap` e `column-gap` se quiser espaços diferentes.

---

## 📌 Exemplo prático

```css
div.container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 100px 100px 100px;
  grid-gap: 20px;
}
```

Esse código define uma grade com 3 colunas automáticas, 3 linhas de 100px cada e espaçamento de 20px entre os elementos.
