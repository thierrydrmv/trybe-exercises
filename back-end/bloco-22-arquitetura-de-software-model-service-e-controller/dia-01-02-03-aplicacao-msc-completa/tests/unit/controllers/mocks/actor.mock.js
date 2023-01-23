const atores = [
  {
    "actor_id": 1,
    "first_name": "PENELOPE",
    "last_name": "GUINESS",
    "last_update": "2006-02-15T04:34:33.000Z"
  },
  {
    "actor_id": 2,
    "first_name": "NICK",
    "last_name": "WAHLBERG",
    "last_update": "2006-02-15T04:34:33.000Z"
  },
  {
    "actor_id": 3,
    "first_name": "ED",
    "last_name": "CHASE",
    "last_update": "2006-02-15T04:34:33.000Z"
  }
];

const getActor = {
  "actor_id": 1,
  "first_name": "PENELOPE",
  "last_name": "GUINESS",
  "last_update": "2006-02-15T04:34:33.000Z"
};

const invalidActor = {
  "last_name": "WAHLBERG",
};

const objActor = { 
  id: 1, 
  body: {
    "first_name": "NICK",
  "last_name": "WAHLBERG"
  }
  }

const addActor = {
  "first_name": "NICK",
  "last_name": "WAHLBERG",
}

const addActorResponse = {
  "actor_id": 2,
  "first_name": "NICK",
  "last_name": "WAHLBERG",
  "last_update": "2006-02-15T04:34:33.000Z"
};

module.exports = { atores, getActor, objActor, invalidActor, addActorResponse, addActor }