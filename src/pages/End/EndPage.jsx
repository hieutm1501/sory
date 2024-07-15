import React, { useState } from 'react';
import { Button, message, Steps, theme, Input, Form } from 'antd';
import './index.css'

const EndPage = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    console.log("pageCrent:", current);
    const onFinish = (values) => {
        console.log(values);
        if (values?.name == "1501" || values?.name == "230601" || values?.name == "2306" || values?.name == "150103") {
            message.success('Tha Thứ cho anh nhớ !');
            setCurrent(current + 1);
        } else {
            message.warning("Quên hay là nhập sai thế !");
        }
    };

    const steps = [
        {
            title: 'First',
            content: <div>
                <div className='mt-[50px]'>
                    <h1 className='text-[20px] text-white'>Cảm ơn em đã đọc bức thư này nhé !</h1>
                    <h2 className='text-white'>Em xem một chút đằng sau nhé!</h2>
                    <h1 className=''>Em nhập ngày sinh nhật của em hoặc anh nhé 😄😄</h1>
                    <Form
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Ô sao không nhập!' }]}
                        >
                            <Input placeholder="Eg:'110201'..." />
                        </Form.Item>
                        <Form.Item>
                            <Button className='bg-blue-500' type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>,
        },
        {
            title: 'Second',
            content: <div>
                <video className="h-[340px] w-full rounded-lg" controls>
                    <source src="https://res.cloudinary.com/dwp7umncy/video/upload/v1721034255/shopinterior/5635551156575_krmnhu.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>,
        },


    ];

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle = {

        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };
    return (
        <div>
            <div className=''>
                <Steps current={current} items={items} />
            </div>
            <div className=' flex justify-center w-[400px] h-[360px]'>
                <div className='w-full' style={contentStyle}>{steps[current].content}</div>
            </div>
            <div style={{ marginTop: 24 }}>

                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Bỏ chặn và trả lời tin nhắn anh đi nhớ!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    )
}

export default EndPage