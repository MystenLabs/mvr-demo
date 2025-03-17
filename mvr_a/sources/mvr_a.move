module mvr_a::mvr_a;

public struct MvrA<phantom T> has drop {}

public struct V1 has drop {}

public fun new(_: V1): MvrA<V1> {
    MvrA<V1> {}
}

public fun noop_with_one_type_param<T>() {}

public fun noop_with_two_type_params<T, U>() {}

public fun new_v1(): V1 {
    V1 {}
}
