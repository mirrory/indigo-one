REST API

The Project Indigo REST API delivers data from MongoDB and receives data from jQuery.
As the broker between these two components, it controls data flow between them.
The format is JSON.
The protocol is HTTP.

The following format will be used in this document:
'/route' : METHODS SUPPORTED
summary
{ schema }

---

'/universes' : GET
GET all the "public" Universes.
Can include search parameters.
Returns array of Universes with pagination.

'/universes/{userId}' : GET,POST
GET all of the Universes owned by a User.
POST to create a new Universe.
Returns array of Universes if GET, response message if POST.

'/universes/{userId}/{universeId}' : GET,PUT,DELETE
GET a specific Universe.
PUT updates on a specific Universe.
DELETE a Universe.

'/games' : GET
GET all the "public" Games.
Can include search parameters.
Returns array of Games.

'/games/{universeId}' : GET,POST
GET all of the Games in a Universe.
POST to create a new Game in a Universe.
Returns array of Games if GET, response message if POST.

'/games/{universeId}/{gameId}' : GET,PUT,DELETE
GET a specific Game.

'/planets/{universeId}' : GET,POST
GET all of the Planets in a Universe.

'/planets/{universeId}/{planetId}' : GET,PUT,DELETE
GET a specific Planet.

'/stars/{universeId}' : GET,POST
GET all of the Stars in a Universe.

'/stars/{universeId}/{starId}' : GET,PUT,DELETE
GET a specific Star.

'/asteroids/{universeId}' : GET,POST
GET all of the Asteroids in a Universe.

'/asteroids/{universeId}/{asteroidId}' : GET,PUT,DELETE
'/spacetimepoint/{universeId}' : GET,POST
'/spacetimepoint/{universeId}/{spacetimepointId}' : GET,PUT,DELETE
'/physicsvars/{universeId}' : GET,POST
'/physicsvars/{universeId}/{physicsvarId}' : GET,PUT,DELETE
'/chemicalelements/{universeId}' : GET,POST
'/chemicalelements/{universeId}/{chemicalelementId}' : GET,PUT,DELETE
'/chemicalcompounds/{universeId}' : GET,POST
'/chemicalcompounds/{universeId}/{chemicalcompoundId}' : GET,PUT,DELETE
'/organisms/{universeId}' : GET,POST
'/organisms/{universeId}/{organismId}' : GET,PUT,DELETE
'/plants/{universeId}' : GET,POST
'/plants/{universeId}/{plantId}' : GET,PUT,DELETE
'/animals/{universeId}' : GET,POST
'/animals/{universeId}/{animalId}' : GET,PUT,DELETE
'/humans/{universeId}' : GET,POST
'/humans/{universeId}/{humanId}' : GET,PUT,DELETE
'/biomes/{universeId}/{planetId}' : GET,POST
'/biomes/{universeId}/{planetId}/{biomeId}' : GET,PUT,DELETE
'/continents/{universeId}/{planetId}' : GET,POST
'/continents/{universeId}/{planetId}/{continentId}' : GET,PUT,DELETE
'/countries/{universeId}/{planetId}' : GET,POST
'/countries/{universeId}/{planetId}/{countryId}' : GET,PUT,DELETE
'/settlements/{universeId}/{planetId}' : GET,POST
'/settlements/{universeId}/{planetId}/{settlementId}' : GET,PUT,DELETE
'/landforms/{universeId}/{planetId}' : GET,POST
'/landforms/{universeId}/{planetId}/{landformId}' : GET,PUT,DELETE
'/liquidbodies/{universeId}/{planetId}' : GET,POST
'/liquidbodies/{universeId}/{planetId}/{liquidbodyId}' : GET,PUT,DELETE
'/timepoints/{universeId}/{planetId}' : GET,POST
'/timepoints/{universeId}/{planetId}/{timepointId}' : GET,PUT,DELETE
'/activities/{universeId}/{planetId}' : GET,POST
'/activities/{universeId}/{planetId}/{activityId}' : GET,PUT,DELETE
'/culturefacets/{universeId}/{planetId}' : GET,POST
'/culturefacets/{universeId}/{planetId}/{culturefacetId}' : GET,PUT,DELETE
'/artforms/{universeId}/{planetId}' : GET,POST
'/artforms/{universeId}/{planetId}/{artformId}' : GET,PUT,DELETE
'/diseases/{universeId}/{planetId}' : GET,POST
'/diseases/{universeId}/{planetId}/{diseaseId}' : GET,PUT,DELETE
'/philosophies/{universeId}/{planetId}' : GET,POST
'/philosophies/{universeId}/{planetId}/{philosophyId}' : GET,PUT,DELETE
'/referenceworks/{universeId}/{planetId}' : GET,POST
'/referenceworks/{universeId}/{planetId}/{referenceworkId}' : GET,PUT,DELETE
'/politicalparties/{universeId}/{planetId}' : GET,POST
'/politicalparties/{universeId}/{planetId}/{politicalpartyId}' : GET,PUT,DELETE
'/laws/{universeId}/{planetId}' : GET,POST
'/laws/{universeId}/{planetId}/{lawId}' : GET,PUT,DELETE
'/economicsystems/{universeId}/{planetId}' : GET,POST
'/economicsystems/{universeId}/{planetId}/{economicsystemId}' : GET,PUT,DELETE
'/technologies/{universeId}/{planetId}' : GET,POST
'/technologies/{universeId}/{planetId}/{technologyId}' : GET,PUT,DELETE
'/buildings/{universeId}/{planetId}' : GET,POST
'/buildings/{universeId}/{planetId}/{buildingId}' : GET,PUT,DELETE
'/tools/{universeId}' : GET,POST
'/tools/{universeId}/{toolId}' : GET,PUT,DELETE
'/characters/{gameId}' : GET,POST
'/characters/{gameId}/{characterId}' : GET,PUT,DELETE
'/events/{gameId}' : GET,POST
'/events/{gameId}/{eventId}' : GET,PUT,DELETE
'/audio/{gameId}' : GET,POST
'/audio/{gameId}/{audioId}' : GET,PUT,DELETE
'/animations/{gameId}' : GET,POST
'/animations/{gameId}/{animationId}' : GET,PUT,DELETE
'/dialogues/{gameId}' : GET,POST
'/dialogues/{gameId}/{dialogueId}' : GET,PUT,DELETE
'/items/{gameId}' : GET,POST
'/items/{gameId}/{itemId}' : GET,PUT,DELETE
'/components/{gameId}' : GET,POST
'/components/{gameId}/{componentId}' : GET,PUT,DELETE
'/gameoptions/{gameId}' : GET,POST
'/gameoptions/{gameId}/{gameoptionId}' : GET,PUT,DELETE
'/objects/{gameId}' : GET,POST
'/objects/{gameId}/{objectId}' : GET,PUT,DELETE
'/mechanics/{gameId}' : GET,POST
'/mechanics/{gameId}/{mechanicId}' : GET,PUT,DELETE
'/enemies/{gameId}' : GET,POST
'/enemies/{gameId}/{enemyId}' : GET,PUT,DELETE

