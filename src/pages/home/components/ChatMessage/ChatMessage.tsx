import './ChatMessage.less'
import Markdown from 'react-markdown'

const ChatMessage = ()=>{
  return (
    <div className='chat-message-wrapper'>
      <div className="chat-message-scroll-wrapper">
        <div className="scrollable-container">
          <div className="infinite-scroll-container">
            <div className="message-container">
              <div className="chat-message">
                <div className="chat-message-row">
                  <div></div>
                  <div className="message-row-wrapper">
                    <div className="message-right-side">
                      <div className="markdown-container">
                        <Markdown className="markdown">
                          '删除\n删除'
                        </Markdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-page-footer"></div>
    </div>
  )
}

export default ChatMessage