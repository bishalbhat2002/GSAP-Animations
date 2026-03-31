const navlinks = [
     { name: "GSAP Basics", href: "/index.html"},
     { name: "Transform & Properties", href: "/code/transform.html"},
     { name: "Timeline", href: "/code/timeline.html"},
     { name: "Stagger Animations", href: "/code/stagger.html"},
     { name: "Easing", href: "/code/easing.html"},
     { name: "Scroll Trigger", href: "/code/scroll-trigger.html"},
     // { name: "Scroll Trigger Advanced", href: "/code/scroll-trigger-advanced.html"},
     { name: "Responsive Animations", href: "/code/responsive-animations.html"},
     { name: "Callbacks & controls", href: "/code/callbacks-controls.html"},
     { name: "Text & SVG Animations", href: "/code/text-svg.html"},
     // { name: "Advanced Effects", href: "/code/advanced-effects.html"},
     // { name: "Performance Optimization", href: "/code/performance-optimization.html"},
     { name: "Utility Functions", href: "/code/utility-functions.html"},
     { name: "Plugins", href: "/code/plugins.html"},
     { name: "About topics", href: "/topics-to-read.md"},
]

const navbar = document.getElementById("navbar");
const navlinksContainer = document.getElementById("navlinks");
const showNavbarBtn = document.getElementById("show-navbar-btn");
const hideNavbarBtn = document.getElementById("hide-navbar-btn");

hideNavbarBtn.addEventListener("click", () => {
     navbar.classList.add("hide-navbar");
     navbar.classList.remove("show-navbar");
})

showNavbarBtn.addEventListener("click", () => {
     navbar.classList.remove("hide-navbar");
     navbar.classList.add("show-navbar");
})

navlinks.forEach(link => {
     navlinksContainer.innerHTML += `<li class="hover:bg-gray-600 bg-gray-800 text-white rounded hover:scale-102 active:scale-99 transition-transform duration-200"><a class="block p-2" href="${link.href}">${link.name}</a></li>`;
})