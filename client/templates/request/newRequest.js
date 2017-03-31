Template.newRequest.events({
    'submit form': function(e) {
        e.preventDefault();

        var request = {
            title: $(e.target).find('[name=title]').val(),
            description: $(e.target).find('[name=description]').val(),
            requesterName: $(e.target).find('[name=name]').val(),
            confusionLevel: $(e.target).find('[name=confusionLevel]').val(),
            solved: false,
            location: {
                latitude: $(e.target).find('[name=location-lat]').val(),
                longitude: $(e.target).find('[name=location-long]').val(),
            },
            comments: []
        };

        Requests.insert(request);
        Router.go('requestList');
    }
});