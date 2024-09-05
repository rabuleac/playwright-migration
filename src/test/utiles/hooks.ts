import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { pageFixture } from '../utiles/pageFixture';
import { invokeBrowser } from './browsers';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function() {
    browser = await invokeBrowser();
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

Before(async function({ pickle }) {
    //let scenarioName = pickle.name + pickle.id;
    await context.tracing.start({ screenshots: true, snapshots: true })
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
