// функція приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, 
// і повертає результат перевірки.Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE
function checkForSpam(message) {
//рядок message приводимо до нижнього регістру
    let lowerCaseMessage = message.toLowerCase();
    // Якщо у рядку message знайдено заборонене слово (spam або sale), то функція повертає буль true
if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
return true;
}
    // Якщо в рядку message відсутні заборонені слова, функція повертає буль false
else {
return false;
}
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true