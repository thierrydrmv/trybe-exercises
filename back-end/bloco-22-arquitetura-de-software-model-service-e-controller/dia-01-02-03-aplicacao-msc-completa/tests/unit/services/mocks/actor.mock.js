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

const addActor = {
  "first_name": "NICK",
  "last_name": "WAHLBERG",
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

  const objActorInvalido = { 
    id: 22, 
    body: {
      "first_name": "NICK",
    "last_name": "WAHLBERG"
    }
    }

module.exports = { atores, addActor, objActor, invalidActor, objActorInvalido }