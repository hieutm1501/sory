import React from 'react'
import './home.css'
import { useForm } from 'react-hook-form';
import { message, Input, Form, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log(values);
        if (values?.name == "21062024" || values?.name == "2106" || values?.name == "210624") {
            message.success('Thành Công !');
            navigate("/hello")
        } else {
            message.warning("Sai rồi, Ngày hôm tặng em chiếc bánh sinh nhật sớm !")
        }
    };


    return (
        <div>
            <div class="blurred-box">
                <div class="user-login-box">
                    <span class="user-icon"></span>
                    <div class="user-name">Ngày chiếc bánh đầu tiên</div>
                    <Form
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Ô sao không nhập!' }]}
                        >
                            <Input placeholder="Eg:'15012003'..." />
                        </Form.Item>
                        <Form.Item>
                            <Button className='bg-blue-500' type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>

        </div>
    )
}

export default Home