---
Types / Ideas:



Universe(id,name,collaborators,last_edit_date,create_date)
Game(id,name,universe_id,collaborators,last_edit_date,create_date)
-- all the following have universe_id --
Planet(id,name,radius,atmosphere,location,color,axial_tilt)
Star(id,name,location,radius,color,stage,tempc)
Asteroid(id,name,location,size,color)
PhysicsVar(id,variable,value,tool_id)
ChemicalElement(id,name,atomic_number)
ChemicalCompound(id,name,elements)
(specific)Organism(id,name,type,size,location)
Plant(id,name,type,size,color,location)
Animal(id,name,type,size,color,location,happiness,dob,health,is_pet)
Human(id,name,height,weight,race,citizenship,location,happiness,dob,health,status,job,political_party)
-- planet id --
Biome(id,name,tempc_range)
Continent(id,name,location)
Country(id,name,location,gdp,population,continent_id,economic_system)
Settlement(id,name,location,population,continent_id,country_id)
Landform(id,name,type,continent_id,country_id)
LiquidBody(id,name,type,continent_id,country_id,chemical_makeup)
Timepoint(id,type,time_happened)
Activity(id,name,health_factor,fun_factor)
CultureFacet(id,name)
ArtForm(id,name,type,is_performance,is_visual)
Disease(id,name,affects_plants,affects_animals,affects_people,symptoms,survival_rate)
Philosophy(id,name)
ReferenceWork(id,name,type)
PoliticalParty(id,name,originators)
Law(id,name,type,rule)
EconomicSystem(id,name,originators)
Technology(id,name,type,inventors)
Building(id,name,height,width,color,location,type,owned_by,built_by)
Tool(id,name,type,acts_on,exp) -- exp for expression
-- games --
Character(human_id,power,stat)
Event(type)
Audio(file)
Animation(file)
Dialogue(dialogue,character_id)
Item(name)
Component(name)
Option(pov)
Object(id,name)
Mechanic(id,exp)
Enemy(id,name)