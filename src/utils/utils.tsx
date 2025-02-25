export const formatDate = (date: string) => new Date(date).toLocaleDateString();
export const formatPhone = (phone: string) =>
  phone.replace(/\D/g, "").replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
