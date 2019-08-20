'use strict';

const STORE = [
  {
    question: 'Which famous TV character said the following quote? "I am the one who knocks."',
    answers: [
      'Walter White from Breaking Bad',
      'Kyle Chandler from Friday Night Lights',
      'Marcia Brady from the Brady Bunch',
      'Fox Mulder from The X-Files'
    ],
    correctAnswer: 'Walter White from Breaking Bad',
    answerImage: `<img class = 'answerImage' src = 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB_S5B_004_L.jpg' alt = 'Breaking Bad Title Image'>`
  },
  {
    question: 'Which show is the following quote from? ..."to boldly go where no man has gone before."',
    answers: [
      'Battlestar Galactica',
      'The Weakest Link',
      'Star Trek',
      'Lost',
    ],
    correctAnswer: 'Star Trek',
    answerImage: `<img class = 'answerImage' src = 'https://pmcvariety.files.wordpress.com/2014/11/star-trek.jpg?w=1000&h=563&crop=1' alt = 'Star Trek Title Image'>`
  },
  {
    question: 'Which show is the following quote from? "I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I\'ll hit somebody with my car."',
    answers: [
      'Ross Geller from Friends',
      'Leslie Knope from Parks and Recreation',
      'Charlie Kelly from It\'s Always Sunny in Philadelphia',
      'Michael Scott from The Office',
    ],
    correctAnswer: 'Michael Scott from The Office',
    answerImage: `<img class = 'answerImage' src = 'https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/entertainment/5b2fefb9fae96f45b7000002.jpeg' alt = 'The Office Image'>`
  },
  {
    question: '"The truth is out there.", is a quote from what TV show?',
    answers: [
      'Supernatural',
      'The X-Files',
      'Sherlock',
      'CSI: Miami'
    ],
    correctAnswer: 'The X-Files',
    answerImage: `<img class = 'answerImage' src = 'https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2F1428elm.com%2Ffiles%2F2017%2F04%2FX-Files-1.jpg&c=sc&w=850&h=560' alt = 'The X-Files show image'>`
  },
  {
    question: 'Which famous TV character said the following quote? "Don\'t have a cow, man!."',
    answers: [
      'Joey Tribbiani from Friends',
      'Sheldon Cooper from Big Bang Theory',
      'Bart Simpson from The Simpsons',
      'Dr. Gregory House from House'
    ],
    correctAnswer: 'Bart Simpson from The Simpsons',
    answerImage: `<img class = 'answerImage' src = 'https://assets.foxdcg.com/dpp-uploaded/images/the-simpsons/keyart1.jpg' alt = 'The Simpsons Title Image'>`
  },
  {
    question: 'Which famous TV character said the following quote? "I wound up shame-eating the whole pizza. I woke up all greasy and sweaty. My sheets looked like what they wrap deli sandwiches in. Maybe I should join a gym. Do you go to a gym?"',
    answers: [
      'Michael Scott from the Office',
      'Dr. John Dorian from Scrubs',
      'Ted Mosby from How I Met Your Mother',
      'Joey Tribbiani from Friends'
    ],
    correctAnswer: 'Ted Mosby from How I Met Your Mother',
    answerImage: `<img class = 'answerImage' src = 'https://miro.medium.com/max/1838/1*NwthyMSOHc8vi0wBLfcakA.jpeg' alt = 'How I Met Your Mother Title Image'>`
  },
  {
    question: 'This famous phrase is said by which character in Game of Thrones?',
    answers: [
      'Daenerys Targaryen',
      'Tyrion Lannister',
      'Jon Snow',
      'Joffrey Baratheon'
    ],
    correctAnswer: 'Jon Snow',
    answerImage: `<img class = 'answerImage' src = 'https://pmctvline2.files.wordpress.com/2016/02/game-of-thrones-jon-snow.jpg?w=620' alt = 'Image of Jon Snow from Games of Thrones tv series'>`
  },
  {
    question: 'Which famous TV character said the following quote? There\'s no \'I\' in team. There\'s a \'me\' though, if you jumble it up',
    answers: [
    'Dwight Schrute from The Office',
    'Joffrey Baratheon from Game of Thrones',
    'Jesse Pinkman from Breaking Bad',
    'Dr. Gregory House from House M.D.'
    ],
    correctAnswer: 'Dr. Gregory House from House M.D.',
    answerImage: `<img class = 'answerImage' src = 'https://img00.deviantart.net/574b/i/2015/121/1/d/house_md_2_by_kot1ka-d2ziuc6.png' alt = 'House MD tv show image'>`
  },
  {
    question: 'Which famous TV character said the following quote? "Pivot! Pivot! Pivot! Pivot! Pivot! Pivot".',
    answers: [
    'Will Smith from The Fresh Prince of Bel-Air',
    'Ross Geller from Friends',
    'Dwight Schrute from The Office',
    'Danny Tanner from Full House'
    ],
    correctAnswer: 'Pivot! Pivot! Pivot! Pivot! Pivot! Pivot!',
    answerImage: `<img class = 'answerImage' src = 'https://miro.medium.com/max/1838/1*NwthyMSOHc8vi0wBLfcakA.jpeg' alt = 'Friends sitcom show image'>`
  },
  {
    question: 'Which show is this quote from? "You\'re born alone and you die alone and this world just drops a bunch of rules on top of you to make you forget those facts. But I never forget. I\'m living like there\'s no tomorrow, because there isn\'t one."',
    answers: [
    'The X-Files',
    'Breaking Bad',
    'Mad Men',
    'House M.D.'
    ],
    correctAnswer: 'Mad Men',
    answerImage: `<img class = 'answerImage' src = 'https://d362wsx8rkw9qn.cloudfront.net/assets/sm/upload/48/3o/zi/89/adspace_11.jpg' alt = 'Mad Men tv show image'>`
  }
];