Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/mothers',{
	name: 'mothers',
	controller: 'MothersController'
});

Router.route('/mothers/add',{
	name: 'addMother',
	controller: 'MothersController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','addMother']
});
