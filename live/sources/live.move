
module live::live;

use std::string::String;

public struct Hero has key, store {
    id: UID,
    name: String,
}

// public struct HeroV2 has key, store {
//     id: UID,
//     name: String
// }


public fun new(name: String, ctx: &mut TxContext): Hero {
    Hero {
        id: object::new(ctx),
        name
    }
}

// public fun new_v2(name: String, ctx: &mut TxContext): HeroV2 {
//     HeroV2 {
//         id: object::new(ctx),
//         name
//     }
// }

public fun set_name(hero: &mut Hero, name: String) {
    hero.name = name;
}

// public fun set_name_v2(hero: &mut HeroV2, name: String) {
//     hero.name = name;
// }

// a noop function
public fun noop<T>() {}
