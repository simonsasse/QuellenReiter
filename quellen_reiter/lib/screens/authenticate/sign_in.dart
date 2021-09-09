import 'package:flutter/material.dart';
import 'package:quellen_reiter/services/auth.dart';

class SignIn extends StatefulWidget {
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  final AuthService _auth = AuthService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.yellow,
      appBar: AppBar(
        backgroundColor: Colors.yellow,
        elevation: 0.0,
        title: Text('Sign in to Quellenreiter'),
      ),
      body: Container(
        alignment: Alignment.center,
        padding: EdgeInsets.symmetric(vertical: 20, horizontal: 50),
        child: Form(
          child: Column(
            children: <Widget>[
              SizedBox(height: 20.0),
              TextFormField(
                onChanged: (val) {},
              ),
              SizedBox(height: 20.0),
              TextFormField(
                onChanged: (val) {},
                obscureText: true,
              ),
              SizedBox(height: 20.0),
              OutlinedButton.icon(
                icon: Icon(Icons.lock_open),
                onPressed: () {},
                label: Text("einloggen"),
              ),
              SizedBox(height: 100.0),
              SizedBox(height: 20.0),
              Icon(Icons.masks_outlined),
              SizedBox(height: 20.0),
              Text(
                "Wear your f***ing mask.",
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 20.0),
              Icon(Icons.masks_outlined),
            ],
          ),
        ),
      ),
    );
  }
}
