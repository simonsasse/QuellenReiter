// import 'dart:html';

// import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:quellen_reiter/models/qr_user.dart';
import 'package:quellen_reiter/screens/wrapper.dart';
import 'package:provider/provider.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:quellen_reiter/services/auth.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // Create the initialization Future outside of `build`:
  final Future<FirebaseApp> _initialization = Firebase.initializeApp();

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      // Initialize FlutterFire:
      future: _initialization,
      builder: (context, snapshot) {
        // Check for errors
        if (snapshot.hasError) {
          return MaterialApp(
            home: Directionality(
              textDirection: TextDirection.ltr,
              child: SafeArea(
                top: true,
                bottom: true,
                child: Text(snapshot.error.toString(),
                    textDirection: TextDirection.ltr),
              ),
            ),
          );
        }

        // Once complete, show your application
        if (snapshot.connectionState == ConnectionState.done) {
          return StreamProvider<QRUser>.value(
            initialData: null,
            value: AuthService().user,
            child: MaterialApp(
              theme: ThemeData(
                accentColor: Colors.yellow,
                primaryColor: Colors.black,
                textTheme: TextTheme(
                  headline2: TextStyle(color: Colors.white),
                  bodyText2: TextStyle(color: Colors.white),
                ),
                buttonTheme: ButtonThemeData(
                  buttonColor: Colors.yellow,
                ),
              ),
              home: Wrapper(),
            ),
          );
        }

        // Otherwise, show something whilst waiting for initialization to complete
        else {
          return MaterialApp(
            home: Directionality(
              textDirection: TextDirection.ltr,
              child: SafeArea(
                top: true,
                bottom: true,
                child: Text("..loading...", textDirection: TextDirection.ltr),
              ),
            ),
          );
        }
      },
    );
  }
}
