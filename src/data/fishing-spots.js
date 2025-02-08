import ANCLOTE1 from '../assets/anclote/ANCLOTE1.png';
import ANCLOTE2 from '../assets/anclote/ANCLOTE2.png';
import ANCLOTE3 from '../assets/anclote/ANCLOTE3.png';
import ANCLOTE4 from '../assets/anclote/ANCLOTE4.png';
import ANCLOTE5 from '../assets/anclote/ANCLOTE5.png';

const fishingData = {
    'Anclote North': {
        image: ANCLOTE1,
        sections: [
            {
                title: 'Pass/Inlet',
                description: "At the top of the chart you will see a pass or inlet. This is right along the edge. It carves out a nice deep hard-flowing pass and has a hard sand bottom with a little rock pan. It's great for migrating fish every season of the year and it's full of bait. Anglers focus on this year-round.",
                tide: 'Moving/Changing',
                fish: ['Snook', 'Redfish', 'Tarpon', 'Trout'],
                season: 'Year-round'
            },
            {
                title: 'Secondary Point',
                description: "Secondary points are often not as pronounced and don't offer sharp depth change or cover features. This will have limiting appeal for groups of game fish looking for current to bring feeding opportunities, but it may still provide an ambush chance for a single game fish or a lesser gamefish.",
                tide: 'All Tides',
                fish: ['Redfish', 'Trout', 'Snook'],
                season: 'Year-round'
            },
            {
                title: 'High % Point',
                description: "The primary point has a rapid depth change, with current flow and adjacent features like rock oyster or, in this case, a deep hole. This type of point attracts schools of game fish and a variety of predators.",
                tide: 'Strong Current',
                fish: ['Snook', 'Redfish', 'Flounder', 'Tarpon'],
                season: 'Year-round'
            },
            {
                title: 'Deep Cuts',
                description: "Moving up to the two deep cuts between the mangrove keys to the north, these deeper narrower flows are great ambush zones and are effective plays, especially on tide changes. This type of structure is perfect for drawing in flounder, snook and speckled trout.",
                tide: 'Changing Tides',
                fish: ['Flounder', 'Snook', 'Speckled Trout'],
                season: 'Year-round'
            },
            {
                title: 'Pocket',
                description: "To the left of the deep cuts are two structure features called pockets - essentially micro-sized coves. This type of structure is good on higher tide phases, where a single gamefish will hunt for pulled-up finger mullet or bask in the sun's warmth on a cold morning.",
                tide: 'High Tide',
                fish: ['Redfish', 'Trout', 'Snook'],
                season: 'Year-round'
            },
            {
                title: 'Checkered Bottom',
                description: "An area of checkered bottom with a mix of grass and sand. It's essentially a flat - an expansive static structure that's home to many bottom-dwelling crustaceans and vertebrates that redfish thrive on. It's not truly cover since most prey can't effectively hide here without digging holes.",
                tide: 'All Tides',
                fish: ['Redfish', 'Trout', 'Snook'],
                season: 'Year-round'
            }
        ]
    },
    'Dutchmen Key North': {
        image: ANCLOTE2,
        sections: [
            {
                title: 'Gut/Funnel',
                description: "At the top of this area, you'll see a pathway from the deeper edge of the flat to the shallower portion. We call this structure a gut or funnel. These features concentrate both current and bait while providing a natural corridor on and off the flat. This type of structure is a prime zone for ambush predators like speckled trout.",
                tide: 'Moving/Changing',
                fish: ['Speckled Trout', 'Redfish', 'Snook'],
                season: 'Year-round'
            },
            {
                title: 'Sandbar',
                description: "Below the gut and funnel, adjacent to another gut, lies a sandbar. This structure offers game fish an area to hunt small schooling fish, particularly fry-sized fish escaping the gut. It's also home to many invertebrates and crustaceans. This is an excellent spot for clients on low-light days, as fish are easily visible against the lighter bottom. Small jigs and flies work well here, with redfish and flounder being the primary targets.",
                tide: 'Low to Incoming',
                fish: ['Redfish', 'Flounder', 'Snook'],
                season: 'Year-round'
            },
            {
                title: 'Isolated Oyster Bar',
                description: "Below the sandbar are isolated oyster bars. These are food magnets that harbor lots of crabs, micro shrimp, and attract baitfish. These hard substrate structures definitely attract predator gamefish regularly. They're most effective on higher tide phases and are premium ambush zones when isolated like this group of bars.",
                tide: 'High Tide',
                fish: ['Redfish', 'Snook', 'Flounder'],
                season: 'Year-round'
            },
            {
                title: 'Hooks',
                description: "These shoreline features are excellent during higher tide periods. Mullet and small schooling baitfish follow the shoreline and eventually collect in these hook-like features, setting up prime ambush zones for snook and redfish. These zones are often overlooked by anglers - don't make that mistake.",
                tide: 'High Tide',
                fish: ['Snook', 'Redfish', 'Trout'],
                season: 'Year-round'
            },
            {
                title: 'Graduated Edge',
                description: "At the bottom of the satellite map is a graduated edge - a feature with a gradual sloping nature in depth from deep to shallow, usually connected by low tide potholes. Speckled trout love these structures, especially on low incoming tides where they can forage on pinfish, mullet, and other small finfish as the tide begins to flood the flat. The bottom topography is the structure, grass is the cover, and both work simultaneously here making it an excellent fishing area.",
                tide: 'Low to Incoming',
                fish: ['Speckled Trout', 'Redfish', 'Snook'],
                season: 'Year-round'
            },
            {
                title: 'Cove/Bight',
                description: "Moving west from the graduated edge is what we call a cove or bight. Bights are generally smaller than coves but both serve similar purposes. These areas offer fish sanctuary from strong currents and often hold good populations of bait. They're particularly effective during stronger tides or adverse weather conditions.",
                tide: 'All Tides',
                fish: ['Redfish', 'Trout', 'Snook'],
                season: 'Year-round'
            }
        ]
    },
    'Dutchmen Key South': {
        image: ANCLOTE3,
        sections: [
            {
                title: 'Trough',
                description: "A Trough is uniquely different than a gut because it's not a pathway from the outside edge of the flat to the shallow zone. Instead, it acts as a giant elongated pothole that both bait fish and gamefish fall into on lower tide phases or even on high barometric pressure where they're looking to equalize. You can imagine this would be an area of structure that should get your attention and pay dividends on the right days.",
                tide: 'Low Tide',
                fish: ['Baitfish', 'Gamefish'],
                season: 'Year-round'
            },
            {
                title: 'Larger Potholes',
                description: "Moving down the map below the trough, I made a notation about larger potholes which happen to be at the end of a gut or funnel feature that leads to the outside edge of the flat. This is an awesome piece of structure because it's the last deeper depth before moving up on a shallow flat. If you ask me, that's some prime real estate for gamefish, and I know that because I've been there.",
                tide: 'Low to Incoming',
                fish: ['Redfish', 'Trout', 'Snook'],
                season: 'Spring to Fall'
            },
            {
                title: 'Grass Flat w/ Potholes',
                description: "Let's talk about this big highlighted area labeled grass flats with potholes. Flats are probably what anglers target the most when looking for redfish and trout, and that's because seagrass is the most plentiful cover in the region and holds tons of forage. Think of it as a grocery store. The issue you have with a really big zone like this is that gamefish could be anywhere in it, so you have to target the structure within the grass flat that is going to be primarily potholes of varying depths and sizes that gamefish utilize to ambush prey. But other structure within that flat could be ambush points as well, such as isolated micro shell bars, old prop scars, and I'm going to say even little limestone rocky shelves that are out there. Generally speaking, you have to cover water in these types of structure zones to be uber successful.",
                tide: 'All Tides',
                fish: ['Redfish', 'Trout', 'Snook', 'Jack'],
                season: 'Year-round'
            },
            {
                title: 'Hard Bar on Main Point',
                description: "Finally, on this overlay we will look at that main rounded point on the edge of the flat. It has a hard white sandbar that defines it, telling you current is relevant here. These big main rounded points may not be very deep, usually under 6 ft, but most of the time this type of structure is home to big speckled trout and even kobia are attracted to this type of structure. It's edge structure and it outlines the flat now.",
                tide: 'Strong Current',
                fish: ['Speckled Trout', 'Kobia'],
                season: 'Spring to Fall'
            }
        ]
    },
    'Anclote South': {
        image: ANCLOTE4,
        sections: [
            {
                title: 'Lagoons',
                description: "It's a shallow body of water and it's surrounded on all sides, and the opening or the drain is cut off usually by bars or land. That's what defines a lagoon in general. These types of structure zones usually harbor crabs and vertebrates, fry, minnows - no real big fish unless there's some unusual high tide. But gamefish see the value in them, especially when the lagoon drains on particularly high tides or wind directions.",
                tide: 'High Tide',
                fish: ['Crabs', 'Fry', 'Minnows', 'Occasional Gamefish'],
                season: 'Year-round'
            },
            {
                title: 'Drains',
                description: "Drains are a structure that allow backwater ponds or lagoons to pull forage through for predators like redfish, snook, flounder, ladyfish, etc. You can see how this drain feature runs from the south end of the lagoon all the way to the east, nearly to the drop-off, which is another bridge to my next point of structure.",
                tide: 'Draining Tide',
                fish: ['Redfish', 'Snook', 'Flounder', 'Ladyfish'],
                season: 'Spring to Fall'
            },
            {
                title: 'Dropoff',
                description: "Drop-offs are a deeper form of structure, generally they're over 10 ft deep and often times 20 ft deep. They're home to larger predators because the current is strong there - that's what carved out that depth, especially when they're in close proximity to such shallow flats like in this map section here. I call them the drive-through windows for big snook, redfish, flounder, and even tarpon in the summertime.",
                tide: 'Strong Current',
                fish: ['Snook', 'Redfish', 'Flounder', 'Tarpon'],
                season: 'Summer'
            },
            {
                title: 'Beaches',
                description: "The beach structure is the most defined edge for this large key island, and lots of gamefish use it to hunt for prey. My favorite feature of the beach has got to be the swash channels that run right along the sandy edge of the beach. Both prey and predators patrol these swash channels, which makes this an excellent zone for anglers to target. You'll catch whiting, flounder, snook, jacks - literally everything in this type of structure feature. And on the outside bars and breaks at the beach, there will be plenty of opportunities to jump a tarpon, run into a school of mackerel, or catch a huge shark.",
                tide: 'All Tides',
                fish: ['Whiting', 'Flounder', 'Snook', 'Jacks', 'Tarpon', 'Mackerel', 'Shark'],
                season: 'Year-round'
            }
        ]
    },
    'Anclote River': {
        image: ANCLOTE5,
        sections: [
            {
                title: 'Shoals',
                description: "All right, let's look at the bonus satellite overlay of the Anclote River mouth. The shoals are the first structure element in the overlay. The difference between shoals and sandbar is that shoals are generally much longer in length. This is one outlining the main channel going in and out of the Anclote River as a structure feature. Shoals are attractive to schooling gamefish that can trap bait against the shoal, especially on strong flows. It's a great play for speckled trout, jacks, and even strings of tarpon certain times of the year.",
                tide: 'Strong Flows',
                fish: ['Speckled Trout', 'Jacks', 'Tarpon'],
                season: 'Spring to Fall'
            },
            {
                title: 'Channel Edge',
                description: "Let's drop down to those spoil islands on the south side of the river channel. They offer anglers great structure very close to deep water, which is key for catching larger speckled trout, snook, and because current and structure collide here, obviously big flounder.",
                tide: 'Moving Current',
                fish: ['Speckled Trout', 'Snook', 'Flounder'],
                season: 'Spring to Fall'
            }
        ]
    }
};

export { fishingData };
