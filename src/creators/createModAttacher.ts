import { ModAttachr } from "modattachr";

import { FullScreenPokemon } from "../FullScreenPokemon";

export const createModAttacher = (fsp: FullScreenPokemon): ModAttachr =>
    new ModAttachr({
        itemsHolder: fsp.itemsHolder,
        transformModName: (name: string): string => `Mods::${name}`,
        mods: fsp.mods.mods,
    });
