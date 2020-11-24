import React from 'react';

function ChatRoom(props) {
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

export default ChatRoom;
