// Taux de conversion
const tauxCDF = 2900; // 1 USD = 2800 CDF

// CDF -> USD
function convertCDFtoUSD() {
  const amount = parseFloat(document.getElementById('amountCDF').value);
  if (isNaN(amount)) {
    document.getElementById('resultCDFtoUSD').innerText = "Résultat : --";
    return;
  }
  const result = (amount / tauxCDF).toFixed(2);
  document.getElementById('resultCDFtoUSD').innerText = `Résultat : ${result} USD`;
}

// USD -> CDF
function convertUSDtoCDF() {
  const amount = parseFloat(document.getElementById('amountUSD').value);
  if (isNaN(amount)) {
    document.getElementById('resultUSDtoCDF').innerText = "Résultat : --";
    return;
  }
  const result = (amount * tauxCDF).toFixed(2);
  document.getElementById('resultUSDtoCDF').innerText = `Résultat : ${result} CDF`;
}
