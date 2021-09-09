import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:quellen_reiter/models/qr_user.dart';
import 'package:quellen_reiter/screens/authenticate/authenticate.dart';
import 'package:quellen_reiter/screens/home/home.dart';

class Wrapper extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final user = Provider.of<QRUser>(context);
    // either home or auth
    if (user != null) {
      return Home();
    } else {
      return Authenticate();
    }
  }
}
