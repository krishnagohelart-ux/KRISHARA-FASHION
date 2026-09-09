// ================= STYLE QUIZ =================

function showStyle(style) {

    let result = document.getElementById("style-result");

    if (style === "Elegant") {

        result.innerText =
            "Your KRISHARA style is Elegant Luxe ✨";

    }

    else if (style === "Modern") {

        result.innerText =
            "Your KRISHARA style is Modern Chic ✨";

    }

    else if (style === "Traditional") {

        result.innerText =
            "Your KRISHARA style is Timeless Tradition ✨";

    }

}
// ================= FASHION JOURNAL =================

function showJournal(topic) {

    const result = document.getElementById("journal-result");


    if (topic === "kurta") {

        result.innerHTML = `
            <h3>How To Style Your Kurta</h3>

            <p>
                A kurta can be styled differently depending on
                the occasion. Keep your look simple and comfortable
                for everyday wear, or add elegant accessories for
                festive celebrations.
            </p>

            <p>
                The beauty of a timeless kurta is that it can move
                easily from casual moments to special occasions.
            </p>
        `;
    }


    else if (topic === "colours") {

        result.innerHTML = `
            <h3>Colours Of Modern Elegance</h3>

            <p>
                Soft neutrals, deep jewel tones and warm pastels
                can create sophisticated and timeless fashion looks.
            </p>

            <p>
                Choosing colours that make you feel confident can
                help you create a wardrobe that reflects your
                personal style.
            </p>
        `;
    }


    else if (topic === "tradition") {

        result.innerHTML = `
            <h3>Tradition Reimagined</h3>

            <p>
                Contemporary fashion continues to take inspiration
                from traditional Indian craftsmanship while creating
                fresh designs for modern lifestyles.
            </p>

            <p>
                KRISHARA celebrates the connection between heritage,
                creativity and modern elegance.
            </p>
        `;
    }

}
// ================= FEATURED LOOKS =================

function showLook(look) {

    const result = document.getElementById("look-result");

    if (look === "festive") {

        result.innerHTML = `
            <h3>The Festive Muse ✨</h3>

            <p>
                Celebrate special moments with elegant silhouettes,
                graceful details and a touch of timeless beauty.
                This look is perfect for festive gatherings and
                memorable celebrations.
            </p>
        `;

    }

    else if (look === "everyday") {

        result.innerHTML = `
            <h3>Everyday Chic ✦</h3>

            <p>
                Modern fashion should feel as comfortable as it
                looks beautiful. Everyday Chic brings together
                effortless styling and contemporary elegance.
            </p>
        `;

    }

    else if (look === "evening") {

        result.innerHTML = `
            <h3>Evening Elegance ✨</h3>

            <p>
                Create an unforgettable impression with refined
                details, graceful styling and sophisticated
                fashion made for special evenings.
            </p>
        `;

    }

}
