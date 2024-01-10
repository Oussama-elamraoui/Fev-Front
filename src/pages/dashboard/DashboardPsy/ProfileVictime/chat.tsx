import react, { useState, useEffect, useRef } from 'react'
import { FC } from 'react';
import { generateOpenAICompletion } from "./openAiApi";
import OpenAiResult from './openAiResult';
import './style.css';
import './accordion.css'
import IA_M3ak from '../../../../assets/images/IA-M3ak.png';
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { BsChatDotsFill } from "react-icons/bs";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './renderPDF';
import iconchat from './../../../../assets/images/chatIcon.png'
interface MyModalProps {
    show: boolean;
    handleClose: () => void;
}
interface Message {
    message: string,
    author: 'me' | 'gpt',
    date: Date,
}

const ChatModal: FC<MyModalProps> = ({ show, handleClose }) => {
    const [prompt, setPrompt] = useState<string>('');
    const [promptReport, setPromptReport] = useState<string>('');
    const [completion, setCompletion] = useState<string>('');
    const [report, setReport] = useState<string>('')
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setTyping] = useState(false);
    const [isReportTyping, setIsReportTyping] = useState<boolean>(false)
    // const[lastMessage,setLastMessage]=useState<string>('')
    const [typeOfDiscusion, setTypeOfDiscusion] = useState<string>('report')
    const chatHistoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to the bottom of the chat history when messages change
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    }, [messages]);
    // const lastMessageElement = chatHistoryRef.current?.querySelector('ul:last-child');
    useEffect(() => {
        setPromptReport('i want you to give me desciption of patient has a problem in his mind and ghow i can help him')
        const handlereport = async () => {
            setIsReportTyping(true)
            try {
                const result = await generateOpenAICompletion(promptReport);
                setReport(result)
            } catch (error) {
                // Handle error
                setReport('something wrong!😞' + { error });
            }
            setIsReportTyping(false)
        }
        handlereport();

    }, []);
    const handleGenerateCompletion = async () => {
        if (prompt.trim() === '') return;
        // Update the state to include the user's message
        // Clear the input field
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                message: prompt,
                author: 'me',
                date: new Date(),
            },
        ]);

        setTyping(true);
        try {
            const result = await generateOpenAICompletion(prompt);
            setCompletion(result);
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    message: result,
                    author: 'gpt',
                    date: new Date(),
                },
            ]);
        } catch (error) {
            // Handle error


            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    message: 'Something went wrong! 😞',
                    author: 'gpt',
                    date: new Date(),
                },
            ]);
        }
        setTyping(false)
        setPrompt('');
        console.log(messages)
    };
    return (
        <>
            <div className={`chat-container ${show ? 'open' : ''}`}>

                {show && (
                    <div className="chat-window" ref={chatHistoryRef}>
                        <div className="d-flex align-items-center py-1 position-fixed controller-bar-chat" style={{ backgroundColor: '#fd8107',height: '9%', zIndex: '1000', }} >
                            <div className="position-relative" style={{ paddingLeft: '10px' }}>
                                <img src={IA_M3ak} className="rounded-circle mr-3" alt="" style={{ height: '30px', width: '30px' }} />
                            </div>
                            <div className="flex-grow-1 pl-3">
                                <strong className='position-absolute' style={{ top: '13px', color: 'white' }}>AI M3ak</strong>
                                {!isReportTyping ? (isTyping ? (<div className='position-absolute text-muted small' style={{ fontSize: '8px', top: '30px', color: '#F7F7F7' }}><em style={{ color: '#DEDEDE' }}>Typing...</em></div>) : (<div className='position-absolute text-muted small' style={{ fontSize: '8px', top: '30px' }}><em style={{ color: '#DEDEDE' }}>Online</em></div>)) : <div className='position-absolute text-muted small' style={{ fontSize: '8px', top: '30px' }}><em style={{ color: '#DEDEDE' }}>Report...</em></div>}
                            </div>
                            <div>
                                <button className={`btn ${typeOfDiscusion === 'chat' && 'border'} btn-lg mr-1 px-2`} title='Chat' onClick={() => setTypeOfDiscusion('chat')}><i className="bi bi-chat-left-dots-fill"></i></button>
                                <button className={`btn btn-lg mr-1 px-2 d-none d-md-inline-block ${typeOfDiscusion === 'report' && 'border'}`} title='report' onClick={() => setTypeOfDiscusion('report')}><i className="bi bi-file-earmark-pdf-fill"></i></button>
                                <button className="btn  btn-lg px-2"><i className="bi bi-x" onClick={handleClose}></i></button>
                            </div>
                        </div>
                        <div className="chat-history" style={{ marginTop: '12%' }}>
                            {/*  */}
                            {typeOfDiscusion === 'report' && <div className='d-flex justify-content-end' title='Download Repport' style={{ position: 'fixed', right: '0px', marginTop: '14px', marginRight: '14px', cursor: 'pointer', zIndex: '1', color: 'orange' }}>
                                <PDFDownloadLink
                                    document={<PdfDocument patient='cccc' report={report} />}
                                    fileName='report'
                                    style={{ color: 'orange' }}
                                >
                                    {/* {({ blob, url, loading, error }) =>
                                        loading ? "Loading..." : "Download Invoice"
                                    }  */}
                                    <i className="bi bi-download px-2"></i>
                                </PDFDownloadLink>
                            </div>}

                            <div className="d-flex justify-content-center">
                                <img src={IA_M3ak} alt="" style={{ width: '60px', right: 'auto' }} />
                                <div className='badge-chat-report'>
                                    {typeOfDiscusion === 'chat' && <BsChatDotsFill style={{ color: 'orange', fontSize: '14px' }}></BsChatDotsFill>}
                                    {typeOfDiscusion === 'report' && <BsFileEarmarkTextFill style={{ color: 'orange', fontSize: '14px' }} />}

                                </div>
                            </div>
                            {typeOfDiscusion === 'chat' ? <div className="d-flex justify-content-center">Chat</div> : <div className="d-flex justify-content-center">Report</div>}
                            <div className='AiDescription d-flex justify-content-center'>This chat allows you to get to know the patient more!</div>
                            <ul className="m-b-0 pt-4">
                                {typeOfDiscusion === 'chat' ? (messages.map((item, index) => {
                                    return item.author === "me" ? (
                                        <li key={index} className="clearfix mymessage" style={{ marginLeft: '20px', marginRight: '20px' }}>
                                            <div className="message  other-message float-right">{item.message}
                                                <div><span className="message-data-time text-right" style={{ fontFamily: 'sans-serif', fontSize: '0.695em' }}>10:10 AM, Today</span></div>
                                            </div>
                                        </li>)
                                        : (
                                            <li className="clearfix" key={index}>
                                                <div className="message-data">
                                                    <img
                                                        src={iconchat}
                                                        style={{ height: '30px' }}
                                                        alt="IAM3ak"
                                                    />
                                                    <span className="message-data-time" style={{ fontFamily: 'sans-serif', fontSize: '0.695em' }}>10:12 AM, Today</span>
                                                </div>
                                                <div className="message my-message">
                                                    {index === messages.length - 1 ? !isTyping && (<OpenAiResult text={item.message}></OpenAiResult>) : <p className='text-muted' style={{ fontSize: '0.775em' }}>{item.message}</p>}
                                                </div>

                                            </li>
                                        )
                                })) : (
                                    <>
                                        <li className="clearfix mymessage" style={{ marginLeft: '20px', marginRight: '20px' }}>
                                            <div className="message  other-message float-right">
                                                <div><span className="message-data-time text-right" style={{ fontFamily: 'sans-serif', fontSize: '0.695em' }}>10:10 AM, Today</span></div>
                                            </div>
                                        </li>
                                        <li className="clearfix">
                                            <div className="message-data">
                                                <img
                                                    src={iconchat}
                                                    style={{ width: '30px' }}
                                                    alt="IA M3ak"
                                                />
                                                <span className="message-data-time" style={{ fontFamily: 'sans-serif', fontSize: '0.695em' }}>10:12 AM, Today</span>
                                            </div>
                                            <div className="message my-message">
                                                {isReportTyping ?
                                                    <div className="typing-indicator">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div> :
                                                    <OpenAiResult text={report}></OpenAiResult>}


                                            </div>
                                        </li>
                                    </>
                                )}
                                {isTyping &&
                                    <li className="clearfix">
                                        <div className="message-data">
                                            <img
                                                src={iconchat}
                                                style={{ height: '30px' }}
                                                alt=""
                                            />
                                            <span className="message-data-time" style={{ fontFamily: 'sans-serif', fontSize: '0.695em' }}>10:12 AM, Today</span>
                                        </div>
                                        <div className="message my-message">
                                            <div className="typing-indicator">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>
                                }
                            </ul>
                        </div>

                        <div className="row reply" style={{ position: 'fixed', marginBottom: '10%', bottom: '2.2%' }}>
                            <div className="col-sm-10 col-xs-9 reply-main" title={typeOfDiscusion === 'report' ? 'Please select Chat' : 'your prompt'}>
                                <textarea className="form-control" rows={1} id="comment" onChange={(e) => setPrompt(e.target.value)} disabled={typeOfDiscusion === 'report'} value={prompt}></textarea>
                            </div>

                            <div className="col-sm-1 col-xs-1 reply-send" onClick={() => typeOfDiscusion === 'chat' ? handleGenerateCompletion() : null}>
                                <button className="sendchat" style={{ backgroundColor: 'orange', border: 'none', borderRadius: '5px', color: 'white' }} disabled={typeOfDiscusion === 'report'}>send</button>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </>
    );
}
export default ChatModal;