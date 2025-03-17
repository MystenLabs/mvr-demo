module mvr_a::mvr_a;

public struct MvrA<phantom T> has drop {}

public struct V1 has drop {}

public fun new(_: V1): MvrA<V1> {
    MvrA<V1> {}
}

public fun new_v1(): V1 {
    V1 {}
}
