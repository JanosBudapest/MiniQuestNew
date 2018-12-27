import {createBottomTabNavigator, createStackNavigator} from "react-navigation";

import Tab1Screen1 from "./Tab1Screen1";
import Tab1Screen2 from "./Tab1Screen2";
import Tab2Screen1 from "./Tab2Screen1";
import Tab2Screen2 from "./Tab2Screen2";
import Tab3Screen1 from "./Tab3Screen1";
import Tab3Screen2 from "./Tab3Screen2";

const tabs = createBottomTabNavigator({

    Tab1: createStackNavigator({

        Tab1Screen1: {
            screen: Tab1Screen1,
        },
        Tab1Screen2: {
            screen: Tab1Screen2,
        }
    }),

    Tab2: createStackNavigator({

        Tab2Screen1: {
            screen: Tab2Screen1,
        },
        Tab2Screen2: {
            screen: Tab2Screen2,
        }

    }),

    Tab3: createStackNavigator({

        Tab3Screen1: {
            screen: Tab3Screen1,
        },
        Tab3Screen2: {
            screen: Tab3Screen2,
        }

    }),
});

export default tabs;
