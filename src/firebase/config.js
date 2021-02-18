import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
const firebaseConfig = {
apiKey: 'AIzaSyBqUc5CQpHeUnP-eflC-WbXeHqknxoq4LI',
authDomain: 'quellenreiter-8874c.firebaseapp.com',
databaseURL: 'https://quellenreiter-8874c.firebaseio.com/',
projectId: 'quellenreiter-8874c',
storageBucket: 'quellenreiter-8874c.appspot.com',
messagingSenderId: '974166135260',
appId: '1:974166135260:ios:f4ca486cfc33682baa3f19',
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };
