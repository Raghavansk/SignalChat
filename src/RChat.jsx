import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Chat,ChatHeader,ChatBody,ChatComposer,MessageList} from '@pega/cosmos-react-social';
import {  EmojiContext } from '@pega/cosmos-react-core';
import openSocket from 'socket.io-client';
import moment from 'moment';

const socket = openSocket('http://localhost:4000');

const initialState = {
  msgList: []
};
function reducer(state, action) {
  switch(action.type) {
    case 'post':
      return {
        ...state,
        msgList: [...state.msgList,action.payLoad]
      }
  }
}
const RChat = (props) => {
   const [state,dispatch] = useReducer(reducer,initialState);
  const header = <ChatHeader  title='Signal chat' icon='chat-solid'/>;
  const fetchGoogleSprite = () => {
    return 'https://unpkg.com/emoji-datasource-google@5.0.1/img/google/sheets-clean/32.png';
  };
  const onSend = (message) => { 
      dispatch({type: 'post',payLoad: {id:'1', type: 'message', variant: 'sender', direction: 'out', timeStamp:moment(new Date().getTime()).format("LT"), message: message}});
      socket.emit('chat', {
        id:'2', type: 'message', variant: 'receiver', direction: 'in', timeStamp:moment(new Date().getTime()).format("LT"), message: message
      });
  }
  useEffect(() => {
    socket.on('chat',function(data){
      dispatch({type: 'post',payLoad: {id:data.id, type: 'message', variant: 'receiver', direction: 'in', timeStamp:data.timeStamp, message: data.message}});
    });
  },[]);
  const body = (
    <ChatBody>
      <MessageList messages={state.msgList}/>
    </ChatBody>
  );
  const footer = <ChatComposer showEmoji placeholder="Please type your message" onSend={(message) => onSend(message)}/>
  return (
    <EmojiContext.Provider value={{ set: 'google', spriteSrcResolver: fetchGoogleSprite }}>
        <Chat header={header} body={body} footer={footer}/>   
    </EmojiContext.Provider>
  )
}

RChat.propTypes = {
  msgList:PropTypes.array
}

export default RChat;