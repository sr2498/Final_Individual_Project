const { test, expect } = require('@playwright/test')

// Base and subpage URLs
const nextjstest = 'http://localhost:3000/'
const skillsPageURL = 'http://localhost:3000/posts/skills'
const projectsPageURL = 'http://localhost:3000/posts/projects'

// External scripts
const gaScriptURL = 'https://www.googletagmanager.com/gtag/js'

// ------ HEADER RELATED TESTS ------

// Test to check Header for name
test('Check Header for `name` on the main page', async ({ page }) => {
  await page.goto(nextjstest)
  const headerText = await page.textContent('h2')
  await expect(headerText.toLowerCase()).toContain('sandhya rani')
})

// Test to check Your name of Skills Page
test('Check Header for YourName on Skills page', async ({ page }) => {
  await page.goto(skillsPageURL)
  await page.waitForLoadState('load')
  const name = 'SANDHYA RANI'
  const headerSelector = `header h2:has-text("${name}")`
  await expect(page.locator(headerSelector)).toBeVisible()
})

// Test to check for your name on Project page header
test('Check Header for Your Name on Project Page', async ({ page }) => {
  await page.goto(projectsPageURL)
  await page.waitForLoadState('load')

  const name = 'Sandhya Rani'
  const headerSelector = `header h2:has-text("${name}")`
  await expect(page.locator(headerSelector)).toBeVisible()
})

// ------ HOME PAGE TESTS ------

// Test checks if a yourname is present
test('Check Yourname Presence on Home', async () => {
  const name = 'SANDHYA RANI'
  expect(name).toBeDefined()
})

// Test to check if Google Analytics script is loaded
test('Test for presence of Google Analytics script', async ({ page }) => {
  await page.goto(nextjstest)
  const isGAScriptPresent = await page.$$eval('script', (scripts, expectedURL) => {
    return scripts.some(script => script.src.includes(expectedURL))
  }, gaScriptURL)
  expect(isGAScriptPresent).toBe(true)
})

// ------ NAVIGATION TESTS ------

// Test to Check Back Home from Skills page Navigation
test('Test for SKills Back Home Nav', async ({ page }) => {
  await page.goto(skillsPageURL)
  await page.getByText('Back to home').click()
  await page.waitForURL(nextjstest)
  const currentURL = await page.url()
  expect(currentURL).toBe(nextjstest)
})

// Test to Check Back Home from Projects page Navigation
test('Test for Projects Back Home Nav', async ({ page }) => {
  await page.goto(projectsPageURL)
  await page.getByText('Back to home').click()
  await page.waitForURL(nextjstest)
  const currentURL = await page.url()
  expect(currentURL).toBe(nextjstest)
})

// ------ META TAG TESTS ------

// This test checks that the responsive meta tag is present on Projects page
test('Check Responsive Meta Tag on Projects page', async ({ page }) => {
  await page.goto(projectsPageURL)
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content')
  await expect(viewportMeta).toBe('width=device-width')
})

// This test checks that the responsive meta tag is present on Skills page
test('Check Responsive Meta Tag on Skills Page', async ({ page }) => {
  await page.goto(skillsPageURL)
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content')
  await expect(viewportMeta).toBe('width=device-width')
})
