console.log("here we gooooooooo");
// just reminding myself here that 'let' is used for a value that will change.
//

let gameData = {
  cookieCount: 0,
  cookiesPerSecond: 0,
};

// This is me reminding myself that 'const' is used for static values, or values that will not change.
const upgradesTableArray = [];
// I need to pull (or fetch perhaps) the API data from Joe's API to populate the upgrades shop

const upgradesContainer = document.getElementById("upgradesShop");
// I;m selecting my DOM element, so I can manipulate the upgrades shop DIV
async function fetchShopUpgrades() {
  const result = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(result);
  const upgradeData = await result.json();
  return upgradeData;
  const upgradesContainer = document.getElementById("upgradesShop");
  upgradesContainer.appendChild(upgradeData);
}
// The purpose of the above function is to fetch the shopupgrade data from the API. The 'await' stop the 'promise' error coming back when running.
//I don't know why i'm unable to append to the DOM element?

fetchShopUpgrades();

async function renderShopUpgrades() {
    const getShopItems = await fetchShopUpgrades ();
    getShopItems.forEach(function(upgrade)){
        const upgradename =
        const upgradecost =
        const upgradeCPSIncrease =
    }
}
