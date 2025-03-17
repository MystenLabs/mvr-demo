module mvr_a::mvr_b;

public struct MvrB<phantom T> has drop {}

public struct V2 has drop {}

public fun new(_: V2): MvrB<V2> {
    MvrB<V2> {}
}

public fun new_v2(): V2 {
    V2 {}
}
