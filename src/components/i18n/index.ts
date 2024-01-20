import english from "./en.json";
import spanish from "./es.json";
const LANG = {
    en: english,
    es: spanish
}
export const getI18N=({currentLocale}:{currentLocale:string})=>{
    if (currentLocale in LANG.en) return english
    if (currentLocale in LANG.es) return spanish
    return english
     
}