function calculateFuel() {
  // Obtém os valores dos campos de entrada
  const distance = document.getElementById('distance').value;
  const efficiency = document.getElementById('efficiency').value;
  const price = document.getElementById('price').value;

  // Calcula o consumo de combustível
  const fuelNeeded = distance / efficiency;
  const totalCost = fuelNeeded * price;

  // Exibe o resultado
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Você precisará de ${fuelNeeded.toFixed(2)} litros de combustível, o que custará R$ ${totalCost.toFixed(2)}`;
}
