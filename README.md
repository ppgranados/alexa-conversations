# Alexa Conversations Demo

This repository contains an small introduction to Alexa Conversations.

# Sample Skill
We will build the Cumbiones locos skill that recommends a cumbia based on the user's preferences about mood, artist country and type of cumbia.

## Dialogs:
| Speaker | Speech                                                                     | Dialog Act        |
| ------- |----------------------------------------------------------------------------| -----------------:|
| User    | I want cumbias from `Mexico`                                               | Invoke API        |
| Alexa   | Do you prefer vallenato, villeras or normal cumbias?                       | Request arguments |
| User    | `Normal`                                                                   | Inform            |
| Alexa   | Do you want romantic or energetic cumbias?                                 | Request arguments |
| User    | `Energetic`                                                                | Inform            |
| Alexa   | Ok. What about this cumbion? 17 años from los Ángeles azules               | Api Success       |
| User    | What about some `villeras`?                                                | Invoke API        |
| Alexa   | For that kind of cumbia I recommend, Yo quiero bailar from los Fumancheros | Api Success       |

## Slot Types:
| Name             | Type                   | Values/Properties                                           |
| ---------------- |:----------------------:| :-----------------------------------------------------------|
| artistOrigin     | Custom with values     | <ul><li>Mexico</li><li>Colombia</li><li>Argentina</li></ul> |
| cumbiaType       | Custom with values     | <ul><li>vallenato</li><li>villera</li><li>normal</li></ul>  |
| mood             | Custom with values     | <ul><li>romantic</li><li>energetic</li></ul>                |
| songName         | Custom with values     | _Placeholder_                                               |
| recommendedSong  | Custom with properties | Properties:<br> <ul><li>song</li><li>artist</li></ul>       |


## API Definitions:
| Name      | Parameters                                                     | Return type      |
| --------- |:---------------------------------------------------------------| ----------------:|
| getCumbia | <ul><li>artistOrigin</li><li>mood</li><li>cumbiaType</li></ul> | recommendedSong  |

## Responses:
### Request for arguments
| Name                 | Speech                                                                                                                                      |
| -------------------- |---------------------------------------------------------------------------------------------------------------------------------------------|
| welcome              | Welcome to cumbiones locos. I can recommend some cumbias for you. Do you want cumbias from Mexico, Colombia or Argentina?                   |
| request_mood         | <ol><li>Do you like romantic or energetic cumbias</li><li>I can recommend romantic or energetic cumbias. Which ones do you prefer</li></ol> |
| request_cumbiaType   | <ol><li>What kind of cumbias do you like?  Vallenato? Villeras? or Regular ones?</li><li>Vallenato? Villeras or Normal cumbias?</li></ol>   |
| request_artistOrigin | <ol><li>Mexican, Colombians or Argentinian cumbias?</li><li>Do you want to hear songs from Mexico, Colombia or Argentina?</li></ol>         |

### Responses from backend
| Name                                  | Speech                                                                                                                    |
| ------------------------------------- |---------------------------------------------------------------------------------------------------------------------------|
| response_getCumbia                    | <ol><li>What about this cumbion? ${payload.recommendation.song} from ${payload.recommendation.artist}</li><li>I recommend this cumbion bien crazy. ${payload.recommendation.song} from ${payload.recommendation.artist}</li></ol>     |
| response_getCumbia_contextCarryOver   | For that kind of cumbias, I recommend ${payload.recommendation.song} from ${payload.recommendation.artist}                |


## Utterance sets:
### Inform arguments
| Name                          | Sample utterances | Slots        |
| ----------------------------- |-------------------| ------------:|
| inform_getCumbia_artistOrigin | {artistOrigin}    | artistOrigin |
| inform_getCumbia_cumbiaType   | {cumbiaType}      | cumbiaType   |
| inform_getCumbia_mood         | {mood}            | mood         |

### Invoke APIs
| Name                                          | Sample utterances                                                                                     | Slots                                             |
| --------------------------------------------- |-------------------------------------------------------------------------------------------------------| -------------------------------------------------:|
| invoke_getCumbia_artistOrigin                 | <ol><li>I want a cumbia from {artistOrigin}</li><li>I want a {artistOrigin} cumbia</li></ol>          |                    <ul><li>artistOrigin</li></ul> |
| inform_getCumbia_cumbiaType                   | <ol><li>I want a {cumbiaType} cumbia</li></ol>                                                        |                      <ul><li>cumbiaType</li></ul> |
| invoke_getCumbia_cumbiaType_artistOrigin      | <ol><li>I want a {cumbiaType} cumbia</li></ol>                                                        | <ul><li>cumbiaType</li><li>artistOrigin</li></ul> |
| inform_getCumbia_mood                         | <ol><li>I want a {mood} cumbia</li></ol>                                                              |                            <ul><li>mood</li></ul> |
| invoke_getCumbia_mood_artistOrigin            | <ol><li>I want a {artistOrigin} {mood} cumbia</li><li>I want a {mood} {artistOrigin} cumbia</li></ol> |       <ul><li>mood</li><li>artistOrigin</li></ul> |
| invoke_getCumbia_mood_cumbiaType              | <ol><li>I want a {cumbiaType} {mood} cumbia</li><li>I want a {mood} {cumbiaType} cumbia</li></ol>     |         <ul><li>mood</li><li>cumbiaType</li></ul> |
| invoke_getCumbia_mood_cumbiaType_artistOrigin | <ol><li>I want {artistOrigin} {cumbiaType} {mood}</li><li>I want a {artistOrigin} {mood} {cumbiaType} cumbia</li><li>I want a {cumbiaType} {artistOrigin} {mood} cumbia</li><li>I wamt a {cumbiaType} {mood} {artistOrigin} cumbia</li><li>I want {mood} {artistOrigin} {cumbiaType} cumbia</li><li>I want a {mood} {cumbiaType} {artistOrigin} cumbia</li></ol> | <ul><li>mood</li><li>cumbiaType</li><li>artistOrigin</li></ul> |


## Supporting files:
* File [backend_template.js](backend_template.js) contains an starter code for building a API Handler.
* File [index.js](index.js) contains the full backend code of the cumbiones locos Alexa Conversations skill.
