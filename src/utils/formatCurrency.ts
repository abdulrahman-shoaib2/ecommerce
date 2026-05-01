// export const formatPrice = (price: number) => {
// 	return new Intl.NumberFormat("en-US", {
// 		style: "currency",
// 		currency: "EGP"
// 		}).format(price);
// }
type formatCurrencyType = {  currency?: string; language?: string, minimumFractionDigits?: number, rtl?:boolean }

export const formatCurrency = (amount: number, options?: formatCurrencyType) => {
  const language = options?.language || 'en-US';
  const currency = options?.currency || 'EGP';
  const rtl = options?.rtl || true;
  const minimumFractionDigits = options?.minimumFractionDigits || 0;
  const newFormat = new Intl.NumberFormat(language, {
    style: 'currency',
    currency,
    minimumFractionDigits,

  }).format(amount);
  if(rtl) return newFormat.replaceAll(currency,'')+' '+currency
  return newFormat
};