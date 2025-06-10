import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
const SEO = ({ title, description, keywords, canonicalUrl }) => {
    return (_jsxs(Helmet, { children: [title && _jsx("title", { children: title }), description && _jsx("meta", { name: "description", content: description }), keywords && _jsx("meta", { name: "keywords", content: keywords }), canonicalUrl && _jsx("link", { rel: "canonical", href: canonicalUrl })] }));
};
export default SEO;
