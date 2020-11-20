import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyAhTEnBs17g5I79MkSPfmerQgKwUooTsas',
  authDomain: 'chat-becdd.firebaseapp.com',
  databaseURL: 'https://chat-becdd.firebaseio.com',
  projectId: 'chat-becdd',
  storageBucket: 'chat-becdd.appspot.com',
  messagingSenderId: '889628958549',
  appId: '1:889628958549:web:bd874870ebf133629c99dc',
  measurementId: 'G-7XZRFGFCWS',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className='App'>
      <header></header>
      <section> {user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return auth.currentUser && <button onClick={() => auth.signOut}></button>;
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').line();
}
export default App;
