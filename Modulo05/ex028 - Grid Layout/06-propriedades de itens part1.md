
# 🎯 Propriedades para Itens no Grid Layout

Estas propriedades são aplicadas aos **itens do grid** (filhos do container com `display: grid`) e controlam onde cada item começa e termina nas linhas e colunas.

---

## 🟨 grid-row-start

- **Função**: Define **em qual linha horizontal (row line)** o item deve começar.
- **Exemplo**:

```css
.item {
  grid-row-start: 2;
}
```

- O item começará na **linha horizontal 2**.

---

## 🟨 grid-row-end

- **Função**: Define **em qual linha horizontal** o item deve terminar.
- **Exemplo**:

```css
.item {
  grid-row-end: 4;
}
```

- O item irá **até a linha horizontal 4**, ocupando espaço entre as linhas 2 e 4 (caso comece na linha 2).

---

## 🟦 grid-column-start

- **Função**: Define **em qual linha vertical (coluna)** o item deve começar.
- **Exemplo**:

```css
.item {
  grid-column-start: 1;
}
```

- O item começa na **linha de coluna 1**.

---

## 🟦 grid-column-end

- **Função**: Define **em qual linha vertical (coluna)** o item deve terminar.
- **Exemplo**:

```css
.item {
  grid-column-end: 3;
}
```

- O item se estenderá **até a linha de coluna 3**.

---

## 💡 Dica

Você pode combinar essas propriedades para expandir ou posicionar o item com precisão:

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
```

Nesse exemplo, o item ocupará duas colunas (1 a 3) e uma linha (1 a 2).
