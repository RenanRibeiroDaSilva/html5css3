# 🧱 Novas Propriedades do Container no Grid Layout

Nesta aula, foram apresentados novos parâmetros aplicáveis diretamente ao **Grid Container**. São utilizados para alinhar os itens dentro do grid e controlar o espaçamento entre eles.

---

## ✅ gap

Define o espaçamento entre linhas e colunas do grid.  
**Substitui o `grid-gap`**, que atualmente é considerado **obsoleto (deprecated)**.

```css
.container {
  gap: 20px;
}
```

---

## ▶️ align-items

Alinha os **itens do grid verticalmente** dentro de cada célula.

Valores comuns:

* `start` – Alinha no topo da célula.
* `center` – Centraliza verticalmente.
* `end` – Alinha na parte inferior.
* `stretch` *(padrão)* – Estica o item para ocupar toda a altura da célula.

---

## ▶️ justify-items

Alinha os **itens do grid horizontalmente** dentro de cada célula.

Valores comuns:

* `start` – Alinha à esquerda.
* `center` – Centraliza horizontalmente.
* `end` – Alinha à direita.
* `stretch` *(padrão)* – Estica o item para ocupar toda a largura da célula.

---

## ▶️ align-content

Controla o alinhamento vertical de **todas as linhas do grid** como um bloco dentro do container.

---

## ▶️ justify-content

Controla o alinhamento horizontal de **todas as colunas do grid** como um bloco dentro do container.

---

💡 Essas propriedades não afetam elementos individuais (grid items), mas sim **o comportamento coletivo** dentro do container.
