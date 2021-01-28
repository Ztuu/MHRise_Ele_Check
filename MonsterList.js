monster_list = [{
  name: "Great Izuchi",
  color: "#d6a100"
}, {
  name: "Mizutsune",
  color: "#ffc4fd"
}, {
  name: "Test",
  color: ""
}];

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
