const langHeaderHead = {
    az: ["Yeni mövsüm üslublarına 50%-ə qədər endirim əldə edin, yalnız məhdud vaxt", "Kömək Mərkəzi", "Sifariş Takibi"],
    en: ["Get up to 50% off new season styles, limited time only", "Help Center", "Order Tracking"]
}

const langHeaderMiddle = {
    az: ["Axtar", "Giriş / Qeydiyyat"],
    en: ["Search", "Login / Register"]
}

const langHeaderBottom = {
    az: ["Kateqoriyalar", "Ana Səhifə", "Dəb", "Yeni gələnlər", "Bütün Brendlər", "Daha çoxu", "Ödənişsiz çatdırılma"],
    en: ["SHOP BY CATEGORIES", "Home", "Fashion", "New Arrivals", "All Brands", "More", "Free International Delivery"]
}

const langFirstMain = {
    az: ["Böyük Qənaət Günlərinin Satışı", "Qadınlar üçün Solid Dəyirmi Yaşıl T-Shirt", "Yalnız Başlayanlar", "İNDİ AL", "Böyük Qənaət Günlərinin Satışı", "Qadınlar üçün Solid Dəyirmi Yaşıl T-Shirt", "Yalnız Başlayanlar", "İNDİ AL", "İNDİ AL", "Marsel yemək otağı kreslosu", "İNDİ AL", "Ağıllı planşet", "Krep köynək", "Dəri saat", "Yuvarlanan brilyant", "Taxta kürsü", "Sneker ayaqqabıları"],
    en: ["Big Saving Days Sale", "Women Solid Round Green T-Shirt", "Starting At Only", "SHOP NOW", "Big Saving Days Sale", "Women Solid Round Green T-Shirt", "Starting At Only", "SHOP NOW", "SHOP NOW", "Marcel Dining Room Chair", "SHOP NOW", "Smart Tablet", "Crepe T-Shirt", "Leather Watch", "Rolling Diamond", "Wooden Chair", "Sneaker Shoes"]
}

const langScndMain = {
    az: ["ÖDƏNİŞSİZ ÇATDIRILMA", "İlk Sifarişinizdə İndi Pulsuz Çatdırılma və 200$-dan yuxarı", "- YALNIZ 200$*"],
    en: ["FREE SHIPPING", "Free Delivery Now On Your First Order and over $200", "- ONLY $200*"]
}

const langThrdMain = {
    az: ["İNDİ AL", "Kreslo Mad By shopstic", "İNDİ AL", "Səs-küylü Simsiz Qulaqlıqlar", "İNDİ AL"],
    en: ["SHOP NOW", "Armchair Mad By shopstic", "SHOP NOW", "Noise Wireless Headphones", "SHOP NOW"]
}
const langFourMain = {
    az: ["Moda", "Elektronika", "Mebel", "Son məhsullar"],
    en: ["Fashion", "Electronics", "Furniture", "Latest Products"]
}

const langNew = {
    az: ["YENİ", "YENİ", "YENİ", "YENİ", "YENİ", "YENİ", "YENİ", "YENİ", "YENİ", "YENİ"],
    en: ["NEW", "NEW", "NEW", "NEW", "NEW", "NEW", "NEW", "NEW", "NEW", "NEW"]
}
const langLast = {
    az: ["SAAT", "M6 Smart Band 2.3 – Fitness Band <br> Kişilər və Qadınların Sağlamlıq takibi, Qırmızı Qayış"],
    en: ["WATCH", "M6 Smart Band 2.3 – Fitness Band <br> Men’s and Women’s Health Tracking, Red Strap"]
}

const langBtn = document.querySelector('#langBtn');
const navLink = document.querySelectorAll('.head-word');
const navMiddle = document.querySelectorAll('#nav-middle');
const navBottom = document.querySelectorAll('.nav-bottom');
const firstMain = document.querySelectorAll('.first-main');
const scndMain = document.querySelectorAll('.scnd-main');
const thrdMain = document.querySelectorAll('.thrd-main');
const fourMain = document.querySelectorAll('.four-main');
const newItem = document.querySelectorAll('.new-item');
const last = document.querySelectorAll('.last');

const multiLang = () => {
    if (langBtn.innerHTML === 'AZ') {
        localStorage.setItem("lang", "AZ");

        langHeaderHead.az.map((i, c) => {
            navLink[c].innerHTML = i;
        })
        langHeaderMiddle.az.map((i, c) => {
            navMiddle[c].innerHTML = i;
        })
        langHeaderBottom.az.map((i, c) => {
            navBottom[c].innerHTML = i;
        })
        langFirstMain.az.map((i, c) => {
            firstMain[c].innerHTML = i;
        })
        langScndMain.az.map((i, c) => {
            scndMain[c].innerHTML = i;
        })
        langThrdMain.az.map((i, c) => {
            thrdMain[c].innerHTML = i;
        })
        langFourMain.az.map((i, c) => {
            fourMain[c].innerHTML = i;
        })
        langNew.az.map((i, c) => {
            newItem[c].innerHTML = i;
        })
        langLast.az.map((i, c) => {
            last[c].innerHTML = i;
        })

        langBtn.innerHTML = "EN";

    } else {
        localStorage.setItem("lang", "EN");

        langHeaderHead.en.map((i, c) => {
            navLink[c].innerHTML = i;
        })
        langHeaderMiddle.en.map((i, c) => {
            navMiddle[c].innerHTML = i;
        })
        langHeaderBottom.en.map((i, c) => {
            navBottom[c].innerHTML = i;
        })
        langFirstMain.en.map((i, c) => {
            firstMain[c].innerHTML = i;
        })
        langScndMain.en.map((i, c) => {
            scndMain[c].innerHTML = i;
        })
        langThrdMain.en.map((i, c) => {
            thrdMain[c].innerHTML = i;
        })
        langFourMain.en.map((i, c) => {
            fourMain[c].innerHTML = i;
        })
        langNew.en.map((i, c) => {
            newItem[c].innerHTML = i;
        })
        langLast.en.map((i, c) => {
            last[c].innerHTML = i;
        })

        langBtn.innerHTML = "AZ";
    }
}

