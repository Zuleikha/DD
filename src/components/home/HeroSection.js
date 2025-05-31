import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const HeroSection = ({ title = "Pawsome Services – Pet Ireland", subtitle = "Your complete resource for everything dog-related in Ireland", pageType = "listings", // Default to listings instead of vets
gradientClass = "bg-mesh-gradient-home" // Default to home gradient
 }) => {
    return (_jsxs("section", { className: "relative h-[500px] md:h-[400px] overflow-hidden", children: [_jsx("div", { className: `absolute inset-0 ${gradientClass}` }), _jsxs("div", { className: "relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 max-w-3xl", children: title }), _jsx("p", { className: "text-xl md:text-2xl mb-8 max-w-2xl", children: subtitle })] })] }));
};
export default HeroSection;
