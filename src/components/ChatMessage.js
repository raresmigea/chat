import React from 'react';

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const { auth } = props;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt='profile' />
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;
