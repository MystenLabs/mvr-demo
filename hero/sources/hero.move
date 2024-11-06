module hero::hero;

use std::string::String;

public struct Hero has key, store {
    id: UID,
    name: String,
}

public fun new(name: String, ctx: &mut TxContext): Hero {
    Hero {
        id: object::new(ctx),
        name
    }
}

public fun set_name(hero: &mut Hero, name: String) {
    hero.name = name;
}
