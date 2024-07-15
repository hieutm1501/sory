"use strict";
import axios from 'axios';


var Odoo = function (config) {
    config = config || {};
    this.host = config.host;
    this.database = config.database;
    this.username = config.username || null;
    this.password = config.password || null;
    this.session_id = config.session_id || null;
    this.context = config.context;
};

export const authenticate = async () => {
    var body = JSON.stringify({
        params: {
            db: 'gerp-zalo-v12',
            login: 'thanhhai41280@gmail.com',
            password: '123',
        },
    });
    var requestConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        data: body,
        withCredentials: false,
        baseURL: 'https://gerp-zalo-v12.phanmemdoanhnghiep.net',
        url: "/web/session/authenticate",
    };
    var result = await axios(requestConfig);
    console.log(result.data);
    return result.data.result.session_id;
};


export const getCategories = async (session_id) => {
    console.log(session_id);
    document.cookie = `session_id=${session_id}`;
    var body = JSON.stringify({
        params: {
            // db: 'gerp-zalo-v12',
            // login: 'thanhhai41280@gmail.com',
            // password: '123',
        },
    });
    var requestConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        data: body,
        withCredentials: false,
        baseURL: 'https://gerp-zalo-v12.phanmemdoanhnghiep.net',
        url: "/zalo/list_category_product",
    };
    var result = await axios(requestConfig);
    console.log(result);
};


export default Odoo
