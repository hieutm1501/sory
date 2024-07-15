import React, { useEffect } from 'react';
import './index.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Welcome = () => {


    return (
        <div className='mt-[30px]'>
            <div class="card">
                <div class="back"></div>
                <div class="front">
                    <div class="imgset">
                        <h1 className='text-[30px] mt-5 font-serif'>Thư Gửi Em</h1>
                        <div className='flex justify-center'>
                            <img className='w-[200px]' src="https://res.cloudinary.com/dwp7umncy/image/upload/v1721015372/shopinterior/z5634493972364_ff06ace025917435b1e0c4b9e4679123_o9qe27.jpg" />
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <p id="head">Xin Lỗi Em!</p>
                    <p className='text-[15px] '>Mong là em đọc được bức thư này của anh. Anh vẫn cảm thấy mình rất có lỗi với em ngày hôm đấy , anh nói ra những lời không hay ngày hôm đấy với em. Anh sai tất cả mọi thứ nhưng anh đúng một điều duy nhất là yêu em😊.Tha Lỗi cho anh nhớ!!</p>
                    <p>Truong Minh Hieu</p>

                    <div className='text-center mt-[10px]'>
                        <div class="inline-flex">
                            <Link to={`/hello`}>
                                <button class="bg-[#e6f0e6] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                            </Link>
                            <Link to={`/end`}>
                                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
