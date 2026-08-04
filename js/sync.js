// ===============================
// VALORA Sync System
// ===============================

let trades = JSON.parse(localStorage.getItem("VALORA_TRADES")) || [];

// أكواد التزامن الصحيحة (مؤقتة حتى ربط السيرفر)
const validCodes = [
    "VALORA2026",
    "SYNC8888",
    "TRADE777",
    "VIP2026",
    "BTC1000"
];

// ===============================
// التحقق من الكود
// ===============================

function checkTrade() {

    const input = document.getElementById("tradeCode");
    const code = input.value.trim();
    const result = document.getElementById("resultBox");

    if (code === "") {

        result.innerHTML = `
        <div class="error">
        يرجى إدخال كود الصفقة
        </div>
        `;

        return;
    }

    if (!validCodes.includes(code)) {

        result.innerHTML = `
        <div class="error">
        ✕ كود الصفقة غير صحيح
        <br>
        يرجى التحقق والمحاولة مرة أخرى
        </div>
        `;

        return;
    }

    const exists = trades.find(item => item.code === code);

    if (exists) {

        result.innerHTML = `
        <div class="error">
        ⚠️ هذا الكود مستخدم مسبقاً
        </div>
        `;

        return;
    }

    result.innerHTML = `
    <div class="success">
    ✓ تم ربط الصفقة بنجاح
    </div>
    `;

    const trade = {

        coin: document.querySelector(".coin.active h4").innerText + "/USDT",

        code: code,

        date: new Date().toLocaleString("ar-EG"),

        status: "مكتملة"

    };

    trades.push(trade);

    localStorage.setItem(
        "VALORA_TRADES",
        JSON.stringify(trades)
    );

    input.value = "";

    loadTrades();

}

// ===============================
// عرض الصفقات
// ===============================

function loadTrades() {

    const box = document.getElementById("ordersList");

    if (!box) return;

    if (trades.length === 0) {

        box.innerHTML = `
        <div class="empty-order">
        لا توجد صفقات حالياً
        </div>
        `;

        return;
    }

    box.innerHTML = "";

    [...trades].reverse().forEach(item => {

        box.innerHTML += `
        <div class="order-card">

            <div>

                <strong>${item.coin}</strong>

                <br>

                <span>الكود: ${item.code}</span>

            </div>

            <div>

                <span>${item.date}</span>

                <br>

                <b class="success-text">${item.status}</b>

            </div>

        </div>
        `;

    });

}

// ===============================
// اختيار العملة
// ===============================

document.querySelectorAll(".coin").forEach(coin => {

    coin.addEventListener("click", function () {

        document.querySelectorAll(".coin").forEach(c => {

            c.classList.remove("active");

        });

        this.classList.add("active");

    });

});

// ===============================
// تشغيل الصفحة
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    loadTrades();

});
