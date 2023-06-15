const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async(keyword) => {
    try {
        return await axios.get("https://www.inflearn.com/courses?s="+ encodeURI(keyword))
    } catch(err) {
        console.log(err);
    }
};

const parsing = async (keyword) => {
    const html = await getHTML(keyword);
    console.log(html);
};

parsing("자바스크립트");