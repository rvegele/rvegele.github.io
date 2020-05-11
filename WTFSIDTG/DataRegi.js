category_names = [
'template',
'activity',
'mood',
'character',
'food',
'thing',
'buildable',
'outfit',
'goal_why',
'goal',
'goal_prefix',
'setting',
'setting_description'
];

data = `
----------------- Notes -----------------
• <a> will be replaced with a/an depending on context
• Some generate functions also accept parameters: @name:comma,separated,parameters@


----------------- SENTENCE -----------------
#template:
Get a grip on yourself! Write a book about @activity@ @setting@
Draw a picture of <a> @character:nopost@ @setting@
Call a friend and and pretend to be <a> @character:nopost@ @goal@
How about [watching, learning, doing] some @activity@
Do some daydreaming about @activity@
Feeling @mood@? Go and [make, build] <a> @buildable@
Sort some @thing:plural@ while @activity@
Maybe you should try @activity@
Maybe you should try [cooking, boiling, baking, frying] some @food:plural@
Feeling @mood@? Give @activity@ a go
Give a chance to some @mood@ @activity@
Put on <a> @outfit@ and start @activity@
It's probably a good time to do @activity@ because @goal_why@
How about you put on <a> @outfit@ and pretend you're <a> @character:nopost@ @goal@
Find <a> @thing@ and <a> @thing@ and try building <a> @buildable@
#end

----------------- OUTFITS -----------------
#outfit:
mask
dress
some jeans
some sweats
some cowboy boots
some tights
#end

----------------- GOAL --------------------
#goal_prefix:
[trying, attempting] to
who [desperately,] (wants,want) to
who will stop at nothing to
who (needs,need) to
#end

#goal:
find the secret to [eternal life, eternal youth, everlasting beauty]
save the world from @character:npc@
defeat @character:npc@
find [true love, a soul mate, a friend, peace and quiet]
become [filthy rich, world famous]
rule the world
find a [way home, new home, place to live]
pay off a debt
make the world a better place
make friends
[survive, avert, escape from] the [apocolypse, end of the world]
start a new [business, career, life]
pay the rent on time
leave the planet
eat more healthily
explore the [universe, world, galaxy]
solve a [mysterious, puzzling] case
[repair the, build <a>, protect the, destroy the] [spaceship, time-machine, armageddon-device]
cross [the road, a busy intersection, the galaxy, the ocean]
learn [photography, to play an instrument, to cook, to stop caring what others think]
found a new [religion, city, colony, school, guild, cult]
start a new life [on mars, in the country, in the city, on the moon, as a shepherd]
[gain the respect of @character:npc@, win the affection of @character:npc@]
rescue @character:npc@
#end

#goal_why:
the end of the world is near
the emperor demands so
John Oliver said so
#end

----------------- BUILDABLE (make, build a ...) -----------------
#buildable:
boat
business-plan
skyscraper
fort
tent
#end

----------------- ACTIVITY -----------------
#activity:
fishing
daydreaming
racing
gambling
singing
archeology
cooking
dancing
#end

----------------- FOOD -----------------
#food:
ice-cream
waffle
clam
fish
radish
banana
#end

----------------- THING -----------------
#thing:
banana
newspaper
some ducktape
rock
phone
book
table
lotion
#end

----------------- MOOD -----------------
#mood:
unique
frustrating
[challenging, extreme]
rage-inducing
[stressful, stressed]
[relaxing, relaxed]
meditative
calming
thought-provoking
addictive
[humorous, amusing]
whimsical
[scary, frightening, terrifying]
innovative
inspiring
groovey
artsy
upbeat
violent
peaceful
dreamy
stylish
short-and-sweet
slow-paced
intense
nostalgic
[strange, quirky, unusual]
satirical
#end

----------------- CHARACTER -----------------
#character:
alien
monster
wizard
witch
adventurer
assassin
sailor
chef
robot
ghost
human
skeleton
[duck, goose, penguin, fish, whale, shark]
[puppy, dog, kitten, cat, mammoth, dinosaur, dragon]
[bee, ant, fly, mosquito]
snowman
scientist
programmer
student
youtube influencer
celebrity
president
politician
[businessman, businesswoman]
emperor
god
ninja
technophobe
vampire
hacker
zombie
action figure
geometric shape
thief
pirate
artificial intelligence
[prince, princess, king, queen]
[troll, goblin, orc, dwarf]
knight
farmer
astronaut
pilot
archeologist
doctor
police officer
detective
pyromaniac
gamer
tax collector
plumber
electrician
mechanic
John Oliver
#end

----------------- SETTINGS (a game set... / that takes place...) -----------------
#setting:
on <a> @setting_description@ [planet, spaceship, moon, star, rainbow, island, train, boat, mountain, rollercoaster, street, motorbike, bicycle, shipwreck, bouncy castle]
in <a> @setting_description@ [city, warehouse, graveyard, village, kingdom, sewer, shopping mall, nightclub, cave, labyrinth, park, parking lot, kitchen]
in <a> @setting_description@ [casino, library, junkyard, basement, dungeon, prison, tavern, resturant, cinema, valley, mansion, forest, jungle, office, hotel]
in the [distant future, distant past, recent past, near future, month of December, week before Christmas]
[in an alternate reality, in outer space, underwater, underground, in summer, in winter, in spring, in autumn]
inside [your head, a computer, a submarine, a dream, a nightmare, a bunker, a dumpster]
#end

Note: describes a location
#setting_description:
tiny
microscopic
enormous
spooky
alien
futuristic
ancient
forgotten
mysterious
forbidden
dangerous
holy
bustling
creepy
abandoned
popular
strange-smelling
hypnotic
radioactive
colourful
never-ending
strangely-decorated
tastefully-decorated
rat-infested
lively
vibrant
uninhabited
poorly-decorated
astonishing
critically-acclaimed
beautiful
boring
deadly
grubby
exotic
fabulous
glamorous
gloomy
well-hidden
undiscovered
jolly
luxurious
quaint
quirky
old-fashioned
unfashionable
modern
flying
floating
sinking
burning
mystical
magical
frozen
royal
#end
`;
