import 'dart:async';

import "package:firebase_auth/firebase_auth.dart";
import 'package:firebase_core/firebase_core.dart';
import 'package:quellen_reiter/models/qr_user.dart';

class AuthService {
  final FirebaseAuth _auth = FirebaseAuth.instance;

  QRUser _userFromFirebaseUser(User user) {
    return user != null ? QRUser(uid: user.uid) : null;
  }

  // Listen for auth changes
  Stream<QRUser> get user {
    return _auth.authStateChanges().map((
      firebaseUser,
    ) {
      return firebaseUser == null ? null : _userFromFirebaseUser(firebaseUser);
    });
  }

  // sign in anonymous
  Future signInAnon() async {
    try {
      UserCredential result = await _auth.signInAnonymously();
      User user = result.user;
      return _userFromFirebaseUser(user);
    } catch (e) {
      print(e.toString());
      return null;
    }
  }
  // sign in email & passwort

  // register email & passwort

  // sign out
  Future signOut() async {
    try {
      return await _auth.signOut();
    } catch (e) {
      print(e.toString());
      return null;
    }
  }
}
