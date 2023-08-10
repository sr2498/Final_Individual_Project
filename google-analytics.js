const googleAnalytics = {
  init: () => {
    // Check if the window object exists
    if (typeof window !== 'undefined') {
      // Create a script element
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_DB_GA}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize the global gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', process.env.NEXT_PUBLIC_DB_GA);
    }
  }
};
export { googleAnalytics };
