import firebase from 'firebase'
	const config = {
	    apiKey: "AIzaSyAwftZfmAduN0oQhvZfdw8BOFggbG6TypI",
	    authDomain: "potatoqueue-cfb05.firebaseapp.com",
	    databaseURL: "https://potatoqueue-cfb05.firebaseio.com",
	    projectId: "potatoqueue-cfb05",
	    storageBucket: "potatoqueue-cfb05.appspot.com",
	    messagingSenderId: "561867426382"
	};
	firebase.initializeApp(config);
export default firebase;