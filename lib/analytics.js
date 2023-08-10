// lib/analytics.js

export const GA_MEASUREMENT_ID = 'G-402331948' // replace with your Measurement ID

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
