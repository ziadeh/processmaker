import faker from "faker";
import puppeteer from "puppeteer";

const APP = process.env.HOST ? process.env.HOST : "http://localhost";

const credentials = {
    username: 'admin',
    password: 'admin'
};

let page;
let browser;
const width = 1200;
const height = 800;
const timeout = 16000;

beforeAll(async () => {
    //console.log(process.env)
    browser = await puppeteer.launch({
        headless: process.env.HEADLESS !== 'DEBUG',
        slowMo: process.env.SLOW ? process.env.SLOW : 30,
        //if need devtools
        //devtools: true,
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
});

afterAll(async () => {
    browser.close();
});

describe("Login", () => {
    test("login with user and password", async () => {
        await page.goto(APP + '/manage/users');
        await page.waitForSelector(".form");
        await page.click("input[name=username]");
        await page.type("input[name=username]", credentials.username);
        await page.click("input[name=password]");
        await page.type("input[name=password]", credentials.password);
        await page.click("input[type=checkbox]");
        await page.click("button[type=submit]");
        await page.waitForSelector("#navbar");
    }, timeout);
});

describe('Tab Manage - Users', () => {

    test('Display tab Admin', async () => {
        await page.goto(APP + '/admin');
        const mainTitleText = await page.$eval(".container.ml-2", el => el.textContent);
        expect(mainTitleText.trim()).toEqual("Admin");
    }, timeout);

    test("Display list users", async () => {
        await page.waitForSelector("#menu-toggle");
        await page.click(".nav.flex-column a.nav-link[title=Users]");
        await page.waitForSelector("#users-listing");
        const mainTitleText = await page.$eval(".page-title", el => el.textContent);
        expect(mainTitleText.trim()).toEqual("Users");
    }, timeout);

    test("Display list Groups ", async () => {
        await page.waitForSelector("#menu-toggle");
        await page.click('.nav.flex-column a.nav-link[title=Groups]');
        await page.waitForSelector("#groups-listing");
        const mainTitleText = await page.$eval(".page-title", el => el.textContent);
        expect(mainTitleText.trim()).toEqual("Groups");
    }, timeout);

    test('create new user', async () => {
        await page.goto(APP + '/manage/users');
        await page.waitForSelector("#users-listing");

        await page.click('a.btn.btn-action');
        await page.waitForSelector('.modal.fade.show.d-block .modal-title');





    }, timeout);


});