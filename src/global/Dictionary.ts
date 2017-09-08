interface Dictionary {
    [ index: string ]: any;

}

interface DictionaryForm {
    [ index: string ]: DictionaryForm|Dictionary|string|number|boolean|any;
}
