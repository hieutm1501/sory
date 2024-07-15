import React, { useEffect } from 'react';
import Odoo, { authenticate, getCategories } from '../../api';
import axios from 'axios';
import { message, Input, Form, Button } from 'antd';

const Test = () => {
    // const getSession = async () => {
    //     const result = await authenticate();
    //     console.log("LoginDB", result);
    //     await getCategories(result);
    // }
    // getSession();
    const onFinish = async (values) => {
        console.log("value", values);
        // const reponse = await getCategories(values);
        // console.log("category", reponse);
    };

    const odooUrl = 'https://gerp-zalo-v12.phanmemdoanhnghiep.net';
    const db = 'gerp-zalo-v12';
    const username = 'thanhhai41280@gmail.com';
    const password = '123';

    // Đăng nhập và lấy session_id
    axios.post(`${odooUrl}/web/session/authenticate`, {
        jsonrpc: '2.0',
        params: {
            db: db,
            login: username,
            password: password
        }
    })
        .then(response => {
            const session_id = response.data.result.session_id;
            const uid = response.data.result.uid;
            console.log("Login:", response);
            // Gọi các phương thức API khác
            document.cookie = `session_id=${session_id}`;
            axios.post(`${odooUrl}/zalo/list_category_product`, {
                jsonrpc: '2.0',
                method: "call",
                params: {
                    args: [
                        {}
                    ],
                    kwargs: {
                        context: {
                            lang: "vi_VN",
                            tz: "Asia/Ho_Chi_Minh",
                            uid: uid // id của người đăng nhập
                        }
                    }
                },

            }, {
                headers: {
                    "Content-Type": "application/json",
                    // 'Cookie': `session_id=${session_id}`,
                },
                withCredentials: true,
            },

            )
                .then(response => {
                    // const partner = response.data.result;
                    console.log("Categorys", response);
                })
                .catch(error => {
                    console.error(error);
                });
        })
        .catch(error => {
            console.error(error);
        });

    return (
        <div>

            <Form
                onFinish={onFinish}
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Ô sao không nhập!' }]}
                >
                    <Input placeholder="Đừng nhập sai nha !" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Test;
