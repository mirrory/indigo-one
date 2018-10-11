Project Indigo

Overview:
Indigo is a world sim that features deep customizability, control, and development potential.
With collaborative real-time world editing, VR right in browser, and expansive game development tooling, Indigo empowers you to shape expansive worlds.
Indigo utilizes A-Frame to render interactive 3D objects.
Rather than programming, using an intuitive interface guides each step of your creation path.
The minimalist style of the Indigo world provides consistency, while supporting creativity.
If you've ever wanted to create and live in your favorite RPG, give Indigo a try.

Keywords:
VR (A-Frame)
World Sim
Collaborative
Web
Games (RPGs)
UI

Git:
https://github.com/mirrory/indigo

Focus: 
Usability
Fun Factor
Depth
Web browser
Have as little programmed content as possible, let the user provide the content
Yet, take care of many of the graphical and technical choices
Meant to be relaxing and low-key, not a full-powered engine
The downside is that freedom is restricted, but there are plenty of offerings that don't
More degrees of freedom can be added gradually
VR doesn't need to "look real" to be fun

Not the Focus:
Making things look "real"
Trying to be Unity / a typical full-featured game engine
Trying to be Minecraft
Trying to be The Sims
Trying to be a professional simulator (serious game)
Trying to be fully accurate and faithful to the real world

Key disadvantages to using current editors:
Spend hours messing with textures, models, shapes, and positioning
Need to know how to program graphics, JavaScript, manipulating objects
Current offerings allow total freedom without enforcing any semantic consistency

Key advantages to Indigo:
Intuitive interface
Simplicity
A semantic framework / ontology to build on top of

Features:
A Site for Users to make Accounts
A VR Viewer for the current Universe
Editor Options
Sharing Options
Game Development Options

Reach Features:
VR headset support, browser support (older browser testing)
Phone / tablet support
YouTube recorder Options
Chat (security risk)

Game Types:
RPG
MMO
Movie
Crossover (with friend's universe)

Flow:
Objects are categorized by the domain that they belong to.
The upper level ontology is loosely based on:
https://en.wikipedia.org/wiki/Portal:Contents/Overviews

Tools - Math
	Functions / Tools to edit things
	For example, can create a tool to add 5 to x-axis, then use it in Viewer
Universe - Science
	Space - Astronomy - Create Universe, Planets, Stars, Asteroids
	Physics - Control Physics variables and apply to objects
	Chemistry Set - Chemistry - Utilize Chemicals to create things
	Biology - Create Organisms
Locations - Geography
	Create Locations, Continents, Countries, Regions on Planets
	Physical - Physical Geography - Landforms, Bodies of Water
	Human - Human Geography - Demography, Cities, Towns, Civilization
Humans - People
	Create new People
Time - History
	Past Events
	Present Events
	Future Events
	Create Events
	Move Time Slider (Time passes in Real Time)
	Or, freeze time
Activity - Human Activity
	Create Activities
World - Culture & Art
	Cultural
	Art
	Create Art Forms
Health - Health & Fitness
	Health 
	Fitness
	Create Diseases
Thought - Philosophy
	Encode Philosophy and Morality into People (dicey...)
Library - Reference
	Write Dictionaries and Encyclopedias
Society - Social Science
	Create Politics, Laws, Economies
Technologies - Technology
	Create Technologies
Real things on Earth are not always represented, such as wars, historical events, religions
Users can create representations of things from the real world if they want to
But are encouraged to create entirely new worlds
Generic constructs exist for them to build off of
Universe is entirely abstract
New Objects should have a Name and other properties set at create time
Saving 3D models - in gltf. But where??
Editing models - A-Frame inspector

Entities:
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

Game Options:
Characters
	People can become Characters (who)
Story	
	Script + Timeline + Events
Timeline
	(when)
Music / SFX
Animations / Graphic Effects
Script
	Dialogue said by Characters
Events
	(what, where)
Items
	Things used in game
Components - Inventory, Status Screen, HUD etc
Options
Genre - Can mix mechanics
	-Action RPG
	-Dungeon Crawler
	-Turn Based
	-RTS
	-Strategy
	-Others
Objects
	Other things seen in the game
Battle System
Enemies / Bosses
Set first person vs. third person

Tools:
Random generator

Universe:
Expands to show yours and shared with you
Can list name, collaborators, when last edited and by who

Requires:
Front-end - HTML, CSS, JavaScript and A-Frame - jQuery or other query framework
Big problem worrying about both rendering and keeping state consistent, currently thinking Redux is too heavy
Back-end - Node.js, Express.js, Socket.io, pug, Mongoose
API (JSON) - Express
Database - MongoDB
User documentation
Suggest universe to user, unsupervised clustering
https://aframe.io/docs/0.8.0/introduction/#getting-started
https://socket.io/
https://mongoosejs.com/docs/index.html

Build process:
Docker

Tests:
Logical
Graphical
Interface

Formats:
GLTF

Accessibility:
Screen readers
Other?

Security:
Password encryption
Logging

Responsive design

Front-end:
Monospace font
Main viewer - a-scene. Interactive.
Main dialogue editor - below the viewer. CRUD here.
Sidebar - Title = Project Indigo, icons, and nav.
Icons - Create mode, Game mode, Account edit mode - opens modal
Nav = sections and entities under each - GET
Account edit - Includes username, log out, log in
Include - About, Terms, Copyright, Privacy, GPDR, credits, A-Frame link, things used, Documentation 
Search bar drops down from the top - search by create date, edit date, collaborators, genre - also, suggestions. Search public universes
HTTPS
XSS protection

API:
RESTful JSON
CRUD

Back-end:
Save progress
SQL injection checks

License:
Should be open sourced

Hosting: 
When Alpha is ready
Front-end only can be hosted sooner

WebVR / A-Frame
Can make worlds and games
Can share the worlds and games with your friends
Real-time changes

Initially - Create Universe
Create Stars
Time Slider - Move Epoch
Create Space Junk
Create Planets
Set Planet Composition and Atmosphere, and Temperature
Add Water
Create Biospheres (Animals, plants, etc.)
Name Continents
Create Humanity
Can Skip Any Epochs And Have them Auto-Complete
Or, for more control, slide to the epoch in question.
Making changes to the past will branch the future off (warn)

Reference - You fill in the Reference works of your world to create the "truth"
Culture and Art - You can create art forms and invent games and sports
Geography - Can create and name physical locations, change physical and human geo
Health and Fitness - Can set meters for these and create Disease
Human Activities - Can be enumerated
History - May be random events. Not real world history
Math - May be used
Science - Can manipulate things according to astronomy, physics, chemistry, biology
Technology - Decided by you
People - Can create new humans
Philosophy - Can create / test
Social Science - Includes Politics, Laws, Economy, Infrastructure, Demography

Can: Add new Types and Instances. Can change anything as the platform allows.

Over time, things change. Can watch random events spawn.

Models can be uploaded by link, but visual style should be consistent

For RPG/Adventure games:
Add Scenario, Scene, Room, Camera, Characters, Script, Transitions, HUD, Controls
Can add audio, Dialogue, Battles, Items, Events, Animations, Currency
Possibly Multiplayer / cross world / cross universe
Credits
Include debug and test tools for games
Should protect against malicious textures being uploaded
Games are shared on site

Roadmap:
When I... have time?