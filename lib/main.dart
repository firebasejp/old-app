import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:app/ui/router.dart';
import 'package:app/ui/views/home_view.dart';
import 'package:app/core/viewmodel/bottom_navigation.dart';
import 'package:app/ui/views/events_view.dart';
import 'package:app/ui/views/profile_view.dart';

void main() {
  Provider.debugCheckInvalidValueType = null;
  runApp(App());
}

enum MainView { home, events, profile }

Map<MainView, Widget> _mainViews = {
  MainView.home: new HomeView(),
  MainView.events: new EventsView(),
  MainView.profile: new ProfileView(),
};

var _mainViewList = <Widget>[
  _mainViews[MainView.home],
  _mainViews[MainView.events],
  _mainViews[MainView.profile],
];

Widget _navigationView(BuildContext context, {MainView force}) {
  final bottomNavigation = Provider.of<BottomNavigation>(context);
  if (force != null) {
    bottomNavigation.setSelectedIndex(_mainViewList.indexOf(_mainViews[force]));
  }
  return StreamBuilder<int>(
    stream: bottomNavigation.currentIndex,
    builder: (context, snap) => Scaffold(
      body: _mainViewList[snap.data],
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text('Home'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.event),
            title: Text('Events'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            title: Text('Profile'),
          ),
        ],
        currentIndex: snap.data,
        onTap: bottomNavigation.setSelectedIndex,
      ),
    ),
  );
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        Provider<BottomNavigation>.value(value: new BottomNavigation()),
      ],
      child: MaterialApp(
        title: 'FJUG',
        theme: ThemeData(primarySwatch: Colors.orange),
        routes: {'/': (context) => _navigationView(context)},
        onGenerateRoute: Router.generateRouter,
        onUnknownRoute: (settings) => MaterialPageRoute(
          builder: (_) => Scaffold(
            body: Center(
              child: Text('No route defined for ${settings.name}'),
            ),
          ),
        ),
      ),
    );
  }
}
