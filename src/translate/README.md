### What is it?
This module help us to make tranlsations in our website.

### How it works?
Istead of writing text you put a ***key*** inside react component.  
This ***key*** appears as usual text in needed language after rendering.  

To make it possible we create **lexicon** (dictionary) in different languages with the same ***keys*** which have equal text but in different languages.  

### Example:  
Instead of: `<h1>Hello world</h1>` write `<h1>{t('hello_world_message')}</h1>`  

We make two lexicons (dictionaries) in json files:  

english.json:  
`{ 'hello_world_message': 'Hello world' }`  

russian.json:  
`{ 'hello_world_message': 'Привет, Мир' }`  

##### Result: 
Depending on what language we choose we see `'Hello world'` or `'Привет, Мир'`.  

### 3 ways to put ***keys*** in react component  

1. We can use construction #1 with function `t`: `t{'some key from lexicon'}`  
.
Example: `<h1>{t('hello_world_key')}</h1>`  
Result: `Hello world` / `Привет, Мир`  

2. We can use construction #2 with tags `<Trans></Trans>` and simple text inside it: `<Trans> Some text from lexicon </Trans>`  
.
Example: `<Trans>Hello world</Trans>`  
Result: `Hello world` / `Привет, Мир`  

3. We can use construction #3 with tags `<Trans></Trans>` without text inside it and its propety `i18nKey` : `<Trans i18nKey='some_key_from_lexicon'></Trans>`  
.
Example: `<Trans i18nKey='hello_world_key'></Trans>`  
Result: `Hello world` / `Привет, Мир`  

We will use 2nd way.

### Use trees in dictionaries:

english.json:  
`{`
...`'hello_key': 'Hello!',`
...`'smalltalk': {`
......`'weather': 'It is rainy... so sad!',`
......`'food': 'Your pancakes are so yummy!',`
...`}`
`}`

Then use construction `keyParent.keyChild`:

Example: `<p>{t('smalltalk.weather')}</p>`  
Result: `It is rainy... so sad`  

----------------
### How to work with *lexicon*
In our website we have 3 languages: **ru**, **be**, **en**.
So we have 3 dictionaries: **ru.json**, **be.json**, **en.json**.

**!!!** To optimize filling the dictionaries and to prevent mistakes USE **masterlist.json**!

In **masterlist.json** make the structure/scheme of all ***keys*** we will need. After that copy that keys in every language dictionary and then fill with text in needed language.

##### Example: 
**`masterlist.json:`**
`{`
`'hello_key': 'string',`
`'my_name_key': 'string',`
`'question_key': 'string'`
`}`

**`en.json:`**
`{`
`'hello_key': 'Hello!',`
`'my_name_key': 'My name is Peter',`
`'question_key': 'And what is your name?'`
`}`

**`ru.json:`**
`{`
`'hello_key': 'Привет!',`
`'my_name_key': 'Меня зовут Петя',`
`'question_key': 'А тебя как зовут?'`
`}`   

### How to implement in my component?

If your component is a Class (not a function):  

1 step: make import: `import { withTranslation, Trans } from 'react-i18next';`   

2 step: in your render insert `<Trans>some_key</Trans>`   

3 step: change your export:   
instead of `export default Component;`   
use `export default withTranslation()(Component);`   
