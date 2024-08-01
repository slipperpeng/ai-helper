import './ChatMessage.less'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  PlusCircleOutlined
} from '@ant-design/icons'
import { Button,Tooltip,Input  } from 'antd'
import { useState } from 'react'

const { TextArea } = Input;

const ChatMessage = ()=>{
  const [msgText,sendMegText] = useState('')
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
                          {'删除\n删除'}
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
      <footer className="chat-page-footer">
        <div className="func-area">
          <Tooltip placement="top" title="选择附件">
            <Button className='func-btn' type="text">
              <PlusCircleOutlined />
            </Button>
          </Tooltip>
        </div>
        <TextArea
          className="text-area"
          placeholder="输入消息"
          value={msgText}
          variant="borderless"
          onChange={(e) => sendMegText(e.target.value)}
        >

        </TextArea>
      </footer>
    </div>
  )
}

const CodeBlock = (props) => {
  const {children, className, ...rest} = props
  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <SyntaxHighlighter
      {...rest}
      PreTag="div"
      children={String(children).replace(/\n$/, '')}
      language={match[1]}
      style={dark}
    />
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  )
}

const Markdown = ({ children, ...props }) => (
  <ReactMarkdown {...props} components={{ code: CodeBlock }}>
    {typeof children === 'string' ? children.replace(/\n/g, '  \n') : children}
  </ReactMarkdown>
  
); 

export default ChatMessage