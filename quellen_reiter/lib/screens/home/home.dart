// import 'dart:html';

import 'package:flutter/material.dart';
import 'package:quellen_reiter/services/auth.dart';

class Home extends StatelessWidget {
  final AuthService _auth = AuthService();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.yellow,
        title: Text('QuellenReiter'),
        actions: <Widget>[
          TextButton.icon(
            icon: Icon(Icons.person),
            onPressed: () async {
              await _auth.signOut();
            },
            label: Text('Logout'),
          )
        ],
      ),
    );
  }
}
