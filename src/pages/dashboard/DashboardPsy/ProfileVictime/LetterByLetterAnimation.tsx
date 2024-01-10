import React, { useState, useEffect } from 'react';
import './LetterByLetterAnimation.css';
import './style.scss'
import IA_M3ak from '../../../../assets/images/IA-M3ak.png';
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
import { IoChatboxEllipsesSharp } from "react-icons/io5"
import ChatModal from './chat';
import OffCanvas from './offcanvas';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './renderPDF';
interface LetterByLetterAnimationProps {
    text: string;
    font: string;
}

const LetterByLetterAnimation: React.FC<LetterByLetterAnimationProps> = ({ text, font }) => {
    const [animatedText, setAnimatedText] = useState<string>('');
    const [isChatOpen, setChatOpen] = useState(false);

    const [modalShow, setModalShow] = useState(false);

    const openModal = () => {
        setModalShow(true);
    };

    const closeModal = () => {
        setModalShow(false);
    };
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setAnimatedText((prevText) => prevText + text[index]);
            index++;

            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, 8); // You can adjust the interval to control the speed of the animation

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <>
            <div className="d-flex ">
                {/* <img src="https://cdn0.iconfinder.com/data/icons/innova/32/innova_Robot-1024.png" alt="" style={{ width: '20px', top: '1px', height: '20px' }} /> */}
                <ul className="chat-list" style={{ paddingLeft: '20px' }}>
                    {/* <img src="https://cdn0.iconfinder.com/data/icons/innova/32/innova_Robot-1024.png" alt="" style={{width:'40px'}}/> */}
                    <li className="in">
                        <div className="chat-body">
                            <div className="chat-message" style={{ height: '240px' }}>
                                <h6>Juste pour aider</h6>
                                <div className='d-flex justify-content-end' title='Download Repport' style={{ position: 'absolute', right: '0px', top: '5px', cursor: 'pointer', zIndex: '1', color: 'white' }}>
                                    <PDFDownloadLink
                                        document={<PdfDocument patient='cccc' report={text} />}
                                        fileName='report'
                                        style={{ color: 'gray' }}
                                    >
                                        {/* {({ blob, url, loading, error }) =>
                                        loading ? "Loading..." : "Download Invoice"
                                    }  */}
                                        <i className="bi bi-download px-2"></i>
                                    </PDFDownloadLink>
                                </div>
                                <p className='text-muted' style={{ fontSize: '0.74em' }}>{animatedText}...</p>
                            </div>
                            <div className='overlayy'>
                                <div className="buttons">

                                    <button className="blob-btn" onClick={openModal}>
                                        {/* <img src={IA_M3ak} alt="" style={{width:'60px',height:'60px'}}/> */}
                                        AI M3ak
                                        <i className="bi bi-chat-left-dots-fill" style={{ marginLeft: '5px' }}></i>
                                        {/* <IoChatboxEllipsesSharp  /> */}
                                        <span className="blob-btn__inner">
                                            <span className="blob-btn__blobs">
                                                <span className="blob-btn__blob"></span>
                                                <span className="blob-btn__blob"></span>
                                                <span className="blob-btn__blob"></span>
                                                <span className="blob-btn__blob"></span>
                                            </span>
                                        </span>
                                    </button>
                                    <br />

                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <defs>
                                            <filter id="goo">
                                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <ChatModal show={modalShow} handleClose={closeModal}></ChatModal>
        </>
    );
};

export default LetterByLetterAnimation;