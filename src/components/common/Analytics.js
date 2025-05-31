import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// Analytics component for Google Analytics
const Analytics = () => {
    return (_jsxs(_Fragment, { children: [_jsx("script", { dangerouslySetInnerHTML: {
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `,
                } }), _jsx("noscript", { children: _jsx("iframe", { src: "https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX", height: "0", width: "0", style: { display: 'none', visibility: 'hidden' } }) })] }));
};
export default Analytics;
