import csv

result = """// This file has been generated automatically by a Python script
monster_list = [
"""
with open("monster_data.csv", 'r') as datafile:
    for line in csv.reader(datafile):
        monster = {
            "name": "",
            "color": "",
            "data_missing": True,
            "sunbreak": True,
            "ele_weakness": {
                "dragon": False,
                "fire": False,
                "ice": False,
                "lightning": False,
                "Water": False
            },
            "ele_resist": {
                "dragon": False,
                "fire": False,
                "ice": False,
                "lightning": False,
                "Water": False
            },
            "immune": {
                "blast": False,
                "paralysis": False,
                "poison": False,
                "sleep": False,
            },
            "most_resist": {
                "blast": False,
                "paralysis": False,
                "poison": False,
                "sleep": False,
            },
            "least_resist": {
                "blast": False,
                "paralysis": False,
                "poison": False,
                "sleep": False,
            }
        }
        for i in range(len(line)):
            if i==0:
                # Name
                monster["name"] = line[i]
            elif i==1:
                # Weak
                if "d" in line[i]:
                    monster["ele_weakness"]["dragon"] = True
                if "f" in line[i]:
                    monster["ele_weakness"]["fire"] = True
                if "i" in line[i]:
                    monster["ele_weakness"]["ice"] = True
                if "l" in line[i]:
                    monster["ele_weakness"]["lightning"] = True
                if "w" in line[i]:
                    monster["ele_weakness"]["water"] = True
            elif i==2:
                # Resist
                if "d" in line[i]:
                    monster["ele_resist"]["dragon"] = True
                if "f" in line[i]:
                    monster["ele_resist"]["fire"] = True
                if "i" in line[i]:
                    monster["ele_resist"]["ice"] = True
                if "l" in line[i]:
                    monster["ele_resist"]["lightning"] = True
                if "w" in line[i]:
                    monster["ele_resist"]["water"] = True
            elif i==3:
                # Immune
                if "b" in line[i]:
                    monster["immune"]["blast"] = True
                if "p" in line[i]:
                    monster["immune"]["poison"] = True
                if "x" in line[i]:
                    monster["immune"]["paralysis"] = True
                if "s" in line[i]:
                    monster["immune"]["sleep"] = True
            elif i==4:
                # Most Resist
                if "b" in line[i]:
                    monster["most_resist"]["blast"] = True
                if "p" in line[i]:
                    monster["most_resist"]["poison"] = True
                if "x" in line[i]:
                    monster["most_resist"]["paralysis"] = True
                if "s" in line[i]:
                    monster["most_resist"]["sleep"] = True
            elif i==5:
                # Least Resist
                if "b" in line[i]:
                    monster["least_resist"]["blast"] = True
                if "p" in line[i]:
                    monster["least_resist"]["poison"] = True
                if "x" in line[i]:
                    monster["least_resist"]["paralysis"] = True
                if "s" in line[i]:
                    monster["least_resist"]["sleep"] = True
            elif i==6:
                # Sunbreak
                if len(line[i]) == 0:
                    monster["sunbreak"] = False
            elif i==7:
                # Data Missing
                if len(line[i]) == 0:
                    monster["data_missing"] = False
            elif i==8:
                # Color
                monster["color"] = line[i]
        result += f'''{{
            name: "{monster.get("name")}",
            color: "{monster.get("color")}",
            data_missing: {'true' if monster.get("data_missing") else 'false'},
            sunbreak: {'true' if monster.get("sunbreak") else 'false'},
            ele_weakness: {{
                dragon: {'true' if monster.get("ele_weakness", {}).get("dragon") else 'false'},
                fire: {'true' if monster.get("ele_weakness", {}).get("fire") else 'false'},
                ice: {'true' if monster.get("ele_weakness", {}).get("ice") else 'false'},
                lightning: {'true' if monster.get("ele_weakness", {}).get("lightning") else 'false'},
                water: {'true' if monster.get("ele_weakness", {}).get("water") else 'false'},
            }},
            ele_resist: {{
                dragon: {'true' if monster.get("ele_resist", {}).get("dragon") else 'false'},
                fire: {'true' if monster.get("ele_resist", {}).get("fire") else 'false'},
                ice: {'true' if monster.get("ele_resist", {}).get("ice") else 'false'},
                lightning: {'true' if monster.get("ele_resist", {}).get("lightning") else 'false'},
                water: {'true' if monster.get("ele_resist", {}).get("water") else 'false'},
            }},
            immune: {{
                blast: {'true' if monster.get("immune", {}).get("blast") else 'false'},
                paralysis: {'true' if monster.get("immune", {}).get("paralysis") else 'false'},
                poison: {'true' if monster.get("immune", {}).get("poison") else 'false'},
                sleep: {'true' if monster.get("immune", {}).get("sleep") else 'false'}
            }},
            most_resist: {{
                blast: {'true' if monster.get("most_resist", {}).get("blast") else 'false'},
                paralysis: {'true' if monster.get("most_resist", {}).get("paralysis") else 'false'},
                poison: {'true' if monster.get("most_resist", {}).get("poison") else 'false'},
                sleep: {'true' if monster.get("most_resist", {}).get("sleep") else 'false'}
            }},
            least_resist: {{
                blast: {'true' if monster.get("least_resist", {}).get("blast") else 'false'},
                paralysis: {'true' if monster.get("least_resist", {}).get("paralysis") else 'false'},
                poison: {'true' if monster.get("least_resist", {}).get("poison") else 'false'},
                sleep: {'true' if monster.get("least_resist", {}).get("sleep") else 'false'}
            }},
        }},
        '''

result += """
]
"""
# Add end of js file
result += """
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
"""

# Save file
with open("MonsterList.js", 'w') as newfile:
    newfile.write(result)
