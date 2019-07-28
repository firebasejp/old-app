import 'package:flutter/material.dart';
import 'package:app/core/model/event.dart';
// import 'package:flutter_web_browser/flutter_web_browser.dart';
import 'package:url_launcher/url_launcher.dart';

// DEMO event lisr
var eventList = List<Event>.generate(10, (i) {
  final j = i + 1;
  return new Event(
      id: '$j',
      title: 'meetup $j',
      description: 'foobar' * j,
      eventUrl: 'https://example.com/?meetup/$i',
      address: '〒100-8111 東京都千代田区千代田１−１');
});

_launchURL(String url) async {
  // await FlutterWebBrowser.openWebPage(url: url, androidToolbarColor: Colors.orange);
  if (await canLaunch(url)) {
    await launch(url);
  } else {
    throw 'Could not launch $url';
  }
}

class EventsView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Events'),
      ),
      body: ListView.builder(
        itemCount: eventList.length,
        itemBuilder: (context, index) {
          final event = eventList[index];
          return Card(
            margin: const EdgeInsets.all(8.0),
            child: new InkWell(
              onTap: () {
                // FlutterWebBrowser.openWebPage(url: event.eventUrl, androidToolbarColor: Colors.orange);
                _launchURL(event.eventUrl);
              },
              child: Column(
                children: <Widget>[
                  FadeInImage.assetNetwork(
                    placeholder: 'assets/logo.png',
                    image: 'https://picsum.photos/id/9/640/288',
                  ),
                  Padding(
                    padding: EdgeInsets.fromLTRB(16, 8, 16, 8),
                    child: Align(
                        alignment: Alignment.topLeft,
                        child: Text(
                          event.title,
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 32.0),
                        )),
                  ),
                  Padding(
                    padding: EdgeInsets.fromLTRB(16, 0, 16, 8),
                    child: Align(
                        alignment: Alignment.topLeft,
                        child: Text(
                          event.description,
                          style: TextStyle(color: Colors.grey, fontSize: 16.0),
                        )),
                  ),
                  Padding(
                    padding: EdgeInsets.fromLTRB(16, 0, 16, 8),
                    child: Align(
                        alignment: Alignment.topLeft,
                        child: Text(
                          event.address,
                          style: TextStyle(color: Colors.grey, fontSize: 14.0),
                        )),
                  ),
                  Padding(
                    padding: EdgeInsets.fromLTRB(16, 0, 16, 16),
                    child: Align(
                        alignment: Alignment.topRight,
                        child: IconButton(
                          iconSize: 32.0,
                          icon: Icon(
                            Icons.star_border,
                            color: Colors.grey,
                          ),
                          onPressed: () => {},
                        )),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
