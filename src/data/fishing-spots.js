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
                description: "At the top of the chart you will see a pass or inlet. This is right along the edge. It carves out a nice deep hard-flowing pass and has a hard sand bottom with a little rock pan. It's great for migrating fish every season of the year and it's full of bait. Anglers focus on this year-round."
            },
            {
                title: 'Secondary Point',
                description: "Secondary points are often not as pronounced and don't offer sharp depth change or cover features. This will have limiting appeal for groups of game fish looking for current to bring feeding opportunities, but it may still provide an ambush chance for a single game fish or a lesser gamefish."
            },
            {
                title: 'High % Point',
                description: "The primary point has a rapid depth change, with current flow and adjacent features like rock oyster or, in this case, a deep hole. This type of point attracts schools of game fish and a variety of predators."
            },
            {
                title: 'Deep Cuts',
                description: "Moving up to the two deep cuts between the mangrove keys to the north, these deeper narrower flows are great ambush zones and are effective plays, especially on tide changes. This type of structure is perfect for drawing in flounder, snook and speckled trout."
            },
            {
                title: 'Pocket',
                description: "To the left of the deep cuts are two structure features called pockets - essentially micro-sized coves. This type of structure is good on higher tide phases, where a single gamefish will hunt for pulled-up finger mullet or bask in the sun's warmth on a cold morning."
            },
            {
                title: 'Checkered Bottom',
                description: "An area of checkered bottom with a mix of grass and sand. It's essentially a flat - an expansive static structure that's home to many bottom-dwelling crustaceans and vertebrates that redfish thrive on. It's not truly cover since most prey can't effectively hide here without digging holes."
            }
        ]
    },
    'Dutchmen Key North': {
        image: ANCLOTE2,
        sections: [
            {
                title: 'Gut/Funnel',
                description: "At the top of this area, you'll see a pathway from the deeper edge of the flat to the shallower portion. We call this structure a gut or funnel. These features concentrate both current and bait while providing a natural corridor on and off the flat. This type of structure is a prime zone for ambush predators like speckled trout."
            },
            {
                title: 'Sandbar',
                description: "Below the gut and funnel, adjacent to another gut, lies a sandbar. This structure offers game fish an area to hunt small schooling fish, particularly fry-sized fish escaping the gut. It's also home to many invertebrates and crustaceans. This is an excellent spot for clients on low-light days, as fish are easily visible against the lighter bottom. Small jigs and flies work well here, with redfish and flounder being the primary targets."
            },
            {
                title: 'Isolated Oyster Bar',
                description: "Below the sandbar are isolated oyster bars. These are food magnets that harbor lots of crabs, micro shrimp, and attract baitfish. These hard substrate structures definitely attract predator gamefish regularly. They're most effective on higher tide phases and are premium ambush zones when isolated like this group of bars."
            },
            {
                title: 'Hooks',
                description: "These shoreline features are excellent during higher tide periods. Mullet and small schooling baitfish follow the shoreline and eventually collect in these hook-like features, setting up prime ambush zones for snook and redfish. These zones are often overlooked by anglers - don't make that mistake."
            },
            {
                title: 'Graduated Edge',
                description: "At the bottom of the satellite map is a graduated edge - a feature with a gradual sloping nature in depth from deep to shallow, usually connected by low tide potholes. Speckled trout love these structures, especially on low incoming tides where they can forage on pinfish, mullet, and other small finfish as the tide begins to flood the flat. The bottom topography is the structure, grass is the cover, and both work simultaneously here making it an excellent fishing area."
            },
            {
                title: 'Cove/Bight',
                description: "Moving west from the graduated edge is what we call a cove or bight. Bights are generally smaller than coves but both serve similar purposes. These areas offer fish sanctuary from strong currents and often hold good populations of bait. They're particularly effective during stronger tides or adverse weather conditions."
            }
        ]
    },
    'Dutchmen Key South': {
        image: ANCLOTE3,
        sections: [
            {
                title: 'Deep Edge',
                description: "The deep edge here provides a stark contrast in depth and serves as a highway for predator fish moving between feeding zones. During tide changes, game fish will stage along this edge to ambush prey being swept by with the current."
            },
            {
                title: 'Grass Line',
                description: "A defined line where sandy bottom transitions to sea grass. This edge creates a natural ambush point where predator fish can hide in the grass and attack bait fish moving across the open sand. Particularly effective during moving tides."
            }
        ]
    },
    'Anclote South': {
        image: ANCLOTE4,
        sections: [
            {
                title: 'Lagoons',
                description: "Protected areas that offer calm water and concentrate bait fish. These spots are particularly effective during windy conditions or strong tides, providing shelter for both predator and prey species."
            },
            {
                title: "Drains",
                description: "Natural channels that drain water from the flat during falling tides. These create excellent ambush points as bait is forced to move through these areas with the falling water."
            },
            {
                title: "Dropoff",
                description: "A sharp change in depth that creates a defined edge. Predator fish use these edges as ambush points, especially during tide changes when bait is forced to move along these edges."
            },
            {
                title: "Beaches",
                description: "Sandy areas that slope gradually into deeper water. These areas are particularly good during the warmer months when bait fish school along the beach edges. The clean bottom makes sight fishing particularly effective here."
            }
        ]
    },
    'Anclote River': {
        image: ANCLOTE5,
        sections: [
            {
                title: 'Shoals',
                description: "Shallow areas that create distinct edges where they meet deeper water. These areas concentrate bait and create natural ambush points for predator fish, especially during moving tides."
            },
            {
                title: 'Channel Edge',
                description: "The defined edge where the main channel meets the shallow flat. This edge serves as a travel corridor for fish and creates excellent feeding opportunities during tide changes."
            }
        ]
    }
};

export { fishingData };
