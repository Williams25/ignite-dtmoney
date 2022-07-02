export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
