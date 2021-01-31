monster_list = [{
  name: "Great Izuchi",
  color: "#d6a100",
  data_missing: true,
  weakness: {
    "lightning": false,
    "dragon": false,
    "fire": false,
    "water": false
  }
}, {
  name: "Mizutsune",
  color: "#ffc4fd",
  data_missing: false,
  weakness: {
    "dragon": true,
    "fire": false,
    "lightning": true,
    "water": false
  },
  resist: {
    "dragon": false,
    "fire": false,
    "lightning": false,
    "water": true
  },
  immune: {
    "poison": false,
    "paralysis": false,
    "sleep": false,
    "blast": false,
  }
}, {
  name: "Test no weak or resist",
  color: "",
  data_missing: false,
},
{
  name: "Test no resist",
  color: "",
  data_missing: false,
  weakness: {
    "dragon": true,
    "fire": false,
    "lightning": true,
    "water": false
  }
},
{
  name: "Test All Icons",
  color: "",
  data_missing: false,
  weakness: {
    "dragon": true,
    "fire": true,
    "lightning": true,
    "water": true,
    ice: true
  },
  resist: {
    "dragon": true,
    "fire": true,
    "lightning": true,
    "water": true,
    ice: true
  },
  immune: {
    "poison": true,
    "paralysis": true,
    "sleep": true,
    "blast": true,
  }
}];

for(let i=0; i<36; i++){
  monster_list.push({
    name: "Bulking out list",
    color: "",
    data_missing: true,
  });
}

for(let i=0; i<monster_list.length; i++){
  monster_list[i].id = i;
}


monster_dict = {};
for(monster of monster_list){
  monster_dict[monster.id] = monster;
}

module.exports = {
  monster_list: monster_list,
  monster_dict: monster_dict
};
