Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    // Posts Route
    // this.route('home',{
    //     path: '/home',
    // });

    // About Route
    this.route('page2',{
        path:'/page2'
    });

    this.route('messages', {
        path:'/messages'
    });

    this.route('add',{
        path:'/register'
    });

    // Profile Route
    this.route('profile');
});