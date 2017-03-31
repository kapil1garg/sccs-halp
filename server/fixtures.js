if (Requests.find().count() === 0) {
    Requests.insert({
        title: 'Paper Proofreading',
        description: 'I have a big paper due in a couple days, and would really love for someone to help me out with some editing.',
        requesterName: 'peter',
        confusionLevel: 'low',
        solved: false,
        location: {latitude: 42.053060, longitude: -87.674784},
        comments: [{user: 'john', content: 'What\'s the paper about? I could help out if it\'s something in the humanitites, but wouldn\'t be much good in the sciences.', upvote: 1, downvote: 0},
                   {user: 'peter (OP)', content: 'It\'s about World War II and the effect of the war on trade in India.', upvote: 0, downvote: 0},
                   {user: 'john', content: 'Sounds good! I\'ll come by in a bit.', upvote: 2, downvote: 0}]
      });

      Requests.insert({
        title: 'Econ 310-1 Homework',
        description: 'The last lecture was super confusing, and I\'m not sure how to approach the homework. Is anyone else stuck and want to work together on it?',
        requesterName: 'paul',
        confusionLevel: 'medium',
        solved: false,
        location: {latitude: 42.057438, longitude: -87.671975},
        comments: [{user: 'kapow', content: 'Yes, definitely! I\'ll come there after class', upvote: 1, downvote: 0}]
      });

      Requests.insert({
        title: 'Traveling Salesman Approximation',
        description: 'I\'m having trouble writing an approximation algorithm for the traveling salesman.',
        requesterName: 'carl',
        confusionLevel: 'high',
        solved: false,
        location: {latitude: 42.057812, longitude: -87.675874},
        comments: [{user: 'harold', content: 'Have you tried proving P = NP?', upvote: 2, downvote: 10},
                   {user: 'kapow', content: 'This might be helpful: http://www.cs.princeton.edu/~wayne/cs423/lectures/approx-alg-4up.pdf', upvote: 5, downvote: 1}]
      });
}