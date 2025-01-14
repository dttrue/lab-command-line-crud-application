const purchasesAPI = require('./src/purchases');


function processInput() {
  const expectedCommand = process.argv[2];
  let result = "Error: Command not found";

  if (expectedCommand === "create") {
    const [name, amount, donation] = process.argv.slice(3);
    const parsedAmount = parseFloat(amount);
    const parsedDonation = parseFloat(donation);

    result = purchasesAPI.createPurchase(name, parsedAmount, parsedDonation);
  } else if (expectedCommand === "list") {
    result = purchasesAPI.listPurchases();
  } else if (expectedCommand === "view") {
    const id = process.argv[3];
    result = purchasesAPI.viewPurchase(id);
  } else if (expectedCommand === "update") {
    const id = process.argv[3];
    const [name, amount, donation] = process.argv.slice(4);
    const parsedAmount = parseFloat(amount);
    const parsedDonation = parseFloat(donation);

    const updatedPurchase = {
      name,
      amount: parsedAmount,
      donation: parsedDonation,
    };

    const updateResult = purchasesAPI.updatePurchase(id, updatedPurchase);
    if (updateResult) {
      result = `Purchase with ID ${id} updated successfully.`;
    } else {
      result = `Error: Purchase with ID ${id} not found.`;
    }
  } else if (expectedCommand === "calculateTotalDonation") {
    result =purchasesAPI.calculateTotalDonation()
  }

  console.log(result);
}

processInput();




