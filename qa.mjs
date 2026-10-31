/* Temporary QA harness (not part of the deliverable). */
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const URL = 'http://localhost:4321/';
const SHOTS = process.env.TEMP + '/shots/';

const results = [];
const ok = (name, pass, detail = '') => {
  results.push(`${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`);
};

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME });

  /* ============ DESKTOP ============ */
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push('console: ' + m.text()));
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  await page.goto(URL, { waitUntil: 'networkidle' });

  // header state at top
  const headerBg = await page.locator('#site-header').evaluate((el) => getComputedStyle(el).backgroundColor);
  ok('header navy at top', headerBg === 'rgb(7, 20, 38)', headerBg);

  // header solid after scrolling
  await page.locator('#about').scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  const solid = await page.locator('#site-header').evaluate((el) => el.classList.contains('is-solid'));
  ok('header is-solid after scroll', solid);

  await page.screenshot({ path: SHOTS + 'qa-d-hero.png' });

  // reveal system fires
  const revealed = await page.locator('#about [data-reveal].is-in').count();
  const total = await page.locator('#about [data-reveal]').count();
  ok('about reveals fired', revealed > 0 && revealed === total, `${revealed}/${total}`);

  // service accordion
  const rows = page.locator('.svc');
  await rows.first().locator('.svc__row').click();
  await page.waitForTimeout(600);
  const open = await rows.first().evaluate((el) => el.classList.contains('is-open') && el.querySelector('.svc__row').getAttribute('aria-expanded') === 'true');
  const panelH = await rows.first().locator('.svc__panel').evaluate((el) => el.getBoundingClientRect().height);
  ok('service accordion opens', open && panelH > 40, `h=${Math.round(panelH)}`);

  // second row opens, first closes (single-open)
  await rows.nth(1).locator('.svc__row').click();
  await page.waitForTimeout(600);
  const firstClosed = await rows.first().evaluate((el) => !el.classList.contains('is-open'));
  const secondOpen = await rows.nth(1).evaluate((el) => el.classList.contains('is-open'));
  ok('accordion single-open', firstClosed && secondOpen);

  // "Start this project" prefills the contact select
  await rows.first().locator('.svc__row').click(); // re-open Web Development row? (rows.nth(0) is Web Development)
  await page.waitForTimeout(600);
  await rows.first().locator('a[data-service]').click();
  await page.waitForTimeout(900);
  const selVal = await page.locator('#f-service').inputValue();
  const inView = await page.locator('#contact').evaluate((el) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight * 0.8;
  });
  ok('service link prefills contact select', selVal === 'Web Development', selVal);

  // process thread draws
  await page.locator('#process').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1700);
  const drawn = await page.locator('[data-reveal-steps]').evaluate((el) => el.classList.contains('is-drawn'));
  ok('process thread drawn', drawn);

  // work filters
  await page.locator('#work').scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.locator('.work__filter[data-filter="Branding"]').click();
  await page.waitForTimeout(300);
  const visibleAfterFilter = await page.locator('.work-card:not(.is-hidden)').count();
  ok('work filter Branding → 1 card', visibleAfterFilter === 1, String(visibleAfterFilter));
  await page.locator('.work__filter[data-filter="all"]').click();
  await page.waitForTimeout(300);
  const visibleAll = await page.locator('.work-card:not(.is-hidden)').count();
  ok('work filter all → 5 cards', visibleAll === 5, String(visibleAll));

  // project dialog
  await page.locator('[data-open="dlg-velora"]').click();
  await page.waitForTimeout(400);
  const dlgOpen = await page.locator('#dlg-velora').evaluate((d) => d.open);
  ok('project dialog opens', dlgOpen);
  await page.screenshot({ path: SHOTS + 'qa-d-dialog.png' });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  const dlgClosed = await page.locator('#dlg-velora').evaluate((d) => !d.open);
  ok('dialog closes on Escape', dlgClosed);

  // contact form validation + honest submit
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('#contact-form button[type="submit"]').click();
  await page.waitForTimeout(300);
  const statusErr = await page.locator('#form-status').textContent();
  const invalidMarked = await page.locator('#f-name[aria-invalid="true"]').count();
  ok('empty form blocked with message', (statusErr || '').includes('highlighted'), statusErr.trim());
  ok('invalid field flagged', invalidMarked === 1);

  await page.fill('#f-name', 'QA Tester');
  await page.fill('#f-email', 'qa@example.com');
  await page.selectOption('#f-service', 'SEO Optimization');
  await page.fill('#f-details', 'Testing the static form flow.');
  await page.locator('#contact-form button[type="submit"]').click();
  await page.waitForTimeout(400);
  const okStatus = await page.locator('#form-status').textContent();
  ok('filled form shows mailto notice', (okStatus || '').includes('email app'), okStatus.trim().slice(0, 60));

  await page.screenshot({ path: SHOTS + 'qa-d-contact.png' });
  ok('no console/page errors (desktop)', errors.length === 0, errors.join(' | ').slice(0, 200));

  /* ============ MOBILE ============ */
  const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const merrors = [];
  m.on('console', (x) => x.type() === 'error' && merrors.push('console: ' + x.text()));
  m.on('pageerror', (e) => merrors.push('pageerror: ' + e.message));
  await m.goto(URL, { waitUntil: 'networkidle' });

  await m.screenshot({ path: SHOTS + 'qa-m-hero.png' });

  // burger visible & opens menu
  const burgerVisible = await m.locator('#menu-btn').isVisible();
  ok('burger visible on mobile', burgerVisible);
  await m.locator('#menu-btn').click();
  await m.waitForTimeout(500);
  const menuOpen = await m.evaluate(() => document.documentElement.dataset.menuOpen !== undefined);
  const menuVisible = await m.locator('#mobile-menu').isVisible();
  ok('mobile menu opens', menuOpen && menuVisible);
  await m.screenshot({ path: SHOTS + 'qa-m-menu.png' });
  await m.locator('.menu__link[href="#services"]').click();
  await m.waitForTimeout(900);
  const menuClosed = await m.evaluate(() => document.querySelector('#mobile-menu').hasAttribute('data-open'));
  const serviceInView = await m.evaluate(() => {
    const r = document.getElementById('services').getBoundingClientRect();
    return r.top < 200;
  });
  ok('menu link closes menu & navigates', !menuClosed && serviceInView);
  ok('no console/page errors (mobile)', merrors.length === 0, merrors.join(' | ').slice(0, 200));

  // horizontal overflow check on mobile
  const hOverflow = await m.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  ok('no horizontal scroll on mobile', hOverflow <= 0, `${hOverflow}px overflow`);

  await m.screenshot({ path: SHOTS + 'qa-m-services.png', fullPage: false });

  /* ============ TABLET ============ */
  const t = await browser.newPage({ viewport: { width: 820, height: 1180 } });
  await t.goto(URL, { waitUntil: 'networkidle' });
  const tOverflow = await t.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  ok('no horizontal scroll on tablet', tOverflow <= 0, `${tOverflow}px overflow`);
  await t.screenshot({ path: SHOTS + 'qa-t-top.png' });

  await browser.close();
  fs.writeFileSync(process.env.TEMP + '/qa-results.txt', results.join('\n'));
  console.log(results.join('\n'));
})().catch((e) => {
  console.error('QA CRASHED:', e);
  process.exit(1);
});
