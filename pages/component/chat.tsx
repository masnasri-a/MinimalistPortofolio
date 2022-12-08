import axios from "axios"
import { useState } from "react"

const Chat = () => {
    const [tempMsg, setTempMsg] = useState("")
    const [content, setContent] = useState(["Mau curhat apa nih?"])
    const [typing, setTyping] = useState(false)

    const handleTyping = <span className="nasriTyping">Nasri Is Typing ....</span>
    const handleSendMessage = (param: any) => {
        setTempMsg(param)
    }
    const handleRequest = async () => {
        setTyping(true)
        setContent(old => [...old, ": " + tempMsg])

        await axios.get('https://j9b225.deta.dev/ask?ask=' + tempMsg.replace(/\s/g, "%20")).then((resp) => {
        // setContent(resp)
        console.log(resp.data);
        setContent(old => [...old, resp.data])
        setTempMsg("")
        
        setTyping(false)
        }).catch((err)=>{
            setTyping(false)
        setTempMsg("")

        })
    }

    return (
        <>
            <div className="chatPage">
                <div className="headerChat">
                    Deep Talk With Me
                </div>
                {
                    typing?(
                        handleTyping
                    ):null
                }
                <div className="contentChatPage">
                    {
                        content.map((chatData: string, index) => {
                            if (chatData.slice(0, 2) != ": ") {
                                return (
                                    <div className="contentChat" key={index}>
                                        <span>Nasri : {chatData}</span>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="contentChat" key={index}>
                                        <span>Kamu {chatData}</span>
                                    </div>
                                )
                            }

                        })
                    }
                </div>
                <div className="inputMessage">
                    <input className="messageChat" type="text" value={tempMsg} onChange={(e) => handleSendMessage(e.target.value)} />
                </div>
                <div className="sendMessage">
                    <button className="buttonMessage" onClick={() => handleRequest()}>Send</button>
                </div>

            </div>
        </>
    )
}

export default Chat