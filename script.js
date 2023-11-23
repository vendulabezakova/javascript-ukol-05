//https://kodim.cz/vyvoj-webu/js1/lekce/funkce-obory/ulozky-na-doma/vyplata


const salary = (wage, hours, days) => 
  wage * hours * days;

const taxed = (amount, taxPercentage) => {
  const taxAmount = (amount * taxPercentage) / 100;
  const netAmount = amount - taxAmount;
  return netAmount;
};

//Vstupy od uživatle
const hourlyWage = prompt("Hrubá mzda za hodinu:");
const dailyHours = prompt("Průměrný počet hodin denně:");
const workingDays = prompt("Průměrný počet pracovních dní v měsíci:");

//Hrubá mzda
const grossSalary = salary(hourlyWage, dailyHours, workingDays);

// Zdanění mzdy 15%
const taxPercentage = 15;
const netSalary = taxed(grossSalary, taxPercentage);

// Výsledek
document.body.innerHTML = `
      <p>Hrubá měsíční mzda: ${grossSalary} Kč.</p>
      <p>Čistá měsíční mzda po 15% zdanění: ${netSalary} Kč.</p>
    `