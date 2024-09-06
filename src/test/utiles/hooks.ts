import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { pageFixture } from '../utiles/pageFixture';
import { invokeBrowser } from './browsers';
const {setDefaultTimeout} = require('@cucumber/cucumber');

let browser: Browser;
let context: BrowserContext;

// setDefaultTimeout(60 * 1000);

BeforeAll(async function() {
    browser = await invokeBrowser();
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
    await context.tracing.start({ screenshots: true, snapshots: true })
});

Before(async function({ pickle }) {
    //await context.tracing.start({ screenshots: true, snapshots: true })

    //let scenarioName = pickle.name + pickle.id;
    // context = await browser.newContext();
    //const page = await context.newPage();
    //pageFixture.page = page;
});

AfterAll(async function() {
    await pageFixture.page?.close();
    await context.close();
    await browser.close();
});


After(async function({ pickle, result }) {
    if (result?.status === Status.FAILED) {
        const screenshot = await pageFixture.page?.screenshot({ path: 'traces/screenshot_' + pickle.name + '_' + new Date().toISOString().replace(/[:.]/g, '-') + '_.png' });
        await this.attach(screenshot, "image/png");
        await context.tracing.stop({ path: 'traces/trace_' + pickle.name + '_' + new Date().toISOString().replace(/[:.]/g, '-') + '_.zip' });
    }
});
