const { GoogleGenerativeAI } = require("@google/generative-ai");

async function ans(p) {
    const genAI = new GoogleGenerativeAI("AIzaSyD-07pGgcB13d8w0bKhsxvIv0Qx81j1-lY");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(p);

    return result.response.text();
}

module.exports = { ans };
