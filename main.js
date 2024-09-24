document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
document.getElementById("btn-home").addEventListener("click", function () {
  window.location.href = "./index.html";
});
document.getElementById("history-button").addEventListener("click", function () {
  viewHideToggle("history-data");
  const historyButton = document.getElementById("history-button");
  historyButton.classList.add(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
  const donateButton = document.getElementById("donate-button");
  donateButton.classList.remove(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
  donateButton.classList.add(
    "border-2",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold"
  );
});

document.getElementById("donate-button").addEventListener("click", function () {
  viewHideToggle("card-section");

  const historyButton = document.getElementById("history-button");
  const donateButton = document.getElementById("donate-button");

  historyButton.classList.remove(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
  historyButton.classList.add(
    "border-2",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold"
  );
  donateButton.classList.add(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
});

//------------------------------------Noakhali----------------------------------------
document
  .getElementById("donate-now-btn-noakhali")
  .addEventListener("click", function () {
    const addMoney = getValueByIdFromInput("donate-For-noakhali");

    const donarBalance = donationValueAmount("main-balance");

    if (addMoney > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (addMoney <= 0) {
      alert("Negative value is not accepted");
      return;
    }

    if (isNaN(addMoney)) {
      alert("Wrong!Input accepts only Valid Number");
      return;
    }

    const getMoney = donationValueAmount("donation-balance-noakhali");

    const donaterBalanceISNow = donarBalance - addMoney;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationGetNuakhali = addMoney + getMoney;
    document.getElementById("donation-balance-noakhali").innerText =
      totalDonationGetNuakhali;

    document.getElementById("popup").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
    
    const div = document.createElement("div");

    div.innerHTML = `
            <p class ='p-3'> You've donated ${addMoney} tk for <span class ="text-green-500 font-semibold"> Noakhali</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
        
        `;
    document.getElementById("transaction-contain").appendChild(div);
  });

//------------------------------------- feni -----------------------------------------

document
  .getElementById("donate-button-for-feni")
  .addEventListener("click", function () {
    const inputMoney = getValueByIdFromInput("donate-feni-input");
    const donarBalance = donationValueAmount("main-balance");

    if (inputMoney > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (inputMoney <= 0) {
      alert("Negative value is not accepted");
      return;
    }
    if (isNaN(inputMoney)) {
      alert("Wrong!Input accepts only Valid Number");
      return;
    }

    const feniHasBalance = donationValueAmount("donation-balance-feni");

    const donaterBalanceISNow = donarBalance - inputMoney;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationGetFeni = inputMoney + feniHasBalance;
    document.getElementById("donation-balance-feni").innerText =
      totalDonationGetFeni;

    document.getElementById("popup").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
  
    const div = document.createElement("div");

    div.innerHTML = `
                <p class ='p-3'> You've donated ${inputMoney} tk for <span class ="text-blue-500 font-semibold">Feni</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
            `;
    document.getElementById("transaction-contain").appendChild(div);
  });

//----------------------------------quota movement------------------------------------

document
  .getElementById("donate-for-student")
  .addEventListener("click", function () {
    const donateForStudent = getValueByIdFromInput("donate-amount-input");
    const donarBalance = donationValueAmount("main-balance");

    if (donateForStudent > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (donateForStudent <= 0) {
      alert("Negative value is not accepted");
      return;
    }
    if (isNaN(donateForStudent)) {
      alert("Wrong!Input accepts only Valid Number");
      return;
    }

    const balanceIsNow = donationValueAmount("donation-has-rightnow");

    const donaterBalanceISNow = donarBalance - donateForStudent;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationStudentHas = donateForStudent + balanceIsNow;
    document.getElementById("donation-has-rightnow").innerText =
      totalDonationStudentHas;

    document.getElementById("popup").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
    
    const div = document.createElement("div");

    div.innerHTML = `
                <p class ='p-3'> You've donated ${donateForStudent} tk for <span class ="text-red-600 font-bold">Quota Movement</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
            `;
    document.getElementById("transaction-contain").appendChild(div);
  });