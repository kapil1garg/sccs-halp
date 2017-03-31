Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'requestList'
});

Router.route('/newrequest', {
    name: 'newRequest'
});