langBtn.onclick = multiLang;

if (localStorage.getItem("lang") === "AZ") {
    langHeaderHead.az.map((i, c) => {
        navLink[c].innerHTML = i;
    })
    langHeaderMiddle.az.map((i, c) => {
        navMiddle[c].innerHTML = i;
    })
    langHeaderBottom.az.map((i, c) => {
        navBottom[c].innerHTML = i;
    })
    langFirstMain.az.map((i, c) => {
        firstMain[c].innerHTML = i;
    })
    langScndMain.az.map((i, c) => {
        scndMain[c].innerHTML = i;
    })
    langThrdMain.az.map((i, c) => {
        thrdMain[c].innerHTML = i;
    })
    langFourMain.az.map((i, c) => {
        fourMain[c].innerHTML = i;
    })
    langNew.az.map((i, c) => {
        newItem[c].innerHTML = i;
    })
    langLast.az.map((i, c) => {
        last[c].innerHTML = i;
    })

    langBtn.innerHTML = "EN";
} else {
    langHeaderHead.en.map((i, c) => {
        navLink[c].innerHTML = i;
    })
    langHeaderMiddle.en.map((i, c) => {
        navMiddle[c].innerHTML = i;
    })
    langHeaderBottom.en.map((i, c) => {
        navBottom[c].innerHTML = i;
    })
    langFirstMain.en.map((i, c) => {
        firstMain[c].innerHTML = i;
    })
    langScndMain.en.map((i, c) => {
        scndMain[c].innerHTML = i;
    })
    langThrdMain.en.map((i, c) => {
        thrdMain[c].innerHTML = i;
    })
    langFourMain.en.map((i, c) => {
        fourMain[c].innerHTML = i;
    })
    langNew.en.map((i, c) => {
        newItem[c].innerHTML = i;
    })
    langLast.en.map((i, c) => {
        last[c].innerHTML = i;
    })

    langBtn.innerHTML = "AZ";
}

if (window.navigator.language === "en-US") {
    langHeaderHead.en.map((i, c) => {
        navLink[c].innerHTML = i;
    })
    langHeaderMiddle.en.map((i, c) => {
        navMiddle[c].innerHTML = i;
    })
    langHeaderBottom.en.map((i, c) => {
        navBottom[c].innerHTML = i;
    })
    langFirstMain.en.map((i, c) => {
        firstMain[c].innerHTML = i;
    })
    langScndMain.en.map((i, c) => {
        scndMain[c].innerHTML = i;
    })
    langThrdMain.en.map((i, c) => {
        thrdMain[c].innerHTML = i;
    })
    langFourMain.en.map((i, c) => {
        fourMain[c].innerHTML = i;
    })
    langNew.en.map((i, c) => {
        newItem[c].innerHTML = i;
    })
    langLast.en.map((i, c) => {
        last[c].innerHTML = i;
    })

    langBtn.innerHTML = "AZ";
} else {
    langHeaderHead.az.map((i, c) => {
        navLink[c].innerHTML = i;
    })
    langHeaderMiddle.az.map((i, c) => {
        navMiddle[c].innerHTML = i;
    })
    langHeaderBottom.az.map((i, c) => {
        navBottom[c].innerHTML = i;
    })
    langFirstMain.az.map((i, c) => {
        firstMain[c].innerHTML = i;
    })
    langScndMain.az.map((i, c) => {
        scndMain[c].innerHTML = i;
    })
    langThrdMain.az.map((i, c) => {
        thrdMain[c].innerHTML = i;
    })
    langFourMain.az.map((i, c) => {
        fourMain[c].innerHTML = i;
    })
    langNew.az.map((i, c) => {
        newItem[c].innerHTML = i;
    })
    langLast.az.map((i, c) => {
        last[c].innerHTML = i;
    })

    langBtn.innerHTML = "EN";
}

// ----------------------======DARK-LIGHT-MODE========----------------------

const modeBtn = document.querySelector('#modeBtn');

const changeMode = () => {
    if (document.body.className === "light") {
        document.body.className = 'dark';
        modeBtn.innerHTML = "🌞"
        localStorage.setItem("mode", "light");

    } else {
        document.body.className = "light";
        modeBtn.innerHTML = "🌜"
        localStorage.setItem("mode", "dark");
    }
}

modeBtn.onclick = changeMode;

if (localStorage.getItem("mode") === "light") {
    document.body.className = 'dark';
    modeBtn.innerHTML = "🌞"
} else {
    document.body.className = "light";
    modeBtn.innerHTML = "🌜"
}


// console.log(window);

// const theme = window.location.hash.indexOf('darktheme');

// if (theme === "dark") {
//     document.body.className = "light";
//     // body.classList.remove('dark');
//     // body.classList.add('light');
//     modeBtn.innerHTML = "🌜"
// } else {
//     document.body.className = 'dark';
//     // body.classList.add('dark');
//     // body.classList.re('light');
//     modeBtn.innerHTML = "🌞"
// }

