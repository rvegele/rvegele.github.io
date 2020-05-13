category_names = [
'template',
'activity',
'mood',
'mood_self',
'character',
'character_description',
'character_description_post',
'food',
'thing',
'buildable',
'outfit',
'goal_why',
'goal',
'goal_prefix',
'setting',
'setting_description',
'group_name'
];

data = `
#template:
Call a friend and pretend to be <a> @character:nopost@ @goal@
How about putting on <a> @outfit@ and pretending you're <a> @character:nopost@ @goal@
Draw a picture of <a> @character:nopost@ @setting@ @goal@
Get a grip on yourself! Write <a> @mood@ book about @activity@ @setting@
Stop procrastinating and just @goal:noprefix@
Grab some @food:plural@ and [write a screenplay about, write a novel about, write some poems about, imagine what it would be like to be, create a board game about] @activity@ @setting@
Feeling @mood_self@? Go and [make, build] <a> @buildable@ while using <a> @thing@ and @thing:plural@
Maybe you should try [cooking, boiling, baking, frying, grilling, roasting, stewing, blanching, steaming, caramelizing] some @food:plural@ because @goal_why@
Feeling @mood_self@? Give @activity@ @setting@ a go
Give a chance to some @mood@ @activity:nohaving@
Put on <a> @outfit@ and start @activity@
Put on <a> @outfit@ and pretend to be <a> @character:nopost@ @goal@
It's probably a good time to do @activity@ because @goal_why@
Find <a> @thing@ and <a> @thing@ and try building <a> @buildable@
#end

----------------- OUTFITS -----------------
#outfit:
mask
dress
bandanna
baseball cap
beanie
belt
bib
bow tie
bra
ball gown
bathing suit
bikini
cap
corset
cloak
costume
cape
diaper
fur coat
helmet
hat
hoodie
jacket
kimono
kilt
lab coat
nightgown
raincoat
scarf
shirt
spacesuit
suit
sombrero
singlet
swimsuit
tiara
tuxedo
top hat
turtleneck
some sneakers
some sandals
some overalls
some mittens
some lingerie
some long johns
some high heels
some gloves
some flip-flops
some earmuffs
some boxer shorts
some boots
some breeches
some jeans
some sweats
some cowboy boots
some tights
#end

----------------- GOAL --------------------
#goal_prefix:
[trying, attempting] to
who [desperately,really] (wants,want) to
who will stop at nothing to
who (needs,need) to
who is trying to
who's true goal is to
who's mission in life is to
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
[gain the respect of @character:npc@, win the affection of <a> @character:npc@]
rescue @character:npc@
#end

#goal_why:
the end of the world is near
Trump was right...
the world will never be the same again
you don't need a reason to
the day is still young
why not
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
pole dancing
ice-skating
tik-toking
fishing
daydreaming
racing
surfing the web
listening to music
playing of video games
watching tv
having sex
reading
talking
gambling
singing
archeology
cooking
dancing
#end

----------------- FOOD -----------------
#food:
ice-cream
banana-bread
pancake
sauerkraut
pulled pork burger
vegan ice-cream
waffle
clam
fish
chocolate
radish
banana
#end

----------------- THING -----------------
#thing:
hammer
nail
some glue
brick
chisel
glove
some thread
boom box
some soap
magnet
sock
nail file
hanger
some keys
sofa
pencil
tissue box
sandal
door
clock
cup
mouse pad
spring
some mud
some fabric
some ice
banana
newspaper
some ducktape
rock
phone
book
table
some lotion
#end

----------------- MOOD -----------------
#mood:
unique
frustrating
[challenging, extreme]
rage-inducing
stressful
relaxing
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
short-and-sweet
slow-paced
intense
nostalgic
[strange, quirky, unusual]
satirical
#end

#mood_self:
frustrated
[challenged, extreme]
enraged
stressed
relaxed
meditative
calm
provoked
addicted
amused
whimsical
[scared, frightened, terrified]
innovative
inspired
groovey
artsy
upbeat
violent
peaceful
dreamy
stylish
slow
intense
nostalgic
[strange, quirky, unusual]
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
Donald Trump
Mickey Mouse
Peter Pan
Godzilla
Superman
the Tooth Fairy
Iron Maiden
Ozzy Osbourne
math teacher
#end

#character_description:
tiny
gigantic
lonely
time-travelling
evil
easily-frightened
extremely [attractive, short, tall, intimidating, clumsy]
good-looking
courageous
anxious
forgetful
famous
shy
scary-looking
one-eyed
bored
ambitious
power-hungry
two-headed
wise
elderly
greedy
invisible
magical
blind
peace-loving
polite
worried
rude
genetically [modified, enhanced]
grumpy
charming
energetic
imaginary
[unfriendly, friendly]
nervous
optimistic
pessimistic
undead
quirky
sarcastic
well-dressed
lazy
talkative
royal
cunning
playful
penniless
wealthy
impatient
wind-up
law-[abiding,breaking]
over-enthusiastic
#end

#character_description_post:
from [the future, another planet, another dimension, an alternate reality, a parallel universe]
with no [friends, money, morals, soul]
who loves [kittens, puppies, rainbows, cars, spaceships, animals, flowers, long walks, writing, baking, gardening, fishing, fire]
who (is,are) passionate about [recycling, model trains, education, animal-rights, stamp-collecting, arcade games, board games, tea]
with [a tragic backstory, an adorable pet, a secret superpower, a secret identity]
who (can,can) [fly, bend time, turn invisible, teleport, summon spirits]
with a debilitating fear of [heights, ghosts, flying, water, being alone, people, blood, small spaces, crowds, spiders]
with a tendency to [overreact, faint at the sight of blood, spontaneously combust, over-share]
who (loathes,loathe) [violence, swimming, daylight, robots, humans, aliens]
with a controversial opinion on [politics, pizza toppings, education, robots, science]
who (is,are) addicted to [chocolate, pizza, fast-food, cartoons, danger, tea, coffee]
#end

----------------- SETTING -----------------
#setting:
on <a> @setting_description@ [planet, spaceship, moon, star, rainbow, island, train, boat, mountain, rollercoaster, street, motorbike, bicycle, shipwreck, bouncy castle]
in <a> @setting_description@ [city, warehouse, graveyard, village, kingdom, sewer, shopping mall, nightclub, cave, labyrinth, park, parking lot, kitchen]
in <a> @setting_description@ [casino, library, junkyard, basement, dungeon, prison, tavern, resturant, cinema, valley, mansion, forest, jungle, office, hotel]
in the [distant future, distant past, recent past, near future, month of December, week before Christmas]
[in an alternate reality, in outer space, underwater, underground, in summer, in winter, in spring, in autumn]
inside [your head, a computer, a submarine, a dream, a nightmare, a bunker, a dumpster]
#end

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

#group_name:
group
[faction, gang, family, band, horde]
[organization, league]
#end
`;
