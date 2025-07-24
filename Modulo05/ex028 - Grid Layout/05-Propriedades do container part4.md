# 🧠 Função `repeat()` e Unidade `fr` no CSS Grid Layout

## 🔁 Função `repeat()`

- **Uso**: Utilizada **no container pai** (Grid Container).
- **Sintaxe**: `repeat(n, valor)`
- **Descrição**: Evita repetição manual de valores no `grid-template-columns` ou `grid-template-rows`.
- **Exemplo**:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

O exemplo acima cria 3 colunas com largura igual (1fr cada).

---

## 📏 Unidade fr (fraction)

- Uso: Utilizada no container pai, dentro de grid-template-columns ou grid-template-rows.
- Descrição: Representa uma fração do espaço disponível restante no grid.
- Importância: Muito útil para criar layouts responsivos e flexíveis.
- Exemplo:

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

O exemplo acima cria duas colunas: a primeira ocupa o dobro do espaço da segunda.

---

✅ Dica
Você pode combinar as duas:

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
```

Isso criará 4 colunas iguais que dividem igualmente o espaço disponível.
