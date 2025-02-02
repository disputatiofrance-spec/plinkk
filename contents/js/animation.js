const styleSheet = document.styleSheets[0];
const animations = [
    {
    name: "fade",
    keyframes: "fade 1s ease-in-out"
    },
    {
    name: "slide",
    keyframes: "slide 1s ease-in-out"
    },
    {
    name: "zoom",
    keyframes: "zoom 1s ease-in-out"
    },
    {
    name: "rotate",
    keyframes: "rotate 1s ease-in-out"
    },
    {
    name: "bounce",
    keyframes: "bounce 1s ease-in-out"
    },
    {
    name: "shake",
    keyframes: "shake 1s ease-in-out"
    },
    {
    name: "flip",
    keyframes: "flip 1s ease-in-out"
    },
    {
    name: "pulse",
    keyframes: "pulse 1s ease-in-out "
    },
    {
    name: "swing",
    keyframes: "swing 1s ease-in-out"
    },
    {
    name: "wobble",
    keyframes: "wobble 1s ease-in-out"
    }
];

styleSheet.insertRule(`
@keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
}
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes slide {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes zoom {
    from { transform: scale(0); }
    to { transform: scale(1); }
}
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}
`, styleSheet.cssRules.length);
styleSheet.insertRule(`
@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
        transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% {
        transform: translateX(10px);
    }
}
`, styleSheet.cssRules.length);
styleSheet.insertRule(`
@keyframes flip {
    from {
        transform: rotateY(0);
    }
    to {
        transform: rotateY(360deg);
    }
}
`, styleSheet.cssRules.length);
styleSheet.insertRule(`
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`, styleSheet.cssRules.length);
styleSheet.insertRule(`
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes swing {
    20% {
        transform: rotate(15deg);
    }
    40% {
        transform: rotate(-10deg);
    }
    60% {
        transform: rotate(5deg);
    }
    80% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes wobble {
    0% {
        transform: translateX(0%);
    }
    15% {
        transform: translateX(-25%) rotate(-5deg);
    }
    30% {
        transform: translateX(20%) rotate(3deg);
    }
    45% {
        transform: translateX(-15%) rotate(-3deg);
    }
    60% {
        transform: translateX(10%) rotate(2deg);
    }
    75% {
        transform: translateX(-5%) rotate(-1deg);
    }
    100% {
        transform: translateX(0%);
    }
}
`, styleSheet.cssRules.length);