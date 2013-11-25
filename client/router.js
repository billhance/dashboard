Router.configure({
    autoRender: false,
    notFoundTemplate: '404'
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'graphList'
    });

    this.route('graphAdd', {
        path: '/graphs/add'
    });

    this.route('graphEdit', {
        path: '/graphs/:_id',
        before: function () {
            Session.set('currentGraphId', this.params._id);
        }
    });

    this.route('dashboardList', {
        path: '/dashboards'
    });

    this.route('dashboardView', {
        path: '/dashboards/:_id',
        before: function () {
            Session.set('currentDashboardId', this.params._id);
        }
    });

    this.route('userList', {
        path: '/users',
        before: function () {
            if (!isAdmin()) {
                this.render('users403');
                this.stop();
            }
        }
    });
});

Router.addHook('before', function () {
    if (!Meteor.user()) {
        this.render('401');
        this.stop();
    }

    if (!isUser()) {
        this.render('403');
        this.stop();
    }
});
