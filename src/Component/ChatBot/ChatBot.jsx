import React, { useState } from 'react';

function ChatBot() {

    const [sendMessage, setSendMessage] = useState('');
    const [showQuestion, setShowQuestion] = useState('');
    const [receiveMessage, setReceiveMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const encodedMessage = encodeURIComponent(sendMessage)

    const handleMessageSend = async () => {
        setShowQuestion(sendMessage)
        setSendMessage('');
        setLoading(true)
        try {
            const response = await fetch('http://localhost:8000/api/generateResponse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: encodedMessage }),
            });

            console.log(response)


            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            const responseData = await response.json();

            if (responseData.status === false) {
                throw new Error(responseData.error || 'Failed to process message');
            }

            const dynamicResponse = responseData.answer
            // console.log(dynamicResponse, "response")

            const codePattern = /```[\s\S]*?```/g;

            const codeSegments = dynamicResponse.match(codePattern) || [];

            const textSegments = dynamicResponse.split(codePattern);

            const allSegments = [];
            for (let i = 0; i < textSegments.length || i < codeSegments.length; i++) {
                if (textSegments[i]) allSegments.push(textSegments[i].trim());
                if (codeSegments[i]) allSegments.push(codeSegments[i].trim());
            }

            // console.log("Segments in order:", allSegments);
            const data = allSegments.map((segment, idx) => segment);

            setReceiveMessage(data);

            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false)
        }
    };

    const ans = receiveMessage && receiveMessage?.map((item => item.split('\n')));

    function removebacktag(line) {
        var str = line
        var res;
        if (str.includes("```")) {
            res = str.replace("```", "");
        } else {
            res = line.replace(/\*\*/g, "");
        }
        return res
    }

    function displayContent(content) {
        // console.log(content)
        const firstElement = content[0];
        const codeBlockRegex = /^```/;
        if (codeBlockRegex.test(firstElement)) {
            return (

                <>
                    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
                        <div className='codeHeader'>
                            <p>{removebacktag(content[0])}</p>
                        </div>
                        <pre style={{ backgroundColor: "black", padding: '10px', margin: '0px' }}>
                            {content.map((line, index) => (
                                <React.Fragment key={index}>
                                    {index === 0 ? (
                                        null
                                    ) : index !== content.length - 1 ? (
                                        <code style={{}}>{line}<br /></code>
                                    ) : null}
                                </React.Fragment>
                            ))}
                        </pre>
                    </div>
                </>


            );
        } else {
            return (
                <div>
                    {content.map((line, index) => (
                        <div key={index}>{removebacktag(line)}<br /></div>
                    ))}
                </div>
            );
        }
    }

    return (

        <main>

            <div className="view new-chat-view">

                <div className="logo">
                    ChatWTF
                </div>
            </div>

            <div className="view conversation-view">

                <div className="user message">
                    <div className="identity">
                        <i className="user-icon">u</i>
                    </div>
                    <div className="content">
                        <p>{showQuestion}</p>
                    </div>
                </div>
                <div className="assistant message">
                    <div className="identity">
                        <i className="gpt user-icon">G</i>
                    </div>

                    {loading && (
                        <div className="loading">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    )}

                    <div className="content">
                        {ans && ans?.map(element => displayContent(element))}

                    </div>
                </div>


            </div>

            <div id="message-form">
                <div className="message-wrapper">
                    <textarea
                        id="message"
                        rows="1"
                        name='message'
                        placeholder="Send a message"
                        value={sendMessage}
                        onChange={(e) => setSendMessage(e.target.value)}
                    ></textarea>
                    <button className="send-button"
                        onClick={handleMessageSend}
                    ><i className="fa fa-paper-plane"></i></button>
                    {error && <div style={{ color: 'white' }}>Error: {error}</div>}
                </div>
                <div className="disclaimer">This is a ChatGPT UI Clone for personal use and educational purposes only.</div>
            </div>
        </main>

    )
}

export default ChatBot
