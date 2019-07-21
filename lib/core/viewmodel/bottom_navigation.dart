import 'package:rxdart/rxdart.dart';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class BottomNavigation with ChangeNotifier {
  final _selectedIndexController = new BehaviorSubject<int>.seeded(0);

  Stream<int> get currentIndex => _selectedIndexController.stream;
  setSelectedIndex(int index) => _selectedIndexController.add(index);

  BottomNavigation() {
    _selectedIndexController.stream.listen((_) => notifyListeners());
  }

  @override
  void dispose() async {
    await _selectedIndexController.close();
    super.dispose();
  }
}
