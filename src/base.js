import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBRX3nSiZj5BNR9-LTkC0-kJ9Nnq7qc6Ew",
    authDomain: "react-chatbox-30fcd.firebaseapp.com",
    databaseURL: "https://react-chatbox-30fcd.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}
export default base