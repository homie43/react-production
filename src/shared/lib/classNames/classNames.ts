type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    // главный класс, последний - класс, который будет подставляться(тема)
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
