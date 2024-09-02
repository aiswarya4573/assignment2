


  document.addEventListener("cookieyes_consent_update", function (eventData)
 {
   const data = eventData.detail;
   if (data.accepted.includes("analytics")) {
      // perform desired action.
      window.uetq = window.uetq || [];
        window.uetq.push('consent', 'default', {
          'ad_storage': 'denied'
            });

    }
  });